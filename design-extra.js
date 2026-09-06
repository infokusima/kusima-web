(function(){
  const css=document.createElement('link');css.rel='stylesheet';css.href='rooms-v2.css';document.head.appendChild(css);

  // Na webe nechceme zobrazovať SOI ako odporúčaný zdroj.
  if(typeof sources!=='undefined' && sources.soi){ delete sources.soi; }
  if(typeof nodes!=='undefined'){
    Object.values(nodes).forEach(n=>{ if(Array.isArray(n.src)) n.src=n.src.filter(x=>x!=='soi'); });
  }

  const roomMap={
    client:['kitchen','· naša kuchyňa'],problem:['kitchen','· naša kuchyňa'],arrange:['kitchen','· naša kuchyňa'],objection:['kitchen','· naša kuchyňa'],proposal:['kitchen','· naša kuchyňa'],
    forms:['pantry','· naša špajza'],priceList:['office','· naša pracovňa'],complaints:['office','· naša pracovňa'],
    fault:['workshop','· naša dielňa'],heat:['workshop','· naša dielňa'],reconstruction:['workshop','· naša dielňa'],myreconstruction:['workshop','· naša dielňa'],contractorcomplaint:['workshop','· naša dielňa'],repairproposal:['workshop','· naša dielňa'],energyproposal:['workshop','· naša dielňa'],supplierproposal:['workshop','· naša dielňa']
  };
  const roomMeta={
    kitchen:['Naša kuchyňa','tu sa veci varia a riešia'],
    pantry:['Naša špajza','všetko dôležité po ruke'],
    office:['Naša pracovňa','poriadok, pravidlá a čísla'],
    workshop:['Naša dielňa','technika, opravy a realizácia']
  };

  if(typeof renderNode==='function'){
    const originalRenderNode=renderNode;
    renderNode=function(id,push=true){
      const room=roomMap[id]||['kitchen','· naša kuchyňa'];
      const view=document.getElementById('dialogView');
      if(view) view.dataset.room=room[0];
      const label=document.getElementById('roomAssociation');
      if(label) label.textContent=room[1];
      const result=originalRenderNode(id,push);
      const content=document.getElementById('content');
      const meta=roomMeta[room[0]]||roomMeta.kitchen;
      if(content){
        content.insertAdjacentHTML('afterbegin',`<div class="room-caption"><strong>${meta[0]}</strong><small>${meta[1]}</small></div>`);
      }
      return result;
    };
  }

  // Záujemca o správu = skutočná obývačka, nie iba názov tlačidla.
  const prospect=document.createElement('section');
  prospect.id='prospectView';
  prospect.className='view room-shell';
  prospect.dataset.room='living';
  prospect.innerHTML=`
    <header class="topbar shell"><a href="#" class="logo" onclick="closeProspect();return false"><img src="assets/logo-placeholder.svg" alt="KUSIMA"><span class="logo-name">KUSIMA</span></a><span class="small">Záujemca o správu <em>· naša obývačka</em></span></header>
    <main class="shell prospect-page"><button class="back" onclick="closeProspect()">← Späť na úvod</button>
      <div class="prospect-head"><div class="room-caption"><strong>Naša obývačka</strong><small>miesto pre návštevu a prvý rozhovor</small></div><p class="eyebrow">ZÁUJEMCA O SPRÁVU</p><h2>Sadnime si k tomu normálne.</h2><p>Ak uvažujete o zmene správcu alebo práve dokončujete nový bytový dom, nemusíte najprv študovať naše služby. Povedzte nám, <strong>čo dnes nefunguje a čo od správy očakávate</strong>. Od toho sa odrazíme.</p></div>
      <div class="prospect-grid">
        <section class="prospect-card"><div class="room-icon">☕</div><h3>Najprv rozhovor</h3><p>Lokalita, približný počet bytov a jedna veta o tom, prečo hľadáte správcu. Na prvý kontakt to úplne stačí.</p></section>
        <section class="prospect-card"><div class="room-icon">⌂</div><h3>Potom konkrétny návrh</h3><p>Rozsah správy, komunikácia, technická agenda, hospodárenie a cena. Nie univerzálny balík pre každý dom.</p></section>
        <section class="prospect-card"><div class="room-icon">◎</div><h3>Referencie chránime</h3><p>Verejný zoznam spravovaných domov nezverejňujeme. Spôsob práce vieme ukázať na reálnych, primerane anonymizovaných príkladoch.</p></section>
      </div>
      <section class="prospect-cta"><div><h3>Chcete sa len nezáväzne opýtať?</h3><p>Napíšte nám, odkiaľ ste, približný počet bytov a čo by ste chceli na súčasnej správe zmeniť. Ozveme sa normálne, bez obchodného nátlaku.</p></div><a class="btn primary" href="mailto:info.kusima@gmail.com?subject=%5BKUSIMA%5D%20Z%C3%A1ujem%20o%20spr%C3%A1vu&body=Pros%C3%ADm%20uve%C4%8Fte%3A%0A-%20mesto%20%2F%20lokalitu%0A-%20pribli%C5%BEn%C3%BD%20po%C4%8Det%20bytov%0A-%20%C4%8Do%20v%C3%A1m%20na%20s%C3%BA%C4%8Dasnej%20spr%C3%A1ve%20nevyhovuje%0A-%20kontakt%0A">Napísať KUSIMA</a></section>
    </main>`;
  const explore=document.getElementById('exploreView');
  if(explore) document.body.insertBefore(prospect,explore); else document.body.appendChild(prospect);

  const mainRoutes=document.querySelectorAll('#home .route');
  if(mainRoutes[2]){
    mainRoutes[2].onclick=null;
    mainRoutes[2].addEventListener('click',()=>openProspect());
  }

  window.openSupplier=function(){
    ['home','dialogView','exploreView','prospectView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));
    document.getElementById('supplierView')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.closeSupplier=function(){
    document.getElementById('supplierView')?.classList.remove('active');
    document.getElementById('home')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.openProspect=function(){
    ['home','dialogView','supplierView','exploreView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));
    document.getElementById('prospectView')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.closeProspect=function(){
    document.getElementById('prospectView')?.classList.remove('active');
    document.getElementById('home')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.openExplore=function(){
    ['home','dialogView','supplierView','prospectView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));
    document.getElementById('exploreView')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.closeExplore=function(){
    document.getElementById('exploreView')?.classList.remove('active');
    document.getElementById('home')?.classList.add('active');
    window.scrollTo(0,0);
  };

  const oldGoHome=typeof goHome==='function'?goHome:null;
  if(oldGoHome){
    goHome=function(){
      document.getElementById('supplierView')?.classList.remove('active');
      document.getElementById('exploreView')?.classList.remove('active');
      document.getElementById('prospectView')?.classList.remove('active');
      oldGoHome();
    };
  }

  async function copyText(text,el){
    try{ await navigator.clipboard.writeText(text); }
    catch(e){ const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove(); }
    if(el){ const old=el.dataset.oldText||el.textContent;el.dataset.oldText=old;el.textContent='Skopírované ✓';setTimeout(()=>el.textContent=old,1200); }
  }
  document.addEventListener('click',e=>{ const row=e.target.closest('.copy-line'); if(row) copyText(row.dataset.copy,row.querySelector('i')); });

  window.copySupplierData=function(btn){
    const text=['KUSIMA, s.r.o. SVIT','Sídlo: Rovná 599/17, 058 01 Poprad','IČO: 36450090','DIČ: 2020015833','IČ DPH: nie sme platiteľom DPH','IBAN: SK79 0200 0000 0013 8969 3857','E-mail: info.kusima@gmail.com','Telefón: +421 919 231 998','Kancelária: Mierová 177, 059 21 Svit','Obchodný register: Okresný súd Prešov, oddiel Sro, vložka 10657/P'].join('\n');
    copyText(text,btn);
  };
})();
