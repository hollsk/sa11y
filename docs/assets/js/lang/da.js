
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.1.4
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var da = {
  // Danish
  strings: {
    LANG_CODE: 'da',
    MAIN_TOGGLE_LABEL: 'Tjek tilgængelighed',
    CONTAINER_LABEL: 'Tilgængelighedstjek',
    ERROR: 'Fejl',
    ERRORS: 'Fejl',
    WARNING: 'Advarsel',
    WARNINGS: 'Advarsler',
    GOOD: 'God',
    ON: 'På',
    OFF: 'Af',
    ALERT_TEXT: 'Alarm',
    ALERT_CLOSE: 'Luk',
    OUTLINE: 'Sideoversigt',
    PAGE_ISSUES: 'Side Problemer',
    SETTINGS: 'Indstillinger',
    CONTRAST: 'Kontrast',
    FORM_LABELS: 'Etiketter til formularer',
    LINKS_ADVANCED: 'Links (avanceret)',
    DARK_MODE: 'Mørk tilstand',
    SHORTCUT_SCREEN_READER: 'Gå videre til udgaven. Tastaturgenvej: Alt S',
    SHORTCUT_TOOLTIP: 'Spring til nummer',
    NEW_TAB: 'Åbner ny fane',
    PANEL_HEADING: 'Tilgængelighedstjek',
    PANEL_STATUS_NONE: 'Ingen fejl fundet.',
    PANEL_ICON_WARNINGS: 'advarsler fundet.',
    PANEL_ICON_TOTAL: 'samlede problemer fundet.',
    NOT_VISIBLE_ALERT: 'Det element, du prøver at se, er ikke synligt; det kan være skjult eller inde i en harmonika- eller fanekomponent. Her er en forhåndsvisning:',
    ERROR_MISSING_ROOT_TARGET: 'Hele siden blev kontrolleret for tilgængelighed, fordi målområdet <code>%(root)</code> ikke findes.',
    HEADING_NOT_VISIBLE_ALERT: 'Overskriften er ikke synlig; den kan være skjult eller inde i en harmonika- eller fanekomponent.',
    SKIP_TO_PAGE_ISSUES: 'Spring til sideudgaver',
    CONSOLE_ERROR_MESSAGE: 'Beklager, men der er et problem med tilgængelighedstjekkeren på denne side. Kan du venligst <a href="%(link)">rapportere det via denne formular</a> eller på <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Vis %(dismissCount) afviste advarsler',
    DISMISS: 'Afvis',
    DISMISSED: 'Afviste advarsler',
    DISMISS_REMINDER: 'Bemærk venligst, at advarsler kun afvises <strong>midlertidigt</strong>. Hvis du sletter din browserhistorik og dine cookies, gendannes alle tidligere afviste advarsler på alle sider.',

    // Export
    DATE: 'Dato',
    PAGE_TITLE: 'Sidetitel',
    RESULTS: 'Resultater',
    EXPORT_RESULTS: 'Eksportér resultater',
    GENERATED: 'Resultater genereret med %(tool).',
    PREVIEW: 'Forhåndsvisning',
    ELEMENT: 'Element',
    PATH: 'Sti',

    // Colour filters
    COLOUR_FILTER: 'Farvefilter',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Monokromitet',
    COLOUR_FILTER_MESSAGE: 'Tjek for elementer, der er svære at opfatte eller skelne fra andre farver.',
    RED_EYE: 'Rød blind.',
    GREEN_EYE: 'Grøn blind.',
    BLUE_EYE: 'Blå blind.',
    MONO_EYE: 'Rød, blå og grøn blind.',
    COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'Farvefiltre fungerer ikke i højkontrasttilstand.',

    // Alternative text stop words
    SUSPICIOUS_ALT_STOPWORDS: [
      'billede',
      'grafik',
      'billede',
      'foto',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'billede',
      'foto',
      'dekorativ',
      'pladsholder',
      'pladsholder-billede',
      'afstandsstykke',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'klik',
      'klik her',
      'klik her for mere',
      'klik her for at læse mere',
      'ved at klikke her',
      'tjek ud',
      'beskrevet her',
      'download',
      'download her',
      'find ud af det',
      'find ud af mere',
      'formular',
      'her',
      'info',
      'information',
      'link',
      'lære',
      'lære mere',
      'få mere at vide',
      'lære at',
      'mere',
      'side',
      'papir',
      'læs mere',
      'læse',
      'læs dette',
      'dette',
      'denne side',
      'denne hjemmeside',
      'udsigt',
      'se vores',
      'hjemmeside',
    ],
    WARNING_ALT_STOPWORDS: [
      'klik her',
    ],
    NEW_WINDOW_PHRASES: [
      'ekstern',
      'ny fane',
      'nyt vindue',
      'pop-up',
      'dukker op',
    ],
    FILE_TYPE_PHRASES: ['document', 'dokument', 'regneark', 'beregningsark', 'komprimeret fil', 'arkiveret fil', 'regneark', 'powerpoint', 'præsentation', 'installere', 'video', 'lyd', 'pdf'],
    LANG_READABILITY: 'Læsbarhed',
    LANG_AVG_SENTENCE: 'Gennemsnitligt antal ord pr. sætning:',
    LANG_COMPLEX_WORDS: 'Komplekse ord:',
    LANG_TOTAL_WORDS: 'Ord:',
    LANG_VERY_DIFFICULT: 'Meget vanskeligt',
    LANG_DIFFICULT: 'Vanskeligt',
    LANG_FAIRLY_DIFFICULT: 'Temmelig vanskelig',
    LANG_GOOD: 'God',
    READABILITY_NO_P_OR_LI_MESSAGE: 'Kunne ikke beregne læsbarhedsscore. Intet afsnit <code>&lt;p&gt;</code> eller listeindhold <code>&lt;li&gt;</code> fundet.',
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Ikke nok indhold til at beregne læsbarhedsscore.',
    HEADING_NON_CONSECUTIVE_LEVEL: 'Ikke-fortløbende overskriftsniveau brugt. Overskrifter bør aldrig springe niveauer over, eller gå fra <strong>Overskrift %(prevLevel)</strong> til <strong {r}>Overskrift %(level)</strong>.',
    HEADING_EMPTY: 'Tom overskrift fundet! For at rette skal du slette denne linje eller ændre dens format fra <strong {r}>Overskrift %(level)</strong> til <strong>Normal</strong> eller <strong>Afsnit</strong>.',
    HEADING_LONG: 'Overskriften er lang! Overskrifter skal bruges til at organisere indhold og formidle struktur. De skal være korte, informative og unikke. Hold venligst overskrifter på mindre end 160 tegn (ikke mere end en sætning). <hr> Antal tegn: <strong {r}>%(headingLength)</strong>',
    HEADING_FIRST: 'Den første overskrift på en side bør normalt være en Overskrift 1 eller Overskrift 2. Overskrift 1 bør være starten på hovedindholdssektionen og er den hovedoverskrift, der beskriver det overordnede formål med siden. Læs mere om <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Overskriftsstruktur.</a>',
    HEADING_MISSING_ONE: 'Manglende overskrift 1. Overskrift 1 skal være starten på hovedindholdsområdet og er den hovedoverskrift, der beskriver sidens overordnede formål. Læs mere om <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Overskriftsstruktur.</a>',
    HEADING_EMPTY_WITH_IMAGE: 'Heading har ingen tekst, men indeholder et billede. Hvis det ikke er en overskrift, skal du ændre formatet fra <strong {r}>Overskrift %(level)</strong> til <strong>Normal</strong> eller <strong>Afsnit</strong>. Ellers bedes du tilføje alt-tekst til billedet, hvis det ikke er dekorativt.',
    PANEL_HEADING_MISSING_ONE: 'Manglende overskrift 1!',
    PANEL_NO_HEADINGS: 'Ingen overskrifter fundet.',
    LINK_EMPTY: 'Fjern tomme links uden tekst.',
    LINK_EMPTY_LABELLEDBY: 'Linket har en værdi for <code>aria-labelledby</code>, der enten er tom eller ikke matcher værdien af attributten <code>id</code> for et andet element på siden.',
    LINK_EMPTY_LINK_NO_LABEL: 'Linket har ikke tydelig tekst, der er synlig for skærmlæsere og andre hjælpemidler. Sådan rettes det: <ul><li> Tilføj en kort tekst, der beskriver, hvor linket fører dig hen.</li><li> Hvis det er et <a href="https://a11y-101.com/development/icons-and-links">ikonlink eller SVG,</a> mangler det sandsynligvis en beskrivende etiket.</li><li> Hvis du tror, at dette link er en fejl på grund af en copy/paste-fejl, kan du overveje at slette det.</li></ul>',
    LINK_LABEL: '<strong>Link-etiket:</strong> %(sanitizedText)',
    LINK_STOPWORD: 'Linkteksten er måske ikke beskrivende nok uden for kontekst: <strong {r}>%(error)</strong><hr><strong>Tip!</strong> Linktekst skal altid være tydelig, unik og meningsfuld. Undgå almindelige ord som &quot;klik her&quot; eller &quot;lær mere&quot;',
    LINK_BEST_PRACTICES: 'Overvej at udskifte linkteksten: <strong {r}>%(error)</strong><hr><ul><li>&quot;Klik her&quot; sætter fokus på musemekanik, når mange mennesker ikke bruger en mus eller måske ser denne hjemmeside på en mobil enhed. Overvej at bruge et andet verbum, der relaterer til opgaven.</li><li>Undgå at bruge HTML-symboler som call to actions, medmindre de er skjult for hjælpeteknologier.</li></ul>',
    LINK_URL: 'Længere, mindre forståelige URL\'er, der bruges som linktekst, kan være svære at lytte til med hjælpemidler. I de fleste tilfælde er det bedre at bruge menneskeligt læsbar tekst i stedet for URL\'en. Korte URL\'er (som f.eks. en hjemmesides startside) er okay.<hr><strong>Tip!</strong> Linktekst skal altid være klar, unik og meningsfuld, så den kan forstås uden for kontekst.',
    LINK_DOI: 'For websider eller ressourcer, der kun er online, anbefaler <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA Style guide</a> at bruge beskrivende links ved at omslutte værkets URL eller DOI omkring dets titel. Længere, mindre forståelige URL\'er, der bruges som linktekst, kan være svære at forstå, når de tilgås med hjælpemidler.',
    NEW_TAB_WARNING: 'Link åbner i en ny fane eller et nyt vindue uden advarsel. Det kan være desorienterende, især for folk, der har svært ved at opfatte visuelt indhold. For det andet er det ikke altid en god praksis at kontrollere andres oplevelse eller træffe beslutninger for dem. Angiv, at linket åbner i et nyt vindue i linkteksten<hr><strong>Tip!</strong> Lær bedste praksis: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">åbning af links i nye browservinduer og faner.</a>',
    FILE_TYPE_WARNING: 'Link peger på en PDF eller en downloadbar fil (f.eks. MP3, Zip, Word Doc) uden advarsel. Angiv filtypen i linkteksten. Hvis det er en stor fil, kan du overveje at inkludere filstørrelsen.<hr><strong>Eksempel:</strong> Executive Report (PDF, 3MB)',
    LINK_IDENTICAL_NAME: 'Linket har samme tekst som et andet link, selvom det peger på en anden side. Flere links med samme tekst kan skabe forvirring for folk, der bruger skærmlæsere.<hr>Overvej at gøre følgende link mere beskrivende for at hjælpe med at skelne det fra andre links: <strong {r}>%(sanitizedText)</strong>',
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'Billedet bruges som et link med omgivende tekst, selvom alt-attributten burde være markeret som dekorativ eller nul.',
    MISSING_ALT_LINK_MESSAGE: 'Billedet bliver brugt som et link, men mangler alt-tekst! Sørg for, at alt-teksten beskriver, hvor linket fører dig hen.',
    MISSING_ALT_MESSAGE: 'Manglende alt-tekst! Hvis billedet formidler en historie, en stemning eller vigtig information - så sørg for at beskrive billedet.',
    LINK_ALT_HAS_FILE_EXTENSION: 'Filtypenavn i alt-teksten fundet. Sørg for, at alt-teksten beskriver linkets destination, ikke en bogstavelig beskrivelse af billedet. Fjern: <strong {r}>%(error)</strong>.<hr><strong>Alt text:</strong> %(altText)',
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Ikke-beskrivende eller pladsholder-alt-tekst i et linket billede fundet. Sørg for, at alt-teksten beskriver linkets destination, ikke en bogstavelig beskrivelse af billedet. Erstat den følgende alt-tekst: <strong {r}>%(altText)</strong>',
    LINK_IMAGE_SUS_ALT_MESSAGE: 'Hjælpemidler indikerer allerede, at dette er et billede, så &quot;<strong {r}>%(error)</strong>&quot; kan være overflødigt. Sørg for, at alt-teksten beskriver linkets destination, ikke en bogstavelig beskrivelse af billedet. <hr> <strong>Alt-tekst:</strong> %(altText)',
    ALT_HAS_FILE_EXTENSION: 'Filtypenavn i den fundne alt-tekst. Hvis billedet formidler en historie, en stemning eller vigtig information - så sørg for at beskrive billedet. Fjern det: <strong {r}>%(error)</strong>.<hr><strong>Alt text:</strong> %(altText)',
    ALT_PLACEHOLDER_MESSAGE: 'Ikke-beskrivende eller pladsholder-alt-tekst fundet. Udskift den følgende alt-tekst med noget mere meningsfuldt: <strong {r}>%(altText)</strong>',
    ALT_HAS_SUS_WORD: 'Hjælpemidler indikerer allerede, at dette er et billede, så &quot;<strong {r}>%(error)</strong>&quot; kan være overflødigt. <hr> <strong>Alt tekst:</strong> %(altText)',
    LINK_HIDDEN_FOCUSABLE: 'Linket har <code>aria-hidden=&quot;true&quot;</code>, men er stadig tastaturfokuserbar. Hvis du har til hensigt at skjule en overflødig eller duplisert lenke, legg til <code>tabindex=&quot;-1&quot;</code> også.',
    LINK_IMAGE_NO_ALT_TEXT: 'Billedet i linket er markeret som dekorativt, og der er ingen linktekst. Tilføj venligst alt-tekst til billedet, der beskriver linkets destination.',
    LINK_IMAGE_HAS_TEXT: 'Billedet er markeret som dekorativt, selvom linket bruger den omgivende tekst som en beskrivende label.',
    LINK_IMAGE_LONG_ALT: 'Alt-tekstbeskrivelsen på et linket billede er <strong>for lang</strong>. Alt-teksten på linkede billeder skal beskrive, hvor linket fører dig hen, ikke en bogstavelig beskrivelse af billedet. <strong>Overvej at bruge titlen på den side, der linkes til, som alt-tekst.</strong> <hr> <strong>Alt-tekst (<span {r}>%(altLength)</span> tegn):</strong> %(altText)',
    LINK_IMAGE_ALT_WARNING: 'Billedlink indeholder alt-tekst. <strong>Beskriver alt-teksten, hvor linket fører dig hen?</strong> Overvej at bruge titlen på den side, der linkes til, som alt-tekst. <hr> <strong>Alt-tekst:</strong> %(altText)',
    LINK_IMAGE_ALT_AND_TEXT_WARNING: 'Billedlink indeholder <strong>både alt-tekst og omgivende linktekst.</strong> Hvis dette billede er dekorativt og bruges som et funktionelt link til en anden side, skal du overveje at markere billedet som dekorativt eller nul - den omgivende linktekst bør være tilstrækkelig. <hr> <strong>Alt-tekst:</strong> %(altText) <hr> <strong>Link-etiket:</strong> %(sanitizedText)',
    IMAGE_FIGURE_DECORATIVE: 'Billedet er markeret som <strong>dekorativt</strong> og vil blive ignoreret af hjælpemidler. <hr> Selvom der er angivet en <strong>caption</strong>, bør billedet i de fleste tilfælde også have en alt-tekst. <ul><li>Alt-teksten skal give en kortfattet beskrivelse af, hvad der er på billedet.</li><li>Billedteksten skal normalt give kontekst for at relatere billedet til det omgivende indhold eller gøre opmærksom på et bestemt stykke information.</li></ul>Lær mere: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Brug ikke nøjagtig de samme ord til både alt- og billedtekst. Skærmlæsere vil annoncere informationen to gange.<ul><li>Alt-teksten skal give en kortfattet beskrivelse af, hvad der er i billedet.</li><li>Billedteksten skal normalt give kontekst for at relatere billedet tilbage til det omgivende indhold eller gøre opmærksom på et bestemt stykke information.</li></ul> Lær mere: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> <strong>Alttekst:</strong> %(altText)',
    IMAGE_DECORATIVE: 'Billedet er markeret som <strong>dekorativt</strong> og vil blive ignoreret af hjælpemidler. Hvis billedet formidler en historie, stemning eller vigtig information - så sørg for at tilføje alt-tekst.',
    IMAGE_ALT_TOO_LONG: 'Alt-tekstbeskrivelsen er <strong>for lang</strong>. Alt-teksten skal være kortfattet, men alligevel meningsfuld som et <em>tweet</em> (omkring 100 tegn). Hvis det er et komplekst billede eller en graf, kan du overveje at placere den lange beskrivelse af billedet i teksten nedenfor eller i en harmonika-komponent. <hr> <strong>Alt-tekst (<span {r}>%(altLength)</span> tegn):</strong> %(altText)',
    IMAGE_PASS: '<strong>Alt-tekst:</strong> %(altText)',
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'Billedknappen mangler alt-tekst. Tilføj venligst alt-tekst for at give et tilgængeligt navn. For eksempel: <em>Søg</em> eller <em>Send</em>.',
    LABELS_INPUT_RESET_MESSAGE: 'Nulstillingsknapper bør <strong>ikke</strong> bruges, medmindre det er specifikt nødvendigt, fordi de er lette at aktivere ved en fejl. <hr> <strong>Tip!</strong> Lær, hvorfor <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Reset- og Cancel-knapper giver problemer med brugervenligheden.</a>',
    LABELS_ARIA_LABEL_INPUT_MESSAGE: 'Input har et tilgængeligt navn, men sørg for, at der også er en synlig label. <hr> <strong>Indtastningsmærke:</strong> %(sanitizedText)',
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Der er ingen label knyttet til dette input. Tilføj en <code>for</code>-attribut til den label, der matcher <code>id</code> for dette input. <hr> ID\'et for dette input er: <strong>id=&#34;%(id)&#34;</strong>',
    LABELS_MISSING_LABEL_MESSAGE: 'Der er ingen label knyttet til dette input. Tilføj venligst et <code>id</code> til dette input, og tilføj en matchende <code>for</code>-attribut til etiketten.',
    EMBED_VIDEO: 'Sørg for, at <strong>alle videoer har undertekster.</strong> Det er et obligatorisk krav på niveau A at levere undertekster til alt lyd- og videoindhold. Undertekster støtter mennesker, der er døve eller hørehæmmede.',
    EMBED_AUDIO: 'Sørg for at levere en <strong>udskrift til alle podcasts.</strong> At levere udskrifter til lydindhold er et obligatorisk niveau A-krav. Udskrifter hjælper mennesker, der er døve eller hørehæmmede, men kan være til gavn for alle. Overvej at placere udskriften nedenfor eller i et harmonika-panel.',
    EMBED_DATA_VIZ: 'Datavisualiseringswidgets som denne er ofte problematiske for folk, der bruger et tastatur eller en skærmlæser til at navigere, og kan udgøre betydelige vanskeligheder for folk, der er svagtseende eller farveblinde. Det anbefales at give de samme oplysninger i et alternativt format (tekst eller tabel) under widgetten. <hr> Få mere at vide om <a href="https://www.w3.org/WAI/tutorials/images/complex">komplekse billeder.</a>',
    EMBED_MISSING_TITLE: 'Indlejret indhold kræver et tilgængeligt navn, der beskriver dets indhold. Angiv venligst en unik <code>title</code> eller <code>aria-label</code> attribut på <code>iframe</code>-elementet. Få mere at vide om <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
    EMBED_GENERAL_WARNING: 'Kan ikke kontrollere indlejret indhold. Sørg for, at billeder har alt-tekst, videoer har undertekster, tekst har tilstrækkelig kontrast, og interaktive komponenter er <a href="https://webaim.org/techniques/keyboard/">tilgængelige via tastaturet.</a>',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> med ikke-fokuserbare elementer bør ikke have <code>tabindex="-1"</code>. Det indlejrede indhold vil ikke være tilgængeligt med tastaturet.',
    QA_BAD_LINK: 'Dårligt link fundet. Linket ser ud til at pege på et udviklingsmiljø. <hr> Dette link peger på: <br> <strong {r}>%(el)</strong>',
    QA_IN_PAGE_LINK: 'Brudt samme-sides link. Linkmålet stemmer ikke overens med nogen element på denne side.',
    QA_BAD_ITALICS: 'Fede og kursive tags har semantisk betydning og bør <strong>ikke</strong> bruges til at fremhæve hele afsnit. Fed tekst skal bruges til at give stærk <strong>fremhævelse</strong> af et ord eller en sætning. Kursiv bør bruges til at fremhæve egennavne (f.eks. bog- og artikeltitler), fremmedord og citater. Lange citater skal formateres som blokcitater.',
    QA_PDF: 'Kan ikke tjekke PDF\'er for tilgængelighed. PDF\'er betragtes som webindhold og skal også gøres tilgængelige. PDF\'er indeholder ofte problemer for folk, der bruger skærmlæsere (manglende strukturelle tags eller manglende formularfeltetiketter) og folk, der ser dårligt (teksten flyder ikke ud igen, når den forstørres). <ul><li>Hvis dette er en formular, kan du overveje at bruge en tilgængelig HTML-formular som alternativ.</li><li>Hvis dette er et dokument, kan du overveje at konvertere det til en webside.</li></ul> Ellers bedes du tjekke <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF for tilgængelighed i Acrobat DC.</a>',
    QA_DOCUMENT: 'Kan ikke tjekke dokumentet for tilgængelighed. Linkede dokumenter betragtes som webindhold og skal også gøres tilgængelige. Gennemgå venligst dette dokument manuelt. <ul><li>Gør dit <a href="https://support.google.com/docs/answer/6199477?hl=da">Google Workspace-dokument eller din præsentation mere tilgængelig.</a></li><li>Gør dine <a href="https://support.microsoft.com/da/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office-dokumenter mere tilgængelige.</a></li></ul>',
    QA_PAGE_LANGUAGE: 'Sidens sprog er ikke angivet! Venligst <a href="https://www.w3.org/International/questions/qa-html-language-declarations">deklarer sprog på HTML-tag.</a>',
    QA_PAGE_TITLE: 'Manglende sidetitel! Angiv venligst en <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">sidetitel.</a>',
    QA_BLOCKQUOTE_MESSAGE: 'Er dette en overskrift? <strong {r}>%(sanitizedText)</strong> <hr> Blokcitater bør kun bruges til citater. Hvis dette er tænkt som en overskrift, skal du ændre dette blokcitat til en semantisk overskrift (f.eks. Overskrift 2 eller Overskrift 3).',
    QA_FAKE_HEADING: 'Er dette en overskrift? <strong {r}>%(boldtext)</strong> <hr> En linje med fed eller stor tekst kan ligne en overskrift, men en person, der bruger en skærmlæser, kan ikke se, at den er vigtig eller springe til indholdet. Fed eller stor tekst bør aldrig erstatte semantiske overskrifter (Overskrift 2 til Overskrift 6).',
    QA_SHOULD_BE_LIST: 'Prøver du at oprette en liste? Muligt listeelement fundet: <strong {r}>%(firstPrefix)</strong> <hr> Sørg for at bruge semantiske lister ved at bruge punkt- eller talformateringsknapperne i stedet. Når du bruger en semantisk liste, kan hjælpeteknologier formidle oplysninger som det samlede antal elementer og den relative placering af hvert element i listen. Få mere at vide om <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">semantiske lister.</a>',
    QA_UPPERCASE_WARNING: 'Fundet med store bogstaver. Nogle skærmlæsere kan fortolke tekst med store bogstaver som et akronym og vil læse hvert bogstav individuelt. Derudover synes nogle mennesker, at store bogstaver er sværere at læse, og det kan se ud, som om man råber.',
    QA_DUPLICATE_ID: 'Fandt <strong>duplikat-ID</strong>. Fejl med dublerede ID\'er er kendt for at give problemer for hjælpeteknologier, når de forsøger at interagere med indhold. <hr> Fjern eller ændr venligst følgende ID: <strong {r}>%(id)</strong>',
    QA_TEXT_UNDERLINE_WARNING: 'Understreget tekst kan forveksles med links. Overvej at bruge en anden stil som <code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> eller <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
    QA_SUBSCRIPT_WARNING: 'Formateringsindstillingerne subscript og superscript bør kun bruges til at ændre placeringen af tekst af hensyn til typografiske konventioner eller standarder. De bør <strong>ikke</strong> udelukkende bruges til præsentation eller udseende. Formatering af hele sætninger giver problemer med læsbarheden. Passende anvendelsestilfælde ville omfatte visning af eksponenter, ordenstal som 4<sup>th</sup> i stedet for fjerde og kemiske formler (f.eks. H<sub>2</sub>O).',
    TABLES_MISSING_HEADINGS: 'Manglende tabeloverskrifter! Tilgængelige tabeller har brug for HTML-markup, der angiver overskriftsceller og dataceller, som definerer deres forhold. Disse oplysninger giver kontekst til folk, der bruger hjælpemidler. Tabeller bør kun bruges til tabeldata. <hr> Få mere at vide om <a href="https://www.w3.org/WAI/tutorials/tables/">tilgængelige tabeller.</a>',
    TABLES_SEMANTIC_HEADING: 'Semantiske overskrifter som Heading 2 eller Heading 3 bør kun bruges til sektioner af indhold; <strong>ikke</strong> i HTML-tabeller. Angiv tabeloverskrifter ved hjælp af <code>&lt;th&gt;</code>-elementet i stedet. <hr> Få mere at vide om <a href="https://www.w3.org/WAI/tutorials/tables/">tilgængelige tabeller.</a>',
    TABLES_EMPTY_HEADING: 'Tom tabeloverskrift fundet! Tabeloverskrifter bør <strong>aldrig</strong> være tomme. Det er vigtigt at udpege række- og/eller kolonneoverskrifter for at formidle deres relation. Disse oplysninger giver kontekst til personer, der bruger hjælpemidler. Husk, at tabeller kun bør bruges til tabeldata. <hr> Få mere at vide om <a href="https://www.w3.org/WAI/tutorials/tables/">tilgængelige tabeller.</a>',
    CONTRAST_ERROR: 'Denne tekst har ikke nok kontrast til baggrunden. Kontrastforholdet skal være mindst 4,5:1 for normal tekst og 3:1 for stor tekst. <hr> Kontrastforholdet er <strong {r}>%(cratio)</strong> for den følgende tekst: <strong {r}>%(sanitizedText)</strong> for følgende tekst',
    CONTRAST_WARNING: 'Kontrasten i denne tekst er ukendt og skal gennemgås manuelt. Sørg for, at teksten og baggrunden har stærke kontrastfarver. Kontrastforholdet skal være mindst 4,5:1 for normal tekst og 3:1 for stor tekst. <hr> <strong>Vær venlig at gennemgå:</strong> %(sanitizedText)',
    CONTRAST_INPUT_ERROR: 'Teksten i dette input har ikke nok kontrast til baggrunden. Kontrastforholdet skal være mindst 4,5:1 for normal tekst og 3:1 for stor tekst. <hr> Kontrastforhold: <strong {r}>%(cratio)</strong>',
  },
};

export { da as default };
