import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

/**
 * Check contents of tooltip.
 * @param {page} page Page provides methods to interact with a single tab.
 * @param {string} elementId The ID on the test page.
 * @param {string} expectedText The expected tooltip message.
 * @returns {Promise<boolean>} True if the tooltip text matches, false otherwise.
 */
async function checkTooltip(page, elementId, expectedText) {
  const tooltipMatches = await page.evaluate(({ id, text }) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const annotations = element.querySelectorAll('sa11y-annotation');
    let foundMatch = false;
    annotations.forEach((annotation) => {
      const annotationShadow = annotation.shadowRoot;
      if (annotationShadow) {
        const message = annotationShadow.querySelector('button')?.getAttribute('data-tippy-content');
        if (message && message.includes(text)) {
          foundMatch = true;
        }
      }
    });
    return foundMatch;
  }, { id: elementId, text: expectedText });
  return tooltipMatches;
}

/**
 * Check to ensure there's no annotation!
 * @param {class} page Page provides methods to interact with a single tab.
 * @param {selector} elementId The ID on the test page.
 */
async function noAnnotation(page, elementId) {
  const result = await page.evaluate((id) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const annotation = element.querySelector('sa11y-annotation');
    return !annotation; // Return true if annotation is absent.
  }, elementId);
  return result;
}

