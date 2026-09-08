(function(){
  'use strict';

  /* Prechodná poistka počas konsolidácie: staré CSS sa nesmie dostať do renderu.
     Observer je spustený ešte pred client-extra.js, takže prípadný legacy link odstráni
     v tom istom cykle skôr, než sa stihne vykresliť. */
  const legacy=['home-v3.css','ui-v5.css','responsive-v1.css','responsive-v2.css'];
  function removeLegacyLinks(root=document){
    root.querySelectorAll?.('link[rel="stylesheet"]').forEach(link=>{
      const href=link.getAttribute('href')||'';
      if(legacy.some(name=>href.includes(name))) link.remove();
    });
  }
  removeLegacyLinks();
  new MutationObserver(records=>{
    records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType!==1) return;
      if(node.matches?.('link[rel="stylesheet"]')){
        const href=node.getAttribute('href')||'';
        if(legacy.some(name=>href.includes(name))) node.remove();
      }
    }));
  }).observe(document.head,{childList:true});

  /* Jediná zostávajúca úloha layout skriptu: intenzita kvetov podľa aktívnej titulky. */
  const home=document.getElementById('home');
  if(!home) return;
  function syncHomeState(){
    document.body.classList.toggle('kusima-home-active',home.classList.contains('active'));
  }
  syncHomeState();
  new MutationObserver(syncHomeState).observe(home,{attributes:true,attributeFilter:['class']});
})();
