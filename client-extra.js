(function(){
  const priceData=window.KUSIMA_CENNIK||{aktualizovane:'',poznamka:'',polozky:[]};
  const priceRows=priceData.polozky.map(p=>`<div class="price-row"><div><strong>${p.sluzba}</strong><span>${p.poznamka||''}</span></div><b>${p.cena}</b></div>`).join('');

  nodes.client.choices.push(
    ['priceList','Cenník služieb','Prehľad cien a informácia, čo je zahrnuté v správe.'],
    ['complaints','Reklamačný poriadok','Ako uplatniť reklamáciu služby a čo bude nasledovať.']
  );

  nodes.priceList={type:'answer',kicker:'CENNÍK SLUŽIEB',title:'Ceny majú byť jasné skôr, než niečo objednáte.',html:`
    <p>${priceData.poznamka}</p>
    <div class="price-list">${priceRows}</div>
    <p class="fine">Aktualizované: ${priceData.aktualizovane}. Pri konkrétnom dome má vždy prednosť platná zmluva o výkone správy a osobitne schválené podmienky.</p>
    <div class="softnote"><b>Redakcia cenníka:</b> ceny sú oddelené od webového kódu. Môžeme ich meniť samostatne a neskôr tento blok napojiť priamo na Google Sheet.</div>
  `,src:['law182']};

  nodes.complaints={type:'answer',kicker:'REKLAMAČNÝ PORIADOK',title:'Reklamáciu chceme vybaviť vecne, písomne a dohľadateľne.',html:`
    <p>Tento postup sa týka reklamácie vady služby poskytovanej spoločnosťou KUSIMA s.r.o. pri výkone správy. Bežná otázka, podnet, susedský spor alebo hlásenie poruchy nemusí byť reklamáciou služby.</p>
    <div class="steps">
      <div class="step"><b>1. Reklamáciu pošlite písomne.</b> Najjednoduchšie e-mailom na info.kusima@gmail.com alebo poštou na sídlo spoločnosti. Uveďte dom, byt alebo priestor, svoje meno, čo reklamujete, kedy sa problém prejavil a čo žiadate napraviť.</div>
      <div class="step"><b>2. Potvrdíme prijatie.</b> Pri vytknutí vady služby vám vydáme písomné potvrdenie a uvedieme lehotu, v ktorej vadu odstránime. Tá nesmie byť dlhšia ako 30 dní odo dňa vytknutia vady služby.</div>
      <div class="step"><b>3. Ak zodpovednosť odmietneme, vysvetlíme prečo.</b> Dôvody odmietnutia zodpovednosti za vadu služby oznámime písomne.</div>
      <div class="step"><b>4. Ak sa spor nevyrieši.</b> Spotrebiteľ môže po splnení zákonných podmienok požiadať o nápravu a následne využiť alternatívne riešenie spotrebiteľského sporu.</div>
    </div>
    <div class="notice"><strong>Dôležité:</strong> reklamácia služby správcu nie je to isté ako reklamácia práce dodávateľa domu, nesúhlas s rozhodnutím vlastníkov alebo osobný spor medzi susedmi. V takom prípade vás nasmerujeme na správny postup.</div>
    <div class="actions"><a class="btn primary" href="${mail('[KUSIMA] Reklamácia služby správcu','Prosím uveďte:\n- dom / adresu\n- číslo bytu alebo priestor\n- meno vlastníka\n- ktorú službu reklamujete\n- čo považujete za vadu alebo nesprávny postup\n- kedy sa problém prejavil\n- akú nápravu žiadate\n- telefón\n')}">Podať reklamáciu e-mailom</a><a class="btn" target="_blank" rel="noopener" href="https://www.soi.sk/alternativne-riesenie-spotrebitelskych-sporov/pravidla-ars">Alternatívne riešenie sporov · SOI ↗</a></div>
    <p class="fine">Pracovná verzia reklamačného poriadku pre web KUSIMA. Pred označením za definitívny interný predpis ešte zosúladíme identifikačné údaje, doručovaciu adresu a prípadné osobitné pravidlá zo zmlúv o výkone správy.</p>
  `,src:['consumer','soi']};
})();
