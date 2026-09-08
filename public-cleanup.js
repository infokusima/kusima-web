(function(){
  'use strict';

  /* Po prvej konsolidacii uz je aktualny layout nacitany priamo v indexe.
     Stary home-v3.css sa vsak este mohol dodatocne vlozit z design-extra.js a na chvilu
     prepisat rozmery titulky. Odstranime iba tuto jednu staru vrstvu, bez observera a bez slucky. */
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link=>{
    const href=link.getAttribute('href')||'';
    if(href.includes('home-v3.css')) link.remove();
  });

  /* Pravý okraj: posuvame iba text, nie panel ani fotografiu. */
  if(!document.getElementById('kusima-right-text-inset')){
    const style=document.createElement('style');
    style.id='kusima-right-text-inset';
    style.textContent=`
      #home .topbar > .small{margin-right:18px!important;}
      #home .hero-time{margin-right:18px!important;}
      #home .hero-weather{margin-right:18px!important;}
      @media(max-width:700px){
        #home .topbar > .small{margin-right:8px!important;}
        #home .hero-time{margin-right:10px!important;}
        #home .hero-weather{margin-right:10px!important;}
      }
    `;
    document.head.appendChild(style);
  }

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

  function applyCurrentView(){
    cleanStatic();
    cleanPlan();
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',applyCurrentView,{once:true});
  }else{
    applyCurrentView();
  }

  document.addEventListener('click',function(e){
    const article=e.target.closest('[data-article]');
    if(article){
      setTimeout(function(){ cleanArticleModal(article.dataset.article); },0);
      return;
    }

    const opensClient=e.target.closest('#home .route, .back, .client-required-doc button');
    if(opensClient){
      setTimeout(applyCurrentView,0);
    }
  });
})();
