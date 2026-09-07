(function(){
  'use strict';

  function cleanStatic(){
    const intro=document.querySelector('.tips-library-head p');
    if(intro) intro.textContent='Praktické a priebežne aktualizované texty pre vlastníkov bytov.';

    const heatCard=document.querySelector('[data-article="heat"]');
    if(heatCard){
      const title=heatCard.querySelector('strong');
      const desc=heatCard.querySelector('.desc');
      if(title) title.textContent='Za teplo musí platiť aj ten, kto má zavretý radiátor';
      if(desc) desc.textContent='Prečo nulová spotreba na radiátore neznamená nulový účet za vykurovanie.';
    }

    const required=document.querySelector('.client-required-doc');
    if(required){
      const small=required.querySelector('small');
      const strong=required.querySelector('strong');
      if(small) small.textContent='Plánovanie domu';
      if(strong) strong.textContent='Plán údržby a opráv na rok 2027';
    }
  }

  function cleanArticleModal(id){
    const modal=document.getElementById('kusimaTipModal');
    if(!modal) return;

    if(id==='heat'){
      const title=modal.querySelector('#tipModalTitle');
      if(title) title.textContent='Za teplo musí platiť aj ten, kto má zavretý radiátor';
    }

    if(id==='rights'){
      modal.querySelectorAll('.tip-note').forEach(note=>{
        if((note.textContent||'').includes('Starý údaj 15 dní')) note.remove();
      });
    }
  }

  function cleanPlan(){
    const view=document.getElementById('dialogView');
    if(!view || view.dataset.node!=='maintenance2027') return;

    const kicker=document.querySelector('#content .eyebrow');
    if(kicker && kicker.textContent.includes('POVINNÁ INFORMÁCIA')) kicker.textContent='PLÁN ÚDRŽBY A OPRÁV';

    const lead=document.querySelector('#content .plan-lead');
    if(lead) lead.innerHTML='Tento dokument predstavuje <b>spoločný rámec údržby a opráv na rok 2027</b> pre bytové domy v správe KUSIMA, s.r.o. Určuje hlavné oblasti, ktoré počas roka sledujeme a podľa technického stavu domu riešime.';

    const warning=document.querySelector('#content .plan-warning');
    if(warning) warning.innerHTML='<b>Každý dom je iný.</b> Zákon vyžaduje, aby správca do 30. novembra vlastníkom predložil plán opráv na nasledujúci rok so zohľadnením stavu konkrétneho domu a s návrhom tvorby fondu prevádzky, údržby a opráv. Konkrétny plán preto dostanú vlastníci každého domu osobitne.';

    document.querySelectorAll('#content h4').forEach(h=>{
      if(h.textContent.trim()==='Individuálna časť pre každý dom') h.textContent='Konkrétny plán každého domu';
    });

    const headings=[...document.querySelectorAll('#content h4')];
    const individual=headings.find(h=>h.textContent.trim()==='Konkrétny plán každého domu');
    if(individual && individual.nextElementSibling && individual.nextElementSibling.tagName==='P'){
      individual.nextElementSibling.textContent='Pre každý spravovaný dom sa pripraví samostatný plán podľa jeho technického stavu, známych potrieb, finančných možností a rozhodnutí vlastníkov. Obsahovať bude najmä navrhované opravy, ich prioritu, orientačný finančný rámec a návrh tvorby fondu na rok 2027.';
    }
  }

  cleanStatic();
  setTimeout(cleanStatic,0);

  document.addEventListener('click',function(e){
    const article=e.target.closest('[data-article]');
    if(article) setTimeout(()=>cleanArticleModal(article.dataset.article),0);

    const planButton=e.target.closest('.client-required-doc button');
    if(planButton) setTimeout(cleanPlan,0);
  });

  const observer=new MutationObserver(function(){
    cleanStatic();
    cleanPlan();
  });
  observer.observe(document.body,{childList:true,subtree:true});
})();
