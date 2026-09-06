(function(){
  const priceData=window.KUSIMA_CENNIK||{aktualizovane:'',poznamka:'',polozky:[]};
  const icons=['⌂','⌂','♨','◫','⌁','✓','◎','▤','⌕','○'];
  const priceRows=priceData.polozky.map((p,i)=>`<div class="price-row"><span class="price-icon" aria-hidden="true">${icons[i]||'•'}</span><div><strong>${p.sluzba}</strong><span>${p.poznamka||''}</span></div><b>${p.cena}</b></div>`).join('');

  nodes.client.choices.push(
    ['priceList','Cenník služieb','Prehľad cien a informácia, čo je zahrnuté v správe.'],
    ['complaints','Reklamačný poriadok','Ako uplatniť reklamáciu služby a čo bude nasledovať.']
  );

  nodes.priceList={type:'answer',kicker:'NAŠA PRACOVŇA',title:'Cenník platný od 1.1.2026',html:`
    <div class="price-list">${priceRows}</div>
    <p class="fine">${priceData.poznamka}</p>
  `,src:['law182']};

  nodes.complaints={type:'answer',kicker:'NAŠA PRACOVŇA',title:'Reklamačný poriadok',html:`
    <p>Tento postup sa týka reklamácie vady služby poskytovanej spoločnosťou KUSIMA s.r.o. pri výkone správy. Bežná otázka, podnet, susedský spor alebo hlásenie poruchy nemusí byť reklamáciou služby.</p>
    <div class="steps">
      <div class="step"><b>1. Reklamáciu pošlite písomne.</b> Najjednoduchšie e-mailom na info.kusima@gmail.com alebo poštou na sídlo spoločnosti. Uveďte dom, byt alebo priestor, svoje meno, čo reklamujete, kedy sa problém prejavil a čo žiadate napraviť.</div>
      <div class="step"><b>2. Potvrdíme prijatie.</b> Pri vytknutí vady služby vám vydáme písomné potvrdenie a uvedieme lehotu, v ktorej vadu odstránime. Tá nesmie byť dlhšia ako 30 dní odo dňa vytknutia vady služby.</div>
      <div class="step"><b>3. Ak zodpovednosť odmietneme, vysvetlíme prečo.</b> Dôvody odmietnutia zodpovednosti za vadu služby oznámime písomne.</div>
      <div class="step"><b>4. Ak sa spor nevyrieši.</b> Spotrebiteľ môže po splnení zákonných podmienok požiadať o nápravu a využiť ďalšie zákonné možnosti riešenia sporu.</div>
    </div>
    <div class="notice"><strong>Dôležité:</strong> reklamácia služby správcu nie je to isté ako reklamácia práce dodávateľa domu, nesúhlas s rozhodnutím vlastníkov alebo osobný spor medzi susedmi. V takom prípade vás nasmerujeme na správny postup.</div>
    <div class="actions"><a class="btn primary" href="${mail('[KUSIMA] Reklamácia služby správcu','Prosím uveďte:\n- dom / adresu\n- číslo bytu alebo priestor\n- meno vlastníka\n- ktorú službu reklamujete\n- čo považujete za vadu alebo nesprávny postup\n- kedy sa problém prejavil\n- akú nápravu žiadate\n- telefón\n')}">Podať reklamáciu e-mailom</a></div>
    <p class="fine">Pracovná verzia reklamačného poriadku pre web KUSIMA. Pred označením za definitívny interný predpis ešte zosúladíme identifikačné údaje, doručovaciu adresu a prípadné osobitné pravidlá zo zmlúv o výkone správy.</p>
  `,src:['consumer']};
})();
