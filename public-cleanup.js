(function(){
  'use strict';

  function setText(el,text){
    if(el && el.textContent!==text) el.textContent=text;
  }
  function setHtml(el,html){
    if(el && el.innerHTML!==html) el.innerHTML=html;
  }

  function cleanStatic(){
    setText(document.querySelector('.tips-library-head p'),'Praktické a priebežne aktualizované texty pre vlastníkov bytov.');

    const heatCard=document.querySelector('[data-article="heat"]');
    if(heatCard){
      setText(heatCard.querySelector('strong'),'Za teplo musí platiť aj ten, kto má zavretý radiátor');
      setText(heatCard.querySelector('.desc'),'Prečo nulová spotreba na radiátore neznamená nulový účet za vykurovanie.');
    }

    const required=document.querySelector('.client-required-doc');
    if(required){
      setText(required.querySelector('small'),'Plánovanie domu');
      setText(required.querySelector('strong'),'Plán údržby a opráv na rok 2027');
    }
  }

  function cleanArticleModal(id){
    const modal=document.getElementById('kusimaTipModal');
    if(!modal) return;

    if(id==='heat'){
      setText(modal.querySelector('#tipModalTitle'),'Za teplo musí platiť aj ten, kto má zavretý radiátor');
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
    if(kicker && kicker.textContent.includes('POVINNÁ INFORMÁCIA')) setText(kicker,'PLÁN ÚDRŽBY A OPRÁV');

    setHtml(document.querySelector('#content .plan-lead'),'Tento dokument predstavuje <b>spoločný rámec údržby a opráv na rok 2027</b> pre bytové domy v správe KUSIMA, s.r.o. Určuje hlavné oblasti, ktoré počas roka sledujeme a podľa technického stavu domu riešime.');
    setHtml(document.querySelector('#content .plan-warning'),'<b>Každý dom je iný.</b> Zákon vyžaduje, aby správca do 30. novembra vlastníkom predložil plán opráv na nasledujúci rok so zohľadnením stavu konkrétneho domu a s návrhom tvorby fondu prevádzky, údržby a opráv. Konkrétny plán preto dostanú vlastníci každého domu osobitne.');

    document.querySelectorAll('#content h4').forEach(h=>{
      if(h.textContent.trim()==='Individuálna časť pre každý dom') setText(h,'Konkrétny plán každého domu');
    });

    const individual=[...document.querySelectorAll('#content h4')].find(h=>h.textContent.trim()==='Konkrétny plán každého domu');
    if(individual && individual.nextElementSibling && individual.nextElementSibling.tagName==='P'){
      setText(individual.nextElementSibling,'Pre každý spravovaný dom sa pripraví samostatný plán podľa jeho technického stavu, známych potrieb, finančných možností a rozhodnutí vlastníkov. Obsahovať bude najmä navrhované opravy, ich prioritu, orientačný finančný rámec a návrh tvorby fondu na rok 2027.');
    }
  }

  function refresh(){
    cleanStatic();
    cleanPlan();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',refresh,{once:true});
  else refresh();
  setTimeout(refresh,0);
  setTimeout(refresh,250);

  document.addEventListener('click',function(e){
    const article=e.target.closest('[data-article]');
    if(article) setTimeout(()=>cleanArticleModal(article.dataset.article),0);
    setTimeout(refresh,0);
    setTimeout(refresh,100);
  });
})();
