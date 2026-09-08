# KUSIMA web – mapa architektúry

Tento súbor je interná technická mapa, aby sa ďalšie úpravy nerobili vrstvami cez seba.

## Zásady

1. `index.html` je jediný zdroj poradia CSS/JS a základnej HTML štruktúry.
2. GitHub Actions už nesmie dopĺňať alebo duplikovať `<script>` tagy.
3. Pri deployi sa vytvorí jediný renderovací stylesheet `site.css` z presne určeného poradia zdrojových CSS súborov.
4. JavaScript nesmie meniť rozmery, farby alebo pripájať nové layoutové CSS. Má iba obsluhovať dáta a interakcie.
5. Dynamické údaje (meniny, počasie, RSS) iba menia obsah už existujúcich prvkov; nesmú prestavovať titulku.
6. Legacy súbory `home-v3.css`, `ui-v5.css`, `responsive-v1.css`, `responsive-v2.css` sa nepoužívajú. Dočasná poistka ich pri pokuse o vloženie odstráni.
7. Pred každou väčšou konsolidáciou sa vytvorí backup branch.

## CSS – poradie zdrojov pre site.css

- `styles.css` – pôvodný základ
- `overrides.css` – historické rozšírenia
- `rooms-v2.css` – miestnostný koncept podstránok
- `layout-v1.css` – hlavné rozmery a responzivita
- `mood-v1.css` – dekorácie a celková nálada
- `mood-v2.css` – farebné rozlíšenie sekcií
- `preconsolidation-fixes.css` – malé schválené opravy
- `content-v2.css` – články a plán údržby
- `source-buttons-v1.css` – zvýraznenie odborných zdrojov
- `components-runtime.css` – statické štýly komponentov ovládaných JS
- `home-current-v1.css` – posledné schválené pravidlá titulky

## JS – účel

- `app.js` – základná navigácia a strom KLIENT
- `layout-master.js` – iba stav titulky + dočasná ochrana pred legacy CSS
- `client-extra.js` – tlačivá, cenník a rozšírenie klienta
- `design-extra-v2.js` – podstránka záujemcu a fotogaléria
- `home-panels.js` – iba meniny
- `weather-home.js` – iba počasie
- `rss-svit.js`, `rss-tatry.js` – iba text/link RSS
- `topbar-contact.js` – doplnenie kontaktov do hlavičiek, bez CSS
- `content-v2.js`, `articles-wave2.js`, `articles-wave3.js` – články
- `public-cleanup.js` – DOČASNÁ vrstva; v ďalšej fáze treba jej texty presunúť priamo do zdrojového obsahu a súbor odstrániť
- `chime.js` – zvuková odozva

## Ďalšia fáza – obsah bez miešania s logikou

Po overení stabilného načítania vytvoriť jeden obsahový zdroj (napr. `site-content.js`) pre texty titulky, klientské voľby, záujemcu a články. Renderovacie funkcie ostanú oddelené. Farby a hlavné vizuálne tokeny presunúť do jedného `theme.css`.

Cieľ: zmena textu = jeden obsahový súbor; zmena farby = jeden theme súbor; zmena logiky = samostatný JS bez zásahu do obsahu.
