(function(){
  ['rooms-v2.css','home-v3.css'].forEach(href=>{const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);});

  // Pracovné logo podľa dodaného vzoru.
  document.querySelectorAll('.logo img').forEach(img=>{img.src='assets/logo-kusima.svg';img.alt='KUSIMA';});

  // Na webe nechceme zobrazovať SOI ako odporúčaný zdroj.
  if(typeof sources!=='undefined' && sources.soi) delete sources.soi;
  if(typeof nodes!=='undefined') Object.values(nodes).forEach(n=>{if(Array.isArray(n.src)) n.src=n.src.filter(x=>x!=='soi');});

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
      const view=document.getElementById('dialogView'); if(view) view.dataset.room=room[0];
      const label=document.getElementById('roomAssociation'); if(label) label.textContent=room[1];
      const result=originalRenderNode(id,push);
      const content=document.getElementById('content'); const meta=roomMeta[room[0]]||roomMeta.kitchen;
      if(content) content.insertAdjacentHTML('afterbegin',`<div class="room-caption"><strong>${meta[0]}</strong><small>${meta[1]}</small></div>`);
      return result;
    };
  }

  // Záujemca o správu = naša obývačka.
  const prospect=document.createElement('section');
  prospect.id='prospectView'; prospect.className='view room-shell'; prospect.dataset.room='living';
  prospect.innerHTML=`
    <header class="topbar shell"><a href="#" class="logo" onclick="closeProspect();return false"><img src="assets/logo-kusima.svg" alt="KUSIMA"><span class="logo-name">KUSIMA</span></a><span class="small">Záujemca o správu <em>· naša obývačka</em></span></header>
    <main class="shell prospect-page"><button class="back" onclick="closeProspect()">← Späť na úvod</button>
      <div class="prospect-head"><div class="room-caption"><strong>Naša obývačka</strong><small>miesto pre návštevu a prvý rozhovor</small></div><p class="eyebrow">ZÁUJEMCA O SPRÁVU</p><h2>Sadnime si k tomu.</h2>
        <p class="prospect-intro"><strong>Sme malá rodinná správcovská firma.</strong> Dnes spravujeme 15 bytových domov a voľnú kapacitu máme približne na ďalšie 3 až 5. Nechceme rásť za každú cenu. Chceme si zachovať spôsob práce, pri ktorom <strong>vieme, čo robíme – a vieme aj pre koho to robíme.</strong></p>
      </div>
      <div class="prospect-grid prospect-grid-compact">
        <section class="prospect-card compact"><div class="room-icon">☎</div><h3>Osobný kontakt</h3><p>Väčšinu vlastníkov poznáme osobne. Vedia, že keď zavolajú konateľovi, dostanú odpoveď, radu alebo konkrétny ďalší krok.</p></section>
        <section class="prospect-card compact"><div class="room-icon">§</div><h3>Právne a technické zázemie</h3><p>Sledujeme legislatívne zmeny, spolupracujeme so zmluvnou právnou kanceláriou, overenými revíznymi firmami a zmluvnými majstrami pre elektrinu, vodu a kúrenie.</p></section>
        <section class="prospect-card compact"><div class="room-icon">24</div><h3>Keď treba, sme dostupní</h3><p>Pri dôležitom probléme vieme pomôcť aj cez víkend, sviatok či počas dovolenky. Správa domu pre nás nekončí pracovnou dobou.</p></section>
        <section class="prospect-card compact"><div class="room-icon">€</div><h3>Transparentné hospodárenie</h3><p>Nevnucujeme nepotrebné investície. Ponuky porovnávame, vysvetľujeme možnosti a s peniazmi domu hospodárime transparentne.</p></section>
      </div>
      <section class="prospect-belief"><p><strong>Každý nový dom je pre nás nový vzťah, nie nové číslo v databáze.</strong> Správu domu nevnímame len ako administratívu, ale aj ako zodpovednosť za miesto, kde ľudia bývajú.</p></section>
      <section class="prospect-cta"><div><h3>Chcete sa nezáväzne porozprávať?</h3><p>Napíšte nám lokalitu, približný počet bytov a čo by ste chceli na správe svojho domu zmeniť.</p></div><a class="btn primary" href="mailto:info.kusima@gmail.com?subject=%5BKUSIMA%5D%20Z%C3%A1ujem%20o%20spr%C3%A1vu&body=Pros%C3%ADm%20uve%C4%8Fte%3A%0A-%20mesto%20%2F%20lokalitu%0A-%20pribli%C5%BEn%C3%BD%20po%C4%8Det%20bytov%0A-%20%C4%8Do%20by%20ste%20chceli%20na%20spr%C3%A1ve%20zmeni%C5%A5%0A-%20kontakt%0A">Napísať KUSIMA</a></section>
    </main>`;
  const explore=document.getElementById('exploreView'); if(explore) document.body.insertBefore(prospect,explore); else document.body.appendChild(prospect);

  const mainRoutes=document.querySelectorAll('#home .route');
  if(mainRoutes[2]){mainRoutes[2].onclick=null;mainRoutes[2].addEventListener('click',()=>openProspect());}

  window.openSupplier=function(){['home','dialogView','exploreView','prospectView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));document.getElementById('supplierView')?.classList.add('active');scrollTo(0,0);};
  window.closeSupplier=function(){document.getElementById('supplierView')?.classList.remove('active');document.getElementById('home')?.classList.add('active');scrollTo(0,0);};
  window.openProspect=function(){['home','dialogView','supplierView','exploreView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));document.getElementById('prospectView')?.classList.add('active');scrollTo(0,0);};
  window.closeProspect=function(){document.getElementById('prospectView')?.classList.remove('active');document.getElementById('home')?.classList.add('active');scrollTo(0,0);};
  window.openExplore=function(){['home','dialogView','supplierView','prospectView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));document.getElementById('exploreView')?.classList.add('active');scrollTo(0,0);};
  window.closeExplore=function(){document.getElementById('exploreView')?.classList.remove('active');document.getElementById('home')?.classList.add('active');scrollTo(0,0);};

  const oldGoHome=typeof goHome==='function'?goHome:null;
  if(oldGoHome) goHome=function(){document.getElementById('supplierView')?.classList.remove('active');document.getElementById('exploreView')?.classList.remove('active');document.getElementById('prospectView')?.classList.remove('active');oldGoHome();};

  async function copyText(text,el){try{await navigator.clipboard.writeText(text);}catch(e){const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();}if(el){const old=el.dataset.oldText||el.textContent;el.dataset.oldText=old;el.textContent='Skopírované ✓';setTimeout(()=>el.textContent=old,1200);}}
  document.addEventListener('click',e=>{const row=e.target.closest('.copy-line');if(row) copyText(row.dataset.copy,row.querySelector('i'));});
  window.copySupplierData=function(btn){copyText(['KUSIMA, s.r.o. SVIT','Sídlo: Rovná 599/17, 058 01 Poprad','IČO: 36450090','DIČ: 2020015833','IČ DPH: nie sme platiteľom DPH','IBAN: SK79 0200 0000 0013 8969 3857','E-mail: info.kusima@gmail.com','Telefón: +421 919 231 998','Kancelária: Mierová 177, 059 21 Svit','Obchodný register: Okresný súd Prešov, oddiel Sro, vložka 10657/P'].join('\n'),btn);};

  // Titulka: pozdrav, väčší dátum/hodiny a 10 regionálnych záberov po 30 sekundách.
  const greeting=document.querySelector('#home .hero-glass-label'); if(greeting) greeting.textContent='Pekný deň praje Váš správca';
  const photo=document.querySelector('#home .hero-photo>img');
  let credit=document.querySelector('#home .hero-credit');
  if(credit){const a=document.createElement('a');a.className='hero-credit';a.target='_blank';a.rel='noopener';credit.replaceWith(a);credit=a;}
  const slides=[
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Svit,%20pohled%20na%20Tatry.jpg?width=1600','Svit · Tatry na dosah','https://commons.wikimedia.org/wiki/File:Svit,_pohled_na_Tatry.jpg'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Svit,%20Hlavn%C3%A1%20(1).jpg?width=1600','Svit · Hlavná','https://commons.wikimedia.org/wiki/Category:Svit'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Svit,%20Mierov%C3%A1%20(1).jpg?width=1600','Svit · Mierová','https://commons.wikimedia.org/wiki/Category:Svit'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Svit,%20Slovakia.jpg?width=1600','Svit · mesto pod Tatrami','https://commons.wikimedia.org/wiki/File:Svit,_Slovakia.jpg'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/%C4%8Cas%C5%A5%20Svitu%20a%20Vysok%C3%A9%20Tatry%203.jpg?width=1600','Svit a Vysoké Tatry','https://commons.wikimedia.org/wiki/Category:Svit'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Vysok%C3%A9%20Tatry%20panorama.jpg?width=1600','Vysoké Tatry · panoráma','https://commons.wikimedia.org/wiki/File:Vysok%C3%A9_Tatry_panorama.jpg'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Panor%C3%A1ma%20Vysok%C3%A9%20Tatry.JPG?width=1600','Gerlach a Slavkovský štít','https://commons.wikimedia.org/wiki/File:Panor%C3%A1ma_Vysok%C3%A9_Tatry.JPG'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Panorama%20High%20Tatras%20from%20Poprad.jpg?width=1600','Tatry z Popradu','https://commons.wikimedia.org/wiki/File:Panorama_High_Tatras_from_Poprad.jpg'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Poprad-Tatry,%20Pohled%20na%20Vysok%C3%A9%20Tatry.jpg?width=1600','Poprad-Tatry · pohľad na štíty','https://commons.wikimedia.org/wiki/File:Poprad-Tatry,_Pohled_na_Vysok%C3%A9_Tatry.jpg'],
    ['https://commons.wikimedia.org/wiki/Special:Redirect/file/High%20Tatras%20from%20over%20Batizovce%20I.jpg?width=1600','Podtatranská krajina','https://commons.wikimedia.org/wiki/Category:Panoramics_of_the_High_Tatra_Mountains']
  ];
  let slideIndex=0;
  function showSlide(i,animate){if(!photo)return;const s=slides[i%slides.length];if(animate)photo.classList.add('is-changing');setTimeout(()=>{photo.src=s[0];photo.alt=s[1];if(credit){credit.textContent=s[1]+' · Wikimedia Commons ↗';credit.href=s[2];}photo.onload=()=>photo.classList.remove('is-changing');},animate?300:0);}
  showSlide(0,false); setInterval(()=>{slideIndex=(slideIndex+1)%slides.length;showSlide(slideIndex,true);},30000);
})();