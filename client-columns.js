(function(){
  'use strict';

  if(typeof nodes!=='undefined' && nodes.client){
    nodes.client.choices=[
      ['problem','Mám problém','Porucha, vyúčtovanie, susedský spor alebo iná nepríjemnosť.'],
      ['forms','Tlačivá na stiahnutie','Pripravené PDF vzory pre najčastejšie situácie.'],
      ['objection','Mám výhradu alebo návrh','K správe, vyúčtovaniu, dodávateľovi alebo hlasovaniu.'],
      ['complaints','Reklamačný poriadok','Ako uplatniť reklamáciu služby a čo bude nasledovať.'],
      ['arrange','Potrebujem niečo vybaviť','Tlačivo, zmena údajov, prevod bytu alebo potvrdenie.'],
      ['priceList','Cenník služieb','Prehľad cien a informácia, čo je zahrnuté v správe.']
    ];
  }

  if(typeof renderNode==='function'){
    const previousRender=renderNode;
    renderNode=function(id,push=true){
      const view=document.getElementById('dialogView');
      if(view) view.dataset.node=id;
      return previousRender(id,push);
    };
  }
})();
