(function(){
  'use strict';

  /* Po konsolidácii sa vzhľad už nenačítava ani nemení cez JavaScript.
     Tento skript iba označuje, či je práve otvorená titulka – kvôli intenzite kvetov. */
  const home=document.getElementById('home');
  if(!home) return;

  function syncHomeState(){
    document.body.classList.toggle('kusima-home-active',home.classList.contains('active'));
  }

  syncHomeState();
  new MutationObserver(syncHomeState).observe(home,{attributes:true,attributeFilter:['class']});
})();
