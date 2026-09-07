# KUSIMA – čakajúce úpravy

Stav uložený 7. 9. 2026. Tento súbor je iba v pracovnej vetve `pending-client-articles-ui-2026-09-07` a nemení živý web.

## 1. KLIENT – súvisiace články

Schválená úprava:
- odkazy na súvisiace články zobrazovať hore v odpovedi, skôr než vysvetľujúci text a kontaktné tlačidlá,
- blok má byť viditeľný, ale nie agresívny,
- jemné modré podfarbenie celého bloku,
- jednotlivé odkazy/tlačidlá tiež modro zvýrazniť,
- účel: aby si vlastník článok všimol a prečítal skôr, než začne písať alebo volať správcovi,
- zachovať všetky existujúce prepojenia na články podľa jednotlivých situácií.

Odporúčaný nadpis bloku:
**Najprv odporúčame prečítať – možno tu nájdete odpoveď**

## 2. Historická ortofotomapa Slovenska

NEROBIŤ teraz žiadnu zmenu obrázka.
- pôvodný text karty ostáva presne nezmenený,
- rozmer karty sa nemení,
- odkaz ostáva `https://mapy.tuzvo.sk/hofm/`,
- nový obrázok/mapu dodá Dušan neskôr sám,
- nepoužiť predtým pripravenú kreslenú mapu Slovenska.

## 3. Bezpečnostné pravidlo

Pri ďalšom zásahu:
- najprv vytvoriť záložnú vetvu,
- neupravovať mapovú kartu, kým nebude dodaný nový obrázok,
- nepoužívať MutationObserver ani inú slučku na opakované prepisovanie DOM,
- po nasadení overiť GitHub Pages deployment pred oznámením, že je zmena živá.