/* Unit test suite. */
let page;
test.describe('Sa11y Unit Tests', () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  // Close everything down after running through all tests.
  test.afterAll(async () => {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await page.close();
  });

  test('Navigate to unit test page and toggle Sa11y', async () => {
    // Navigate to unit tests page.
    await page.goto('http://localhost:8080/test/pages/unit-tests.html');

    // Toggle main toggle.
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          const panel = document.querySelector('sa11y-control-panel').shadowRoot;
          const toggle = panel.querySelector('#toggle');
          toggle.click();
          resolve();
        }, 100);
      });
    });
  });

  test('Open status panel', async () => {
    const panelOpen = await page.evaluate(() => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const item = panel.getElementById('panel');
      return item.classList.contains('active');
    });
    expect(panelOpen).toBe(true);
  });

  test('Open Page Outline', async () => {
    // Click on the outline toggle.
    const outlinePanelActive = await page.evaluate(() => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const toggle = panel.getElementById('outline-toggle');
      toggle.click();

      return new Promise((resolve) => {
        setTimeout(() => {
          const outlinePanel = panel.getElementById('outline-panel');
          const isActive = outlinePanel.classList.contains('active');
          resolve(isActive);
        }, 100);
      });
    });
    expect(outlinePanelActive).toBe(true);
  });

  test('Open Settings', async () => {
    // Click on the outline toggle.
    const settingsPanelActive = await page.evaluate(() => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const toggle = panel.getElementById('settings-toggle');
      toggle.click();

      return new Promise((resolve) => {
        setTimeout(() => {
          const settingsPanel = panel.getElementById('settings-panel');
          const isActive = settingsPanel.classList.contains('active');
          resolve(isActive);
        }, 100);
      });
    });
    expect(settingsPanelActive).toBe(true);
  });

  /* Toggle all toggleable buttons. Needed for other unit tests! */
  test('Toggle setting buttons', async () => {
    const toggleSettings = await page.evaluate(async () => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const settings = [
        'contrast-toggle',
        'labels-toggle',
        'links-advanced-toggle',
        'readability-toggle',
        'theme-toggle',
      ];

      const isActivePromises = settings.map((setting) => {
        const toggle = panel.getElementById(setting);
        toggle.click();

        return new Promise((resolve) => {
          setTimeout(() => {
            const isActive = toggle.getAttribute('aria-pressed') === 'true';
            resolve(isActive);
          }, 100);
        });
      });

      return Promise.all(isActivePromises);
    });

    const allTogglesActive = toggleSettings.every((isActive) => isActive === true);
    expect(allTogglesActive).toBeTruthy();
  });

  /* **************** */
  /*  Headings        */
  /* **************** */

  test('Empty heading', async () => {
    const issue = await checkTooltip(
      page, 'error-empty-heading', 'Empty heading found',
    );
    expect(issue).toBe(true);
  });

  test('Skipped heading', async () => {
    const issue = await checkTooltip(
      page, 'error-skipped-heading', 'Non-consecutive heading level used.',
    );
    expect(issue).toBe(true);
  });

  test('Ignored heading should have no annotation', async () => {
    const issue = await noAnnotation(
      page, 'nothing-ignore-this-heading',
    );
    expect(issue).toBe(true);
  });

  test('Heading too long', async () => {
    const issue = await checkTooltip(
      page, 'warning-headings-too-long', 'Heading is long!',
    );
    expect(issue).toBe(true);
  });

  test('Blockquote as heading', async () => {
    const issue = await checkTooltip(
      page, 'warning-blockquote-headings', 'Blockquotes should be used for quotes only.',
    );
    expect(issue).toBe(true);
  });

  test('Blockquote should have no annotation', async () => {
    const issue = await noAnnotation(
      page, 'nothing-blockquote-long-enough',
    );
    expect(issue).toBe(true);
  });

  test('Empty heading contains a decorative image', async () => {
    const issue = await checkTooltip(
      page, 'error-empty-heading-decorative-image', 'Heading has no text, but contains an image.',
    );
    expect(issue).toBe(true);
  });

  test('Heading contains an image with alt text', async () => {
    const issue = await checkTooltip(
      page, 'pass-heading-image-alt', 'Good',
    );
    expect(issue).toBe(true);
  });

  test('Skipped heading in the shadow DOM', async () => {
    const shadow = await page.evaluate(async () => {
      const shadowTest = document.querySelector('shadow-test').shadowRoot;
      const annotation = shadowTest.querySelector('sa11y-annotation').shadowRoot;
      const message = annotation.querySelector('button').getAttribute('data-tippy-content');
      return message.includes('Non-consecutive heading');
    });
    expect(shadow).toBe(true);
  });

  test('<p><b>Bolded text used as heading</b></p>', async () => {
    const issue = await checkTooltip(
      page, 'warning-bold-fake-heading', 'A line of bold or large text might look like a heading',
    );
    expect(issue).toBe(true);
  });

  test('<p><b>Bolded text</b><br> as heading</p>', async () => {
    const issue = await checkTooltip(
      page, 'warning-bold-heading-br', 'A line of bold or large text might look like a heading',
    );
    expect(issue).toBe(true);
  });

  test('No annotation for long bolded sentence', async () => {
    const issue = await noAnnotation(
      page, 'nothing-long-bold-text',
    );
    expect(issue).toBe(true);
  });

  test('Large paragraph text as heading', async () => {
    const issue = await checkTooltip(
      page, 'warning-large-p-heading', 'A line of bold or large text might look like a heading',
    );
    expect(issue).toBe(true);
  });

  test('No annotation for large paragraph with punctuation', async () => {
    const issue = await noAnnotation(
      page, 'nothing-large-p-punctuation',
    );
    expect(issue).toBe(true);
  });

  /* **************** */
  /*  Images          */
  /* **************** */

  test('Image has alt text', async () => {
    const issue = await checkTooltip(
      page, 'pass-image-has-alt-text', 'Good',
    );
    expect(issue).toBe(true);
  });

  test('Alt text has suspicious stop word', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-text-has-suspicious-stop-word', 'Assistive technologies already indicate that this is an image',
    );
    expect(issue).toBe(true);
  });

  test('Decorative image', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-is-decorative', 'Image is marked as <strong>decorative</strong>',
    );
    expect(issue).toBe(true);
  });

  test('Decorative image using using empty space', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-is-decorative-using-empty-space', 'Image is marked as <strong>decorative</strong>',
    );
    expect(issue).toBe(true);
  });

  test('Alt text is too long', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-text-is-too-long', 'Alt text description is <strong>too long</strong>',
    );
    expect(issue).toBe(true);
  });

  test('Missing alt text', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-alt-text', 'Missing alt text!',
    );
    expect(issue).toBe(true);
  });

  test('Alt has file extension', async () => {
    const issue = await checkTooltip(
      page, 'error-alt-text-has-file-extension', 'File extension within the alt text found.',
    );
    expect(issue).toBe(true);
  });

  test('Alt has placeholder text', async () => {
    const issue = await checkTooltip(
      page, 'error-alt-text-has-placeholder-text', 'Non-descript or placeholder alt text found.',
    );
    expect(issue).toBe(true);
  });

  test('Linked decorative image with surrounding link text', async () => {
    const issue = await checkTooltip(
      page, 'pass-linked-decorative-image-surrounding-text', 'Image is marked as decorative, although the link is using the surrounding text as a descriptive label.',
    );
    expect(issue).toBe(true);
  });

  test('Linked image with alt text', async () => {
    const issue = await checkTooltip(
      page, 'warning-link-has-alt-text', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    expect(issue).toBe(true);
  });

  test('Linked image has alt text that contains a stop word', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-stop-word', 'Ensure the alt text describes the destination of the link, not a literal description of the image.',
    );
    expect(issue).toBe(true);
  });

  test('Linked image has long alt', async () => {
    const issue = await checkTooltip(
      page, 'warning-link-alt-too-long', 'Alt text description on a linked image is <strong>too long</strong>',
    );
    expect(issue).toBe(true);
  });

  test('Linked image contains both alt and link text', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-and-link-text', 'Image link contains <strong>both alt text and surrounding link text.</strong>',
    );
    expect(issue).toBe(true);
  });

  test('Linked image missing alt text', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-alt', 'Image is being used as a link but is missing alt text!',
    );
    expect(issue).toBe(true);
  });

  test('Linked decorative image', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-decorative-image', 'Image within link is marked as decorative and there is no link text.',
    );
    expect(issue).toBe(true);
  });

  test('Linked decorative image using empty space', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-decorative-empty-space', 'Image within link is marked as decorative and there is no link text.',
    );
    expect(issue).toBe(true);
  });

  test('Linked image with missing alt and contains link text', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-alt-contains-link-text', 'Image is being used as a link with surrounding text, although the alt attribute should be marked as decorative.',
    );
    expect(issue).toBe(true);
  });

  test('Linked image has alt text containing placeholder stop words', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-alt-placeholder-stopword', 'Non-descript or placeholder alt text within a linked image found.',
    );
    expect(issue).toBe(true);
  });

  test('Linked image has alt text containing file extension', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-alt-file-extension', 'File extension within the alt text found. Ensure the alt text describes the destination of the link, not a literal description of the image.',
    );
    expect(issue).toBe(true);
  });

  test('Figure image with different alt and caption text', async () => {
    const issue = await checkTooltip(
      page, 'pass-figure-different-alt-caption', 'Good',
    );
    expect(issue).toBe(true);
  });

  test('Figure image with alt but without figcaption', async () => {
    const issue = await checkTooltip(
      page, 'pass-figure-without-figcaption', 'Good',
    );
    expect(issue).toBe(true);
  });

  test('Decorative figure image', async () => {
    const issue = await checkTooltip(
      page, 'warning-decorative-figure-element', 'Image is marked as <strong>decorative</strong>',
    );
    expect(issue).toBe(true);
  });

  test('Decorative figure image and figcaption', async () => {
    const issue = await checkTooltip(
      page, 'warning-decorative-figure-element-with-figcaption', '<strong>caption</strong> was provided, the image should also have alt text in most cases',
    );
    expect(issue).toBe(true);
  });

  test('Figure element has duplicate alt and caption text', async () => {
    const issue = await checkTooltip(
      page, 'warning-figure-duplicate-alt-caption', 'Do not use the exact same words for both the alt and caption text',
    );
    expect(issue).toBe(true);
  });

  test('Linked figure with alt but without figcaption', async () => {
    const issue = await checkTooltip(
      page, 'warning-linked-figure-alt-without-figcaption', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    expect(issue).toBe(true);
  });

  test('Linked image opens in new tab', async () => {
    const issue = await checkTooltip(
      page, 'warning-hyperlinked-image-opens-in-new-tab', 'Link opens in a new tab or window without warning.',
    );
    expect(issue).toBe(true);
  });

  test('Linked image opens in new tab, alt text provides warning', async () => {
    const issue = await checkTooltip(
      page, 'warning-linked-image-opens-in-new-tab', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    expect(issue).toBe(true);
  });

  test('Linked image should ignore text within link', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-link-should-ignore-text-within-link', 'Image link contains alt',
    );
    expect(issue).toBe(true);
  });

  test('Linked image should ignore text within link via string match exclusion prop ', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-link-should-ignore-text-within-link-string-match', 'Image link contains alt',
    );
    expect(issue).toBe(true);
  });

  test('Linked image has aria-hidden, but still focusable', async () => {
    const issue = await checkTooltip(
      page, 'error-hyperlinked-image-aria-hidden-focusable', 'still keyboard focusable.',
    );
    expect(issue).toBe(true);
  });

  test('Image has aria-hidden', async () => {
    const issue = await noAnnotation(
      page, 'nothing-image-has-aria-hidden-true',
    );
    expect(issue).toBe(true);
  });

  test('Linked image has aria-hidden and negative tabindex', async () => {
    const issue = await noAnnotation(
      page, 'nothing-linked-image-aria-hidden-negative-tabindex',
    );
    expect(issue).toBe(true);
  });

  test('Linked image with aria-hidden, negative tabindex, and alt', async () => {
    const issue = await noAnnotation(
      page, 'nothing-hyperlinked-image-aria-hidden-negative-tabindex-alt',
    );
    expect(issue).toBe(true);
  });

  /* **************** */
  /*  Links           */
  /* **************** */

  test('Non descript link text', async () => {
    const ids = [
      'error-non-descript-link-1',
      'error-non-descript-link-2',
      'error-non-descript-link-3',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Link text may not be descriptive enough out of context');
      expect(issue).toBe(true);
    });
  });

  test('Descriptive link text', async () => {
    const issue = await noAnnotation(
      page, 'nothing-descriptive-link',
    );
    expect(issue).toBe(true);
  });

  test('Non descript links using exclusions prop', async () => {
    const issue = await checkTooltip(
      page, 'error-non-descript-exclusions-prop', 'Link text may not be descriptive',
    );
    expect(issue).toBe(true);
  });

  test('Non descript link using string match exclusion prop', async () => {
    const issue = await checkTooltip(
      page, 'error-non-descript-string-exclusions-prop', 'Link text may not be descriptive',
    );
    expect(issue).toBe(true);
  });

  test('Empty links', async () => {
    const issue1 = await checkTooltip(page, 'error-empty-1', 'Remove empty links');
    expect(issue1).toBe(true);
    const issue2 = await checkTooltip(page, 'error-empty-2', 'Remove empty links');
    expect(issue2).toBe(true);
    const issue3 = await checkTooltip(page, 'error-empty-3', 'Remove empty links');
    expect(issue3).toBe(true);
    const issue4 = await checkTooltip(page, 'error-empty-4', 'Remove empty links');
    expect(issue4).toBe(true);
    const issue5 = await checkTooltip(page, 'error-empty-5', 'Remove empty links');
    expect(issue5).toBe(true);
  });

  test('Empty icon links', async () => {
    const ids = [
      'error-empty-icon-link-1',
      'error-empty-icon-link-2',
      'error-empty-icon-link-3',
      'error-empty-icon-link-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'icon link');
      expect(issue).toBe(true);
    });
  });

  test('Empty hyperlinks with accessible name via title attribute', async () => {
    const ids = [
      'nothing-link-title-1',
      'nothing-link-title-2',
      'nothing-link-title-3',
      'nothing-link-title-4',
      'nothing-link-title-5',
      'nothing-link-title-6',
      'nothing-link-title-7',
    ];
    ids.forEach(async (id) => {
      const issue = await noAnnotation(page, id);
      expect(issue).toBe(true);
    });
  });

  test('Link text contains warning word', async () => {
    const ids = [
      'warning-link-word-1',
      'warning-link-word-2',
      'warning-link-word-3',
      'warning-link-word-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'places focus on mouse mechanics');
      expect(issue).toBe(true);
    });
  });

  test('Long URLs used as link text', async () => {
    const issue = await checkTooltip(
      page, 'warning-long-url-link-text', 'Longer, less intelligible URLs',
    );
    expect(issue).toBe(true);
  });

  test('Short URLs used as link text', async () => {
    const issue = await noAnnotation(
      page, 'nothing-short-url-link-text',
    );
    expect(issue).toBe(true);
  });

  test('Links that have the same name but different URL', async () => {
    const issue = await checkTooltip(
      page, 'warning-same-name-diff-url-1', 'Link has identical text as another link',
    );

    // Uses ARIA-label
    const issue2 = await checkTooltip(
      page, 'warning-same-name-diff-url-2', 'Link has identical text as another link',
    );
    expect(issue).toBe(true);
    expect(issue2).toBe(true);
  });

  test('Links to DOI', async () => {
    const issue = await checkTooltip(
      page, 'warning-links-to-doi', 'DOI',
    );
    expect(issue).toBe(true);
  });

  test('Links to file without warning', async () => {
    const issue = await checkTooltip(
      page, 'warning-link-file', 'Link points to a PDF or downloadable file',
    );
    expect(issue).toBe(true);
  });

  test('Links to file with warning', async () => {
    const issue = await noAnnotation(
      page, 'nothing-link-file',
    );
    expect(issue).toBe(true);
  });

  test('Links with aria-label', async () => {
    const issue1 = await checkTooltip(page, 'pass-aria-link-1',
      'Learn more about dogs');
    expect(issue1).toBe(true);

    const issue2 = await checkTooltip(page, 'pass-aria-link-2',
      'Learn more about WCAG');
    expect(issue2).toBe(true);

    const issue3 = await checkTooltip(page, 'pass-aria-link-3',
      'Learn more about accessibility &#40;Links externally&#41;');
    expect(issue3).toBe(true);

    const issue4 = await checkTooltip(page, 'pass-aria-link-4',
      'about apples');
    expect(issue4).toBe(true);

    const issue5 = await checkTooltip(page, 'pass-aria-link-5',
      'Learn more about apples and oranges');
    expect(issue5).toBe(true);

    const issue6 = await checkTooltip(page, 'pass-aria-link-6',
      'Learn more about Lord of the Rings and the Return of the King');
    expect(issue6).toBe(true);

    const issue7 = await checkTooltip(page, 'pass-aria-link-7',
      'Learn more about the Return of the King &#40;LOTR&#41;');
    expect(issue7).toBe(true);
  });

  test('Links with aria-hidden, but focusable', async () => {
    const issue = await checkTooltip(
      page, 'error-link-aria-hidden-focusable', 'still keyboard focusable',
    );
    expect(issue).toBe(true);
  });

  test('Links with aria-hidden, unfocusable', async () => {
    const issue = await noAnnotation(
      page, 'nothing-link-aria-hidden-unfocusable',
    );
    expect(issue).toBe(true);
  });

  /* **************** */
  /*  QA              */
  /* **************** */

  test('Table without issues', async () => {
    const issue = await noAnnotation(
      page, 'nothing-table',
    );
    expect(issue).toBe(true);
  });

  test('Missing table headers, but focusable', async () => {
    const issue = await checkTooltip(
      page, 'error-table-missing-headers', 'Missing table headers!',
    );
    expect(issue).toBe(true);
  });

  test('Empty table headers', async () => {
    const issue = await checkTooltip(
      page, 'error-empty-table-header', 'Empty table header found!',
    );
    expect(issue).toBe(true);
  });

  test('Table with semantic headings', async () => {
    const issue = await checkTooltip(
      page, 'error-table-has-semantic-headings', 'Semantic headings such as',
    );
    expect(issue).toBe(true);
  });

  test('Table with semantic headings has 3 errors', async () => {
    const issue = await page.evaluate(async () => {
      const semanticTable = document.getElementById('error-table-has-semantic-headings');
      return semanticTable.querySelectorAll('sa11y-annotation').length;
    });
    expect(issue).toBe(3);
  });

  test('PDF link', async () => {
    const issue = await checkTooltip(
      page, 'warning-pdf', 'Unable to check PDFs',
    );
    expect(issue).toBe(true);
  });

  test('PDF link with trialing characters', async () => {
    const issue = await checkTooltip(
      page, 'warning-pdf-trailing-characters', 'Unable to check PDFs',
    );
    expect(issue).toBe(true);
  });

  test('Links to Google Sheet', async () => {
    const issue = await checkTooltip(
      page, 'warning-google-doc', 'Unable to check document',
    );
    expect(issue).toBe(true);
  });

  test('Links to Word document', async () => {
    const issue = await checkTooltip(
      page, 'warning-word-doc', 'Unable to check document',
    );
    expect(issue).toBe(true);
  });

  test('Uppercase text', async () => {
    const ids = [
      'warning-allcaps-1',
      'warning-allcaps-2',
      'warning-allcaps-3',
      'warning-allcaps-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Found all caps');
      expect(issue).toBe(true);
    });
  });

  test('Inconsistent all caps (no annotation)', async () => {
    const issue = await noAnnotation(
      page, 'nothing-allcaps',
    );
    expect(issue).toBe(true);
  });

  test('Underlined text', async () => {
    const ids = [
      'warning-underline-1',
      'warning-underline-2',
      'warning-underline-3',
      'warning-underline-4',
      'warning-underline-5',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Underlined text can be confused');
      expect(issue).toBe(true);
    });
  });

  test('Fake lists', async () => {
    const ids = [
      'warning-list-1',
      'warning-list-2',
      'warning-list-3',
      'warning-list-4',
      'warning-list-5',
      'warning-list-6',
      'warning-list-7',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'trying to create a list?');
      expect(issue).toBe(true);
    });
  });

  test('Link with empty href or <a href>', async () => {
    const issue = await checkTooltip(
      page, 'error-broken-same-page-empty-href', 'Broken same-page link',
    );
    expect(issue).toBe(true);
  });

  test('Link used as button without roles (a href=#)', async () => {
    const issue = await checkTooltip(
      page, 'error-broken-same-page', 'Broken same-page link',
    );
    expect(issue).toBe(true);
  });

  test('Link used as button with proper role', async () => {
    const issue = await noAnnotation(
      page, 'nothing-same-page-with-role',
    );
    expect(issue).toBe(true);
  });

  test('Elements with duplicate IDs but not referenced by anything', async () => {
    const issue = await noAnnotation(
      page, 'nothing-duplicate-id',
    );
    expect(issue).toBe(true);
  });

  test('In-page link referencing duplicate IDs', async () => {
    const issue = await checkTooltip(
      page, 'error-broken-same-page-duplicate-id', 'Duplicate ID',
    );
    expect(issue).toBe(true);
  });

  test('Interactive element using aria-labelledby referencing duplicate IDs', async () => {
    const issue = await checkTooltip(
      page, 'error-same-aria-labelledby-duplicate-ids', 'Duplicate ID',
    );
    expect(issue).toBe(true);
  });

  test('Two buttons with same id', async () => {
    const issue = await noAnnotation(
      page, 'nothing-duplicate-button-ids',
    );
    expect(issue).toBe(true);
  });

  test('Duplicate ID within the Shadow DOM', async () => {
    const shadow = await page.evaluate(async () => {
      const shadowTest = document.querySelector('shadow-test-duplicate-id').shadowRoot;
      const annotation = shadowTest.querySelector('sa11y-annotation').shadowRoot;
      const message = annotation.querySelector('button').getAttribute('data-tippy-content');
      return message.includes('Duplicate ID');
    });
    expect(shadow).toBe(true);
  });

  test('Subscript and superscript paragraphs', async () => {
    const ids = [
      'warning-supsub-1',
      'warning-supsub-2',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'subscript');
      expect(issue).toBe(true);
    });
  });

  test('Contrast issues', async () => {
    const ids = [
      'error-contrast-1',
      'error-contrast-2',
      'error-contrast-3',
      'error-contrast-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'enough contrast');
      expect(issue).toBe(true);
    });
  });

  test('Contrast warning', async () => {
    const issue = await checkTooltip(
      page, 'warning-contrast', 'contrast of this text is unknown',
    );
    expect(issue).toBe(true);
  });

  /* **************** */
  /*  Inputs          */
  /* **************** */

  test('Inputs with no issues', async () => {
    const ids = [
      'nothing-input-1',
      'nothing-input-2',
      'nothing-input-3',
      'nothing-input-4',
      'nothing-input-5',
      'nothing-input-6',
    ];
    ids.forEach(async (id) => {
      const issue = await noAnnotation(page, id);
      expect(issue).toBe(true);
    });
  });

  test('Inputs with missing labels', async () => {
    const ids = [
      'error-input-1',
      'error-input-2',
      'error-input-3',
      'error-input-4',
      'error-input-5',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'no label associated with this input');
      expect(issue).toBe(true);
    });

    const issue2 = await checkTooltip(
      page, 'error-input-has-id', 'a <code>for</code> attribute to the label that matches',
    );
    expect(issue2).toBe(true);

    const issue3 = await checkTooltip(
      page, 'error-input-img', 'Image button is missing alt text',
    );
    expect(issue3).toBe(true);
  });

  test('Inputs with warnings', async () => {
    const ids = [
      'warning-input-1',
      'warning-input-2',
      'warning-input-3',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Input has an accessible name');
      expect(issue).toBe(true);
    });

    const issue2 = await checkTooltip(
      page, 'warning-input-reset', 'Reset buttons',
    );
    expect(issue2).toBe(true);
  });

  /* **************** */
  /* Embedded content */
  /* **************** */

  test('iFrame with aria-hidden and negative tabindex', async () => {
    const issue = await noAnnotation(
      page, 'nothing-hidden',
    );
    expect(issue).toBe(true);
  });

  test('iframe with negative tabindex', async () => {
    const issue = await checkTooltip(
      page, 'error-focusable-content', 'embedded content will not be keyboard accessible',
    );
    expect(issue).toBe(true);
  });

  test('iframe without accessible name', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-acc-name', 'Embedded content requires an accessible name that describe',
    );
    expect(issue).toBe(true);
  });

  test('Generic iFrame with title', async () => {
    const issue = await checkTooltip(
      page, 'warning-iframe', 'Unable to check embedded content.',
    );
    expect(issue).toBe(true);
  });

  test('iFrame with video source', async () => {
    const issue = await checkTooltip(
      page, 'warning-iframe-youtube', 'all videos have closed captioning',
    );
    expect(issue).toBe(true);
  });

  test('iFrame with audio source', async () => {
    const issue = await checkTooltip(
      page, 'warning-iframe-soundcloud', 'transcript for all podcasts',
    );
    expect(issue).toBe(true);
  });

  test('iFrame with data viz source', async () => {
    const issue = await checkTooltip(
      page, 'warning-iframe-dataviz', 'Data visualization',
    );
    expect(issue).toBe(true);
  });

  test('Video without track', async () => {
    const issue = await checkTooltip(
      page, 'warning-video', 'captions for all audio and video content',
    );
    expect(issue).toBe(true);
  });

  test('Video with track element (empty src)', async () => {
    const issue = await checkTooltip(
      page, 'nothing-video-null-track', 'captions for all audio and video content',
    );
    expect(issue).toBe(true);
  });

  test('Video with track', async () => {
    const issue = await noAnnotation(
      page, 'nothing-video',
    );
    expect(issue).toBe(true);
  });

  test('Audio', async () => {
    const issue = await checkTooltip(
      page, 'warning-audio', 'transcripts for audio content is a mandatory',
    );
    expect(issue).toBe(true);
  });
});
