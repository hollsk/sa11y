// Options, language object, constants, and utilities.
import defaultOptions from './utils/default-options';
import Lang from './utils/lang';
import * as Utils from './utils/utils';
import Constants from './utils/constants';
import Elements from './utils/elements';
import find from './utils/find';

// Extras
import detectPageChanges from './features/detect-page-changes';
import { dismissLogic, dismissButtons, removeDismissListeners } from './features/dismiss-annotations';
import { addColourFilters, resetColourFilters } from './features/colour-filters';
import { exportResults, removeExportListeners } from './features/export-results';
import ConsoleErrors from './interface/console-error';

// Create UI/interface elements
import mainToggle from './logic/main-toggle-logic';
import ControlPanel from './interface/control-panel';
import settingsPanelToggles from './logic/settings-panel-logic';
import initializePanelToggles from './logic/control-panel-logic';
import generatePageOutline from './interface/page-outline';
import { updatePanel, updateBadge, updateCount } from './logic/update-panel';
import { TooltipComponent, DismissTooltip } from './interface/tooltips';
import { Annotations, annotate, detectOverflow, nudge } from './interface/annotations';
import { HeadingAnchor, HeadingLabel } from './interface/heading-labels';
import { skipToIssue, removeSkipBtnListeners } from './logic/skip-to-issue';

// Checks/rulesets
import checkImages from './rulesets/images';
import checkHeaders from './rulesets/headers';
import checkLinkText from './rulesets/link-text';
import checkContrast from './rulesets/contrast';
import checkLabels from './rulesets/labels';
import checkReadability from './rulesets/readability';
import checkEmbeddedContent from './rulesets/embedded-content';
import checkQA from './rulesets/quality-assurance';
import checkCustom from './sa11y-custom-checks';

