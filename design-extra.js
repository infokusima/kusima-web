(function(){
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

  if(typeof renderNode==='function'){
    const originalRenderNode=renderNode;
    renderNode=function(id,push=true){
      const room=roomMap[id]||['kitchen','· naša kuchyňa'];
      const view=document.getElementById('dialogView');
      if(view) view.dataset.room=room[0];
      const label=document.getElementById('roomAssociation');
      if(label) label.textContent=room[1];
      return originalRenderNode(id,push);
    };
  }

  window.openSupplier=function(){
    ['home','dialogView','exploreView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));
    document.getElementById('supplierView')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.closeSupplier=function(){
    document.getElementById('supplierView')?.classList.remove('active');
    document.getElementById('home')?.classList.add('active');
    window.scrollTo(0,0);
  };
  window.openExplore=function(){
    ['home','dialogView','supplierView'].forEach(id=>document.getElementById(id)?.classList.remove('active'));
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
      oldGoHome();
    };
  }

  async function copyText(text,el){
    try{
      await navigator.clipboard.writeText(text);
    }catch(e){
      const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();
    }
    if(el){
      const old=el.dataset.oldText||el.textContent;el.dataset.oldText=old;el.textContent='Skopírované ✓';setTimeout(()=>el.textContent=old,1200);
    }
  }

  document.addEventListener('click',e=>{
    const row=e.target.closest('.copy-line');
    if(row) copyText(row.dataset.copy,row.querySelector('i'));
  });

  window.copySupplierData=function(btn){
    const text=[
      'KUSIMA, s.r.o. SVIT',
      'Sídlo: Rovná 599/17, 058 01 Poprad',
      'IČO: 36450090',
      'DIČ: 2020015833',
      'IČ DPH: nie sme platiteľom DPH',
      'IBAN: SK79 0200 0000 0013 8969 3857',
      'E-mail: info.kusima@gmail.com',
      'Telefón: +421 919 231 998',
      'Kancelária: Mierová 177, 059 21 Svit',
      'Obchodný register: Okresný súd Prešov, oddiel Sro, vložka 10657/P'
    ].join('\n');
    copyText(text,btn);
  };
})();
