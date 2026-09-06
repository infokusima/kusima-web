(function(){
  const legacy=['home-v3.css','ui-v5.css','responsive-v1.css','responsive-v2.css'];

  function disableLegacy(){
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link=>{
      const href=link.getAttribute('href')||'';
      if(legacy.some(name=>href.includes(name))) link.disabled=true;
    });
  }

  disableLegacy();

  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='layout-v1.css?v=20260906-1';
  css.id='kusima-layout-master';
  document.head.appendChild(css);

  const compact=document.createElement('link');
  compact.rel='stylesheet';
  compact.href='subpages-compact-v1.css?v=20260906-1';
  compact.id='kusima-subpages-compact';
  document.head.appendChild(compact);

  /* Ak niektory starsi skript prida historicky CSS neskor, hned ho vyradime. */
  new MutationObserver(()=>disableLegacy()).observe(document.head,{childList:true});

  /* Drobna textova oprava kalendara. */
  const nameday=document.querySelector('#home .nameday-label');
  if(nameday) nameday.textContent='Meniny má';

  document.documentElement.dataset.kusimaLayout='v1';
})();