class Sa11y {
  constructor(options) {
    const option = {
      ...defaultOptions,
      ...options,
    };

    /* *********************************************************** */
    /*  Initialize: Start your engines.                            */
    /* *********************************************************** */
    this.initialize = () => {
      // Do not run Sa11y if any supplied elements detected on page.
      const checkRunPrevent = () => {
        const { doNotRun } = option;
        return doNotRun.trim().length > 0 ? document.querySelector(doNotRun) : false;
      };

      if (!checkRunPrevent()) {
        // Register web components
        customElements.define('sa11y-heading-label', HeadingLabel);
        customElements.define('sa11y-heading-anchor', HeadingAnchor);
        customElements.define('sa11y-annotation', Annotations);
        customElements.define('sa11y-tooltips', TooltipComponent);
        customElements.define('sa11y-dismiss-tooltip', DismissTooltip);
        customElements.define('sa11y-control-panel', ControlPanel);
        customElements.define('sa11y-console-error', ConsoleErrors);

        // Initialize global constants and exclusions.
        Constants.initializeGlobal(option);
        Constants.initializeReadability(option);
        Constants.initializeExclusions(option);
        Constants.initializeEmbeddedContent(option);

        // Once document has fully loaded.
        Utils.documentLoadingCheck(() => {
          if (option.headless) {
            // Headless: Perform all checks without loading UI.
            this.checkAll();
            Utils.store.removeItem('sa11y-dismissed');
          } else {
            // Build control panel.
            const controlPanel = new ControlPanel();
            document.body.appendChild(controlPanel);

            // Initialize control panel.
            settingsPanelToggles(this.checkAll, this.resetAll);
            initializePanelToggles();
            addColourFilters();

            // Detect page changes (for SPAs).
            detectPageChanges(
              option.detectSPArouting,
              this.checkAll,
              this.resetAll,
            );

            // Initialize dismiss tooltip.
            this.dismissTooltip = new DismissTooltip();
            document.body.appendChild(this.dismissTooltip);

            // Disable toggle initially.
            Constants.Panel.toggle.disabled = false;

            // Initial check once page is done loading.
            setTimeout(() => this.checkAll(), option.delayCheck);

            // Disable button if user needs to wait longer than 700ms.
            if (option.delayCheck >= 700) {
              Constants.Panel.toggle.disabled = true;
            }

            // Initialize main toggle
            mainToggle(this.checkAll, this.resetAll);
          }
        });
      }
    };

    /* *********************************************************** */
    /*  Check All: Where all the magic happens.                    */
    /* *********************************************************** */
    this.checkAll = async (
      desiredRoot = option.checkRoot,
      desiredReadabilityRoot = option.readabilityRoot,
    ) => {
      try {
        this.results = [];
        this.headingOutline = [];
        this.errorCount = 0;
        this.warningCount = 0;
        this.customChecksRunning = false;

        // Initialize root areas to check.
        const root = document.querySelector(desiredRoot);
        if (!root) {
          Utils.createAlert(`${Lang.sprintf('ERROR_MISSING_ROOT_TARGET', desiredRoot)}`);
        }
        Constants.initializeRoot(desiredRoot, desiredReadabilityRoot);

        // Find all web components on the page.
        Constants.initializeShadowSearch(option, desiredRoot);

        // Find and cache elements.
        Elements.initializeElements(option);

        // Ruleset checks
        checkHeaders(this.results, option, this.headingOutline);
        checkLinkText(this.results, option);
        checkImages(this.results, option);
        checkContrast(this.results, option);
        checkLabels(this.results, option);
        checkQA(this.results, option);
        checkEmbeddedContent(this.results, option);
        checkReadability();

        /* Custom checks */
        if (option.customChecks === true) {
          // Option 1: Provide via sa11y-custom-checks.js
          checkCustom(this.results);
        } else if (typeof option.customChecks === 'object') {
          // Option 2: Provide as an object when instantiated.
          this.results.push(...option.customChecks);
        } else if (option.customChecks === 'listen') {
          // Option 3: Provide via event listener. Yoinked from Editoria11y!
          this.customChecksRunning = true;
          this.customChecksFinished = 0;
          document.addEventListener('sa11y-resume', () => {
            this.customChecksFinished += 1;
            if (this.customChecksFinished === 1) {
              this.customChecksRunning = false;
              this.updateResults();
            }
          });
          window.setTimeout(() => {
            if (this.customChecksRunning === true) {
              this.customChecksRunning = false;
              this.updateResults();
              throw Error('Sa11y: No custom checks were returned.');
            }
          }, option.delayCustomCheck);
          window.setTimeout(() => {
            const customChecks = new CustomEvent('sa11y-custom-checks');
            document.dispatchEvent(customChecks);
          }, 0);
        }

        // No custom checks running.
        if (!this.customChecksRunning) this.updateResults();
      } catch (error) {
        const consoleErrors = new ConsoleErrors(error);
        document.body.appendChild(consoleErrors);
        throw Error(error);
      }
    };

    this.updateResults = () => {
      // Filter out heading issues that are outside of the root target.
      this.results = this.results.filter((item) => item.isWithinRoot !== false);

      // Generate HTML path, and optionally CSS selector path of element.
      this.results.forEach(($el) => {
        const cssPath = option.selectorPath ? Utils.generateSelectorPath($el.element) : '';
        const htmlPath = $el.element?.outerHTML.replace(/\s{2,}/g, ' ').trim() || '';
        Object.assign($el, { htmlPath, cssPath });
      });

      if (option.headless === false) {
        // Check for dismissed items and update results array.
        const dismiss = dismissLogic(
          this.results,
          this.dismissTooltip,
          this.checkAll,
          this.resetAll,
        );
        this.results = dismiss.updatedResults;
        this.dismissed = dismiss.dismissedIssues;

        // Update count & badge.
        const count = updateCount(
          this.results,
          this.errorCount,
          this.warningCount,
        );
        updateBadge(count.error, count.warning);

        /* If panel is OPENED. */
        if (Utils.store.getItem('sa11y-remember-panel') === 'Opened') {
          // Paint the page with annotations.
          this.results.forEach(($el, i) => {
            Object.assign($el, { id: i });
            annotate(
              $el.element,
              $el.type,
              $el.content,
              $el.inline,
              $el.position,
              $el.id,
              $el.dismiss,
              option.dismissAnnotations,
            );
          });

          // After annotations are painted, find & cache.
          Elements.initializeAnnotations();

          // Initialize tooltips
          const tooltipComponent = new TooltipComponent();
          document.body.appendChild(tooltipComponent);

          dismissButtons(
            this.results,
            this.dismissed,
            this.checkAll,
            this.resetAll,
          );

          generatePageOutline(
            this.dismissed,
            this.headingOutline,
            option.showHinPageOutline,
          );

          updatePanel(
            dismiss.dismissCount,
            count.error,
            count.warning,
          );

          // Initialize Skip to Issue button.
          skipToIssue(this.results);

          // Initialize Export Results plugin.
          if (option.exportResultsPlugin) {
            exportResults(this.results, dismiss.dismissedResults);
          }

          // Extras
          detectOverflow();
          nudge();
        }

        // Make sure toggle isn't disabled after checking.
        Constants.Panel.toggle.disabled = false;
      }

      // Dispatch custom event that stores the results array.
      const event = new CustomEvent('sa11y-check-complete', {
        detail: {
          results: this.results,
          page: window.location.pathname,
        },
      });
      document.dispatchEvent(event);
    };

    /* *********************************************************** */
    /*  Reset all: Clears everything and resets the panel.         */
    /* *********************************************************** */
    this.resetAll = (restartPanel = true) => {
      Constants.Global.html.removeAttribute('data-sa11y-active');

      // Reset all data attributes.
      Utils.resetAttributes([
        'data-sa11y-parent',
        'data-sa11y-error',
        'data-sa11y-warning',
        'data-sa11y-good',
        'data-sa11y-error-inline',
        'data-sa11y-warning-inline',
        'data-sa11y-overflow',
        'data-sa11y-pulse-border',
        'data-sa11y-filter',
      ], 'document');

      // Remove from page.
      Utils.remove([
        'sa11y-annotation',
        'sa11y-heading-label',
        'sa11y-heading-anchor',
        'sa11y-tooltips',
        '[data-sa11y-readability-period]',
        '[data-sa11y-clone-image-text]',
        '.sa11y-css-utilities',
      ], 'document');

      // Remove from panel.
      Constants.Panel.outlineList.innerHTML = '';
      Constants.Panel.pageIssuesList.innerHTML = '';
      Constants.Panel.readabilityInfo.innerHTML = '';
      Constants.Panel.readabilityDetails.innerHTML = '';
      Constants.Panel.panel.classList.remove('has-page-issues');
      Constants.Panel.pageIssues.classList.remove('active');

      // Remove any active alerts from panel.
      Utils.removeAlert();

      // Remove EventListeners.
      removeSkipBtnListeners();
      removeExportListeners();
      removeDismissListeners();

      // Reset colour filters.
      resetColourFilters();

      // Main panel warning and error count.
      while (Constants.Panel.status.firstChild) Constants.Panel.status.removeChild(Constants.Panel.status.firstChild);

      if (restartPanel) {
        Constants.Panel.panel.classList.remove('active');
      }
    };

    /* *********************************************************** */
    /*  Methods: Useful utilities for integrations.                */
    /* *********************************************************** */

    // Method: temporarily disable toggle.
    this.disabled = () => {
      if (Utils.store.getItem('sa11y-remember-panel') === 'Opened') {
        Constants.Panel.toggle.click();
      }
      Constants.Panel.toggle.disabled = true;
    };

    // Method: re-enable toggle.
    this.enabled = () => {
      Constants.Panel.toggle.disabled = false;
    };

    // Method: find utility.
    this.find = (selector, desiredRoot, exclude) => find(selector, desiredRoot, exclude);

    // Method: prepare dismissal keys.
    this.prepareDismissal = (string) => Utils.prepareDismissal(string);

    // Method: sanitize HTML.
    this.sanitizeHTML = (string) => Utils.sanitizeHTML(string);

    /* *********************************************************** */
    /*  Initialize Sa11y.                                          */
    /* *********************************************************** */
    this.initialize();
  }
}

export {
  Lang,
  Sa11y,
};
