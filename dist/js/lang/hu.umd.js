
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.0.8
  * @author Adam Chaboryk, Toronto Metropolitan University
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University (formerly Ryerson University).
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sa11yLangHu = factory());
})(this, (function () { 'use strict';

  /*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
  var hu = {
    // Hungarian
    strings: {
      LANG_CODE: 'hu',
      MAIN_TOGGLE_LABEL: 'Ellenőrizze az elérhetőséget',
      CONTAINER_LABEL: 'Akadálymentesítési ellenőrző',
      ERROR: 'Hiba',
      ERRORS: 'Hibák',
      WARNING: 'Figyelmeztetés',
      WARNINGS: 'Figyelmeztetések',
      GOOD: 'Jó',
      ON: 'A oldalon.',
      OFF: 'Off',
      ALERT_TEXT: 'Riasztás',
      ALERT_CLOSE: 'Zárja be a',
      OUTLINE: 'Oldalvázlat',
      PAGE_ISSUES: 'Oldalproblémák',
      SETTINGS: 'Beállítások',
      CONTRAST: 'Kontraszt',
      FORM_LABELS: 'Nyomtatványcímkék',
      LINKS_ADVANCED: 'Linkek (haladó)',
      DARK_MODE: 'Sötét üzemmód',
      SHORTCUT_SCREEN_READER: 'Ugrás a kérdésre. Billentyűzet gyorsbillentyű: S',
      SHORTCUT_TOOLTIP: 'Ugrás a kérdésre',
      NEW_TAB: 'Új lap megnyitása',
      PANEL_HEADING: 'Hozzáférhetőségi ellenőrzés',
      PANEL_STATUS_NONE: 'Nem találtunk hibát.',
      PANEL_ICON_WARNINGS: 'figyelmeztetéseket találtak.',
      PANEL_ICON_TOTAL: 'összes talált probléma.',
      NOT_VISIBLE_ALERT: 'A megjeleníteni kívánt elem nem látható; lehet, hogy el van rejtve, vagy egy harmonika- vagy lapkomponens belsejében van. Itt egy előnézet:',
      ERROR_MISSING_ROOT_TARGET: 'A teljes oldal elérhetőségi ellenőrzése azért történt, mert a célterület <code>%(root)</code> nem létezik.',
      HEADING_NOT_VISIBLE_ALERT: 'A fejléc nem látható; lehet rejtett vagy egy harmonika- vagy fülkomponens belsejében.',
      SKIP_TO_PAGE_ISSUES: 'Ugrás az oldalra problémák',
      CONSOLE_ERROR_MESSAGE: 'Sajnáljuk, de probléma van az oldal hozzáférhetőségi ellenőrzőjével. Megtenné, hogy <a href="%(link)">bejelenti ezen az űrlapon</a> vagy a <a href="%(link)">GitHubon</a>?',

      // Dismiss
      PANEL_DISMISS_BUTTON: 'Mutasd %(dismissCount) elbocsátott figyelmeztetéseket',
      DISMISS: 'Elutasíthatod',
      DISMISSED: 'Elutasított figyelmeztetések',
      DISMISS_REMINDER: 'Felhívjuk figyelmét, hogy a figyelmeztetések csak <strong>időlegesen</strong> kerülnek elutasításra. A böngésző előzményeinek és cookie-jainak törlése visszaállítja a korábban elutasított figyelmeztetéseket az összes oldalon.',

      // Export
      DATE: 'Dátum',
      PAGE_TITLE: 'Oldalcím',
      RESULTS: 'Eredmények',
      EXPORT_RESULTS: 'Eredmények exportálása',
      GENERATED: 'Eredmények generálva %(tool)-vel.',
      PREVIEW: 'Előnézet',
      ELEMENT: 'Elem',
      PATH: 'Útvonal',

      // Colour filters
      COLOUR_FILTER: 'Színes szűrő',
      PROTANOPIA: 'Protanopia',
      DEUTERANOPIA: 'Deuteranopia',
      TRITANOPIA: 'Tritanopia',
      MONOCHROMACY: 'Monokrómia',
      COLOUR_FILTER_MESSAGE: 'Ellenőrizze, hogy vannak-e olyan elemek, amelyeket nehéz érzékelni vagy megkülönböztetni más színektől.',
      RED_EYE: 'Vörös vak.',
      GREEN_EYE: 'Zöld vak.',
      BLUE_EYE: 'Kék vak.',
      MONO_EYE: 'Vörös, kék és zöld vakok.',
      COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'A színszűrők nem működnek nagy kontrasztú üzemmódban.',

      // Alternative text stop words
      SUSPICIOUS_ALT_STOPWORDS: [
        'kép',
        'grafika',
        'kép',
        'fotó',
      ],
      PLACEHOLDER_ALT_STOPWORDS: [
        'alt',
        'kép',
        'fotó',
        'dekoratív',
        'helytartó',
        'helyőrző kép',
        'távtartó',
      ],
      PARTIAL_ALT_STOPWORDS: [
        'kattints a  címre.',
        'kattintson ide',
        'kattints ide további információkért',
        'kattintson ide, ha többet szeretne megtudni',
        'ide kattintva',
        'nézd meg',
        'részletesen itt',
        'letöltés',
        'letöltés itt',
        'megtudni',
        'Tudjon meg többet',
        'űrlap',
        'itt',
        'info',
        'információ',
        'link',
        'tanulni',
        'többet megtudni',
        'megtanulni',
        'további',
        'oldal',
        'papír',
        'tovább',
        'olvasd el',
        'olvassa el ezt',
        'ez',
        'ez az oldal',
        'ez a weboldal',
        'megtekintés',
        'nézze meg a',
        'weboldal',
      ],
      WARNING_ALT_STOPWORDS: [
        'kattintson ide',
      ],
      NEW_WINDOW_PHRASES: [
        'külső',
        'új lap',
        'új ablak',
        'pop-up',
        'felbukkan',
      ],
      FILE_TYPE_PHRASES: [
        'dokumentum',
        'táblázat',
        'számítási lap',
        'tömörített fájl',
        'archivált fájl',
        'munkalap',
        'powerpoint',
        'prezentáció',
        'telepítse a',
        'videó',
        'audio',
        'pdf',
      ],
      LANG_READABILITY: 'Olvashatóság',
      LANG_AVG_SENTENCE: 'Átlagos szó/mondat:',
      LANG_COMPLEX_WORDS: 'Összetett szavak:',
      LANG_TOTAL_WORDS: 'Szavak:',
      LANG_VERY_DIFFICULT: 'Nagyon nehéz',
      LANG_DIFFICULT: 'Nehéz',
      LANG_FAIRLY_DIFFICULT: 'Elég nehéz',
      LANG_GOOD: 'Jó',
      READABILITY_NO_P_OR_LI_MESSAGE: 'Nem lehet kiszámítani az olvashatósági pontszámot. Nem találtunk bekezdést <code>&lt;p&gt;</code> vagy listatartalmat <code>&lt;li&gt;</code>.',
      READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Nem elég tartalom az olvashatósági pontszám kiszámításához.',
      HEADING_NON_CONSECUTIVE_LEVEL: 'Nem egymást követő címsorszintet használtak. A fejlécek soha nem ugorhatnak szinteket, vagy nem mehetnek <strong>Felirat %(prevLevel)</strong>-ről <strong {r}>Felirat %(level)</strong>-ra.',
      HEADING_EMPTY: 'Üres fejlécet találtunk! A javításhoz törölje ezt a sort, vagy változtassa meg a formátumát <strong {r}>Felirat %(szint)</strong>-ról <strong>Normál</strong> vagy <strong>Paragraph</strong> formátumra.',
      HEADING_LONG: 'A fejléc hosszú! A címsorokat a tartalom rendszerezésére és a szerkezet közvetítésére kell használni. Rövidnek, informatívnak és egyedinek kell lenniük. Kérjük, hogy a címsorokat 160 karakternél (egy mondatnál nem több) rövidebbre tartsa. <hr> Karakterek száma: <strong {r}>%(headingLength)</strong>',
      HEADING_FIRST: 'Az oldal első címsorának általában az 1. vagy a 2. címsornak kell lennie. Az 1. címsornak kell a fő tartalmi rész kezdetének lennie, és ez a fő címsor írja le az oldal általános célját. Tudjon meg többet a <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Feliratszerkezet.</a>-ról.',
      HEADING_MISSING_ONE: 'Hiányzik az 1. címsor. Az 1. címsornak kell a fő tartalmi terület kezdetének lennie, és ez a főcím, amely leírja az oldal általános célját. Tudjon meg többet a <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Főcímek szerkezete.</a>-ről.',
      HEADING_EMPTY_WITH_IMAGE: 'A fejlécnek nincs szövege, de tartalmaz egy képet. Ha ez nem egy címsor, változtassa meg a formátumát <strong {r}>Felirat %(szint)</strong>-ról <strong>Normál</strong> vagy <strong>Paragraph</strong> formátumra. Ellenkező esetben kérjük, adjon alt szöveget a képhez, ha az nem dekoratív.',
      PANEL_HEADING_MISSING_ONE: 'Hiányzik az 1. címsor!',
      PANEL_NO_HEADINGS: 'Nem találtunk címszavakat.',
      LINK_EMPTY: 'Szöveg nélküli üres linkek eltávolítása.',
      LINK_EMPTY_LINK_NO_LABEL: 'A link nem rendelkezik olyan szöveggel, amely a képernyőolvasók és más segítő technológiák számára is látható. A javításhoz: <ul><li>Adjon hozzá egy tömör szöveget, amely leírja, hogy hová vezet a link.</li><li>Ha <a href="https://a11y-101.com/development/icons-and-links">ikonos link vagy SVG,</a> akkor valószínűleg hiányzik egy leíró felirat.</li><li>Ha úgy gondolja, hogy ez a link egy másolási/beillesztési hiba miatt hibás, akkor fontolja meg a törlését.</li></ul>.',
      LINK_LABEL: '<strong>Link címke:</strong> %(sanitizedText)',
      LINK_STOPWORD: 'Előfordulhat, hogy a link szövege kontextuson kívül nem elég leíró: <strong {r}>%(hiba)</strong><hr><strong>Tipp!</strong> A linkszövegnek mindig világosnak, egyedinek és értelmesnek kell lennie. Kerülje az olyan gyakori szavakat, mint a &quot;kattintson ide&quot; vagy a &quot;tudjon meg többet&quot;;',
      LINK_BEST_PRACTICES: 'Fontolja meg a link szövegének cseréjét: <strong {r}>%(hiba)</strong><hr><ul><li>&quot;Kattintson ide&quot; az egér mechanikájára helyezi a hangsúlyt, holott sokan nem használnak egeret, vagy esetleg mobileszközön nézik a weboldalt. Fontolja meg egy másik, a feladathoz kapcsolódó ige használatát.</li><li>Kerülje a HTML szimbólumok használatát cselekvéshívóként, kivéve, ha azok a segédtechnológiák számára rejtve vannak.</li></ul>',
      LINK_URL: 'A linkszövegként használt hosszabb, kevésbé érthető URL-címek nehezen érthetők a segítő technológiával. A legtöbb esetben jobb, ha az URL helyett ember által olvasható szöveget használ. A rövid URL-címek (például egy webhely kezdőlapja) rendben vannak.<hr><strong>Tipp!</strong> A linkszövegnek mindig világosnak, egyedinek és értelmesnek kell lennie, hogy kontextuson kívül is érthető legyen.',
      LINK_DOI: 'Weboldalak vagy kizárólag online elérhető források esetében az <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA Style guide</a> leíró linkek használatát javasolja, a mű URL-jét vagy DOI-ját a cím köré tekerve. A linkszövegként használt hosszabb, kevésbé érthető URL-címek nehezen érthetőek lehetnek a segédeszközökkel.',
      NEW_TAB_WARNING: 'A link figyelmeztetés nélkül új lapon vagy ablakban nyílik meg. Ez zavaró lehet, különösen azok számára, akik nehezen érzékelik a vizuális tartalmakat. Másodszor, nem mindig jó gyakorlat, ha valakinek az élményét irányítjuk, vagy döntéseket hozunk helyettük. Jelezze, hogy a link új ablakban nyílik meg a link szövegében<hr><strong>Tipp!</strong> Ismerje meg a legjobb gyakorlatokat: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">Hivatkozások megnyitása új böngészőablakban és lapon.</a>',
      FILE_TYPE_WARNING: 'A link figyelmeztetés nélkül PDF vagy letölthető fájlra (pl. MP3, Zip, Word Doc) mutat. A hivatkozás szövegében tüntesse fel a fájl típusát. Ha nagyméretű fájlról van szó, fontolja meg a fájlméret feltüntetését.<hr><strong>Példa:</strong> Vezetői jelentés (PDF, 3MB)',
      LINK_IDENTICAL_NAME: 'A link szövege megegyezik egy másik link szövegével, bár egy másik oldalra mutat. A több azonos szövegű hivatkozás zavart okozhat a képernyőolvasót használó emberek számára.<hr>Figyeljen arra, hogy a következő hivatkozás leíróbb legyen, hogy jobban megkülönböztethető legyen a többi hivatkozástól: <strong {r}>%(sanitizedText)</strong>',
      MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'A képet linkként használják a körülötte lévő szöveggel, bár az alt attribútumot dekoratívnak vagy nullának kell jelölni.',
      MISSING_ALT_LINK_MESSAGE: 'A képet linkként használják, de hiányzik az alt szöveg! Kérjük, gondoskodjon arról, hogy az alt szöveg leírja, hová vezet a link.',
      MISSING_ALT_MESSAGE: 'Hiányzó alt szöveg! Ha a kép történetet, hangulatot vagy fontos információt közvetít - mindenképpen írja le a képet.',
      LINK_ALT_HAS_FILE_EXTENSION: 'Fájlkiterjesztés az alt szövegben található. Győződjön meg róla, hogy az alt szöveg a link célját írja le, nem pedig a kép szó szerinti leírását. Távolítsa el: <strong {r}>%(hiba)</strong>.<hr><strong>Alt szöveg:</strong> %(altText)',
      LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Nem leíró vagy helyőrző alt szöveg a linkelt képen belül. Győződjön meg róla, hogy az alt szöveg a link célját írja le, nem pedig a kép szó szerinti leírását. Cserélje ki a következő alt szöveget: <strong {r}>%(altText)</strong>',
      LINK_IMAGE_SUS_ALT_MESSAGE: 'A segítő technológiák már jelzik, hogy ez egy kép, így a &quot;<strong {r}>%(hiba)</strong>&quot; felesleges lehet. Győződjön meg róla, hogy az alt szöveg a link célját írja le, nem pedig a kép szó szerinti leírását. <hr> <strong>Alt szöveg:</strong> %(altText)',
      ALT_HAS_FILE_EXTENSION: 'Fájlkiterjesztés az alt szövegben található. Ha a kép történetet, hangulatot vagy fontos információt közvetít - mindenképpen írja le a képet. Távolítsa el: <strong {r}>%(hiba)</strong>.<hr><strong>Alt szöveg:</strong> %(altText)',
      ALT_PLACEHOLDER_MESSAGE: 'Nem leíró vagy helyőrző alt szöveg található. Cserélje ki a következő alt szöveget valami értelmesebbre: <strong {r}>%(altText)</strong>',
      ALT_HAS_SUS_WORD: 'A segítő technológiák már jelzik, hogy ez egy kép, így a &quot;<strong {r}>%(hiba)</strong>&quot; felesleges lehet. <hr> <strong>Alt szöveg:</strong> %(altText)',
      LINK_HIDDEN_FOCUSABLE: 'A hivatkozásnak van <code>aria-hidden=&quot;true&quot;</code> tulajdonsága, de még mindig billentyűzettel fókuszálható. Ha felesleges vagy duplikált hivatkozást szeretnél elrejteni, adj hozzá <code>tabindex=&quot;-1&quot;</code> tulajdonságot is.',
      LINK_IMAGE_NO_ALT_TEXT: 'A linkben lévő kép dekoratívnak van jelölve, és nincs linkszöveg. Kérjük, adjon a képhez alt szöveget, amely leírja a link célját.',
      LINK_IMAGE_HAS_TEXT: 'A kép dekoratívként van megjelölve, bár a link a környező szöveget használja leíró címkeként.',
      LINK_IMAGE_LONG_ALT: 'A linkelt kép Alt szöveges leírása <strong>túl hosszú</strong>. A linkelt képek alt szövegének azt kell leírnia, hogy hová vezet a link, nem pedig a kép szó szerinti leírását. <strong>Figyeljen arra, hogy alt szövegként a linkelt oldal címét használja.</strong> <hr> <strong> <strong>Alt szöveg (<span {r}>%(altLength)</span> karakterek):</strong> %(altText)',
      LINK_IMAGE_ALT_WARNING: 'A kép linkje alt szöveget tartalmaz. Az alt szöveg leírja, hogy hová vezet a link? <strong>Figyeljen arra, hogy alt szövegként annak az oldalnak a címét használja, amelyre a link mutat.</strong> <hr> <strong>Alt szöveg:</strong> %(altText)',
      LINK_IMAGE_ALT_AND_TEXT_WARNING: 'A kép linkje <strong>mind az alt szöveget, mind a környező linkszöveget tartalmazza.</strong> Ha ez a kép dekoratív, és egy másik oldalra mutató funkcionális linkként használják, fontolja meg a kép dekoratív vagy nullás megjelölését - a környező linkszövegnek elegendőnek kell lennie. <hr> <strong>Alt szöveg:</strong> %(altText) <hr> <strong>Link címke:</strong> %(sanitizedText)',
      IMAGE_FIGURE_DECORATIVE: 'A kép <strong>dekoratívnak</strong> van jelölve, és a segítő technológia figyelmen kívül hagyja. <hr> Bár <strong>feliratot</strong> adtunk meg, a képnek a legtöbb esetben alt szöveggel is rendelkeznie kell. <ul><li>Az alt szövegnek tömör leírást kell adnia arról, hogy mi található a képen.</li><li>A feliratnak általában kontextust kell biztosítania, hogy a képet a környező tartalomhoz kapcsolja, vagy egy adott információra hívja fel a figyelmet.</li></ul>Tudjon meg többet: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
      IMAGE_FIGURE_DUPLICATE_ALT: 'Ne használja pontosan ugyanazokat a szavakat az alt és a felirat szövegében. A képernyőolvasók kétszer fogják bemondani az információt.<ul><li>Az alt szövegnek tömör leírást kell adnia arról, hogy mi van a képen.</li><li>A feliratnak általában kontextust kell nyújtania, hogy a képet a környező tartalomhoz kapcsolja, vagy felhívja a figyelmet egy adott információra.</li></ul> További információ: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> <strong>Alt szöveg:</strong> %(altText)',
      IMAGE_DECORATIVE: 'A kép <strong>dekoratívnak</strong> van jelölve, és a segítő technológia figyelmen kívül hagyja. Ha a kép történetet, hangulatot vagy fontos információt közvetít - mindenképpen adjon hozzá alt szöveget.',
      IMAGE_ALT_TOO_LONG: 'Az Alt szöveges leírás <strong>túl hosszú</strong>. Az Alt szövegnek tömörnek, mégis értelmesnek kell lennie, mint egy <em>tweet</em> (kb. 100 karakter). Ha összetett képről vagy grafikonról van szó, fontolja meg, hogy a kép hosszú leírását az alatta lévő szövegben vagy egy harmonika komponensben helyezze el. <hr> <strong>Alt szöveg (<span {r}>%(altLength)</span> karakterek):</strong> %(altText)',
      IMAGE_PASS: '<strong>Alt szöveg:</strong> %(altText)',
      LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'A képgombból hiányzik az alt szöveg. Kérjük, adjon hozzá alt szöveget, hogy elérhető nevet adjon. Például: <em>Keresés</em> vagy <em>Submit</em>.',
      LABELS_INPUT_RESET_MESSAGE: 'A visszaállító gombokat <strong>nem</strong> szabad használni, hacsak nem kifejezetten szükséges, mert könnyen aktiválhatók tévedésből. <hr> <strong>Tipp!</strong> Tudja meg, hogy a <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">A visszaállítás és a törlés gombok miért jelentenek használhatósági problémát.</a>',
      LABELS_ARIA_LABEL_INPUT_MESSAGE: 'A bemenetnek elérhető neve van, de kérjük, gondoskodjon arról, hogy a címke is látható legyen. <hr> <strong>Bemeneti címke:</strong> %(sanitizedText)',
      LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Ehhez a bemenethez nincs címke társítva. Adjon hozzá egy <code>for</code> attribútumot a címkéhez, amely megfelel a bemenet <code>id</code> azonosítójának. <hr> Ennek a bemenetnek az azonosítója a következő: <strong>id=&#34;%(id)&#34;</strong>',
      LABELS_MISSING_LABEL_MESSAGE: 'Ehhez a bemenethez nincs címke társítva. Kérjük, adjon hozzá egy <code>id</code>-t ehhez a bemenethez, és adjon hozzá egy megfelelő <code>for</code> attribútumot a címkéhez.',
      EMBED_VIDEO: 'Kérjük, gondoskodjon arról, hogy <strong>minden videó feliratozással legyen ellátva.</strong> A feliratozás biztosítása minden hang- és videotartalomhoz kötelező A-szintű követelmény. A feliratozás a siket vagy nagyothalló embereket támogatja.',
      EMBED_AUDIO: 'Kérjük, gondoskodjon arról, hogy minden podcasthoz <strong>átiratot adjon.</strong> A hanganyag átiratának megadása kötelező A-szintű követelmény. Az átiratok a siket/süket vagy nagyothalló embereket támogatják, de mindenki számára hasznosak lehetnek. Fontolja meg az átirat elhelyezését alul vagy egy harmonika panelen belül.',
      EMBED_DATA_VIZ: 'Az ilyen adatvizualizációs widgetek gyakran problémát jelentenek azok számára, akik billentyűzetet vagy képernyőolvasót használnak a navigáláshoz, és jelentős nehézségeket okozhatnak a gyengén látók vagy színvakok számára. Javasoljuk, hogy ugyanezt az információt alternatív (szöveges vagy táblázatos) formátumban adjuk meg a widget alatt. <hr> Tudjon meg többet a <a href="https://www.w3.org/WAI/tutorials/images/complex">komplex képekről.</a>',
      EMBED_MISSING_TITLE: 'A beágyazott tartalomnak olyan hozzáférhető névre van szüksége, amely leírja a tartalmát. Kérjük, adjon meg egy egyedi <code>title</code> vagy <code>aria-label</code> attribútumot a <code>iframe</code> elemen. Tudjon meg többet a <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>-ről.',
      EMBED_GENERAL_WARNING: 'Beágyazott tartalom ellenőrzése nem lehetséges. Kérjük, győződjön meg róla, hogy a képek alt szöveggel, a videók felirattal, a szöveg megfelelő kontraszttal és az interaktív komponensek <a href="https://webaim.org/techniques/keyboard/">billentyűzettel elérhetőek</a>.',
      EMBED_UNFOCUSABLE: 'Azoknak a <code>&lt;iframe&gt;</code>-nek, amelyek nem fókuszálható elemekkel rendelkeznek, nem kell <code>tabindex="-1"</code> tulajdonságot rendelni. A beágyazott tartalom nem lesz billentyűzettel elérhető.',
      QA_BAD_LINK: 'Rossz linket találtunk. Úgy tűnik, hogy a link egy fejlesztői környezetre mutat. <hr> Ez a link a következőre mutat: <br> <strong {r}>%(el)</strong>',
      QA_BAD_ITALICS: 'A vastag és dőlt betűs címkéknek szemantikai jelentésük van, és <strong>nem</strong> szabad egész bekezdések kiemelésére használni őket. A félkövérrel kiemelt szöveget egy szó vagy kifejezés erős <strong>kiemelésére</strong> kell használni. A dőlt betűt a tulajdonnevek (pl. könyv- és cikkcímek), idegen szavak, idézőjelek kiemelésére kell használni. A hosszú idézeteket blokkidézetként kell formázni.',
      QA_PDF: 'Nem lehet ellenőrizni a PDF-ek hozzáférhetőségét. A PDF-ek webes tartalomnak minősülnek, és azokat is hozzáférhetővé kell tenni. A PDF-ek gyakran tartalmaznak problémákat a képernyőolvasót használók (hiányzó szerkezeti címkék vagy hiányzó űrlapmező-címkék) és a gyengén látók (a szöveg nagyításkor nem folyik vissza) számára. <ul><li>Ha ez egy űrlap, fontolja meg egy hozzáférhető HTML űrlap használatát alternatívaként.</li><li>Ha ez egy dokumentum, fontolja meg a weboldallá alakítását.</li></ul>Máskülönben ellenőrizze a <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF hozzáférhetőségét az Acrobat DC-ben.</a>Megközelíthetőségét az <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF-ben.</a>.',
      QA_DOCUMENT: 'Nem lehet ellenőrizni a dokumentum hozzáférhetőségét. A hivatkozott dokumentumok webes tartalomnak minősülnek, és azokat is hozzáférhetővé kell tenni. Kérjük, kézzel ellenőrizze a dokumentumot. <ul><li>Tegye hozzáférhetőbbé <a href="https://support.google.com/docs/answer/6199477?hl=hu">Google Workspace dokumentumát vagy prezentációját.</a></li></li><li>Tegye hozzáférhetőbbé <a href="https://support.microsoft.com/hu/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office-dokumentumait.</a></li></ul>.',
      QA_PAGE_LANGUAGE: 'Az oldal nyelve nincs megadva! Kérjük, <a href="https://www.w3.org/International/questions/qa-html-language-declarations">declare language on HTML tag.</a>',
      QA_PAGE_TITLE: 'Hiányzik az oldal címe! Kérjük, adjon meg egy <a href="https://developer.mozilla.org/hu/docs/Web/HTML/Element/title">oldal címet.</a>',
      QA_BLOCKQUOTE_MESSAGE: 'Ez egy címszó? <strong {r}>%(sanitizedText)</strong> <hr> <hr> A blokkos idézőjeleket csak idézőjeleknél kell használni. Ha ez egy fejlécnek szánja, akkor ezt a blokkidézetet változtassa meg egy szemantikus fejlécre (pl. Fejléc 2 vagy Fejléc 3).',
      QA_FAKE_HEADING: 'Ez egy címszó? <strong {r}>%(boldtext)</strong> <hr> Egy félkövér vagy nagyméretű szövegsor címnek tűnhet, de a képernyőolvasót használó személy nem tudja megállapítani, hogy ez fontos, vagy nem tud a tartalmára ugrani. A félkövér vagy nagyméretű szöveg soha nem helyettesítheti a szemantikus címsorokat (Címsor 2-től a Címsor 6-ig).',
      QA_SHOULD_BE_LIST: 'Megpróbál listát készíteni? Lehetséges listaelemet találtunk: <strong {r}>%(firstPrefix)</strong> <hr> Győződjön meg róla, hogy szemantikus listákat használ, és használja helyette a felsorolás- vagy számformázó gombokat. Szemantikus lista használata esetén a segédtechnológiák képesek olyan információkat közvetíteni, mint az elemek teljes száma és az egyes elemek relatív pozíciója a listában. További információ a <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">szemantikus listákról.</a>',
      QA_UPPERCASE_WARNING: 'Találtam minden nagybetűt. Egyes képernyőolvasók a csupa nagybetűs szöveget betűszónak értelmezhetik, és minden egyes betűt külön-külön olvasnak. Ezenkívül egyesek nehezebben olvashatónak találják a csupa nagybetűs szöveget, és úgy tűnhet, mintha kiabálnának.',
      QA_DUPLICATE_ID: 'Találtunk <strong>duplikált azonosítót</strong>. A duplikált azonosító hibák köztudottan problémákat okoznak a segítő technológiák számára, amikor azok megpróbálnak interakcióba lépni a tartalommal. <hr> Kérjük, távolítsa el vagy változtassa meg a következő azonosítót: <strong {r}>%(id)</strong>',
      QA_TEXT_UNDERLINE_WARNING: 'Az aláhúzott szöveg összetéveszthető a linkekkel. Fontolja meg egy másik stílus használatát, például <code>&lt;strong&gt;</code><strong>strong fontosság</strong><code>&lt;/strong&gt;</code> vagy <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
      QA_SUBSCRIPT_WARNING: 'Az alul- és felülírás formázási beállításokat csak a szöveg pozíciójának tipográfiai konvenciók vagy szabványok szerinti megváltoztatására szabad használni. Nem szabad <strong>nem</strong> kizárólag megjelenítési vagy megjelenési célokra használni. Teljes mondatok formázása olvashatósági problémákat vet fel. Megfelelő felhasználási esetek közé tartozhat az exponensek, rendszámok, például 4<sup>th</sup> helyett 4<sup>th</sup>, és kémiai képletek (pl. H<sub>2</sub>O) megjelenítése.',
      TABLES_MISSING_HEADINGS: 'Hiányzó táblázatfejlécek! A hozzáférhető táblázatokhoz olyan HTML-jelölésre van szükség, amely jelzi a fejléccellákat és az adatcellákat, amelyek meghatározzák a kapcsolatukat. Ez az információ kontextust biztosít a segítő technológiát használó emberek számára. A táblázatokat csak táblázatos adatokhoz szabad használni. <hr> Tudjon meg többet a <a href="https://www.w3.org/WAI/tutorials/tables/">hozzáférhető táblázatokról.</a>',
      TABLES_SEMANTIC_HEADING: 'Az olyan szemantikus címsorokat, mint a Heading 2 vagy Heading 3, csak a tartalmi részeknél szabad használni; <strong>nem</strong> a HTML táblázatokban. A táblázatcímeket ehelyett a <code>&lt;th&gt;</code> elemmel jelezze. <hr> Tudjon meg többet a <a href="https://www.w3.org/WAI/tutorials/tables/">elérhető táblázatokról.</a>',
      TABLES_EMPTY_HEADING: 'Üres asztali fejlécet találtunk! A táblázat fejlécének <strong>soha</strong> nem szabad üresnek lennie. Fontos a sor- és/vagy oszlopfejlécek kijelölése a kapcsolatuk érzékeltetése érdekében. Ez az információ kontextust biztosít a segítő technológiát használó emberek számára. Ne feledje, hogy a táblázatok csak táblázatos adatokhoz használhatók. <hr> Tudjon meg többet a <a href="https://www.w3.org/WAI/tutorials/tables/">elérhető táblázatokról.</a>',
      CONTRAST_ERROR: 'Ez a szöveg nem elég kontrasztos a háttérrel szemben. A kontrasztaránynak normál szöveg esetén legalább 4,5:1, nagyméretű szöveg esetén pedig 3:1 arányúnak kell lennie. <hr> A kontrasztarány <strong {r}>%(cratio)</strong> a következő szöveg esetében: <strong {r}>%(sanitizedText)</strong>',
      CONTRAST_WARNING: 'Ennek a szövegnek a kontrasztja ismeretlen, és kézzel kell ellenőrizni. Biztosítsa, hogy a szöveg és a háttér színei erősen kontrasztosak legyenek. A kontrasztaránynak normál szöveg esetén legalább 4,5:1, nagyméretű szöveg esetén pedig 3:1 arányúnak kell lennie. <hr> <strong>Kérem, vizsgálja felül:</strong> %(sanitizedText)',
      CONTRAST_INPUT_ERROR: 'A szövegnek ebben a bevitelben nincs elég kontrasztja a háttérrel. A kontrasztaránynak normál szöveg esetén legalább 4,5:1, nagyméretű szöveg esetén pedig 3:1 arányúnak kell lennie. <hr> Kontrasztarány: <strong {r}>%(cratio)</strong>',
    },
  };

  return hu;

}));
