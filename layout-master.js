(function(){
  const legacy=['home-v3.css','ui-v5.css','responsive-v1.css','responsive-v2.css'];

  function disableLegacy(){
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link=>{
      const href=link.getAttribute('href')||'';
      if(legacy.some(name=>href.includes(name))) link.disabled=true;
    });
  }

  function ensureCss(id,href){
    if(document.getElementById(id)) return;
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.id=id;
    link.href=href;
    document.head.appendChild(link);
  }

  disableLegacy();
  ensureCss('kusima-layout-master','layout-v1.css?v=20260906-1');
  ensureCss('kusima-mood','mood-v1.css?v=20260906-6');
  ensureCss('kusima-mood-v2','mood-v2.css?v=20260907-2');
  new MutationObserver(()=>disableLegacy()).observe(document.head,{childList:true});

  const nameday=document.querySelector('#home .nameday-label');
  if(nameday) nameday.textContent='Meniny má';

  if(!document.querySelector('.kusima-flowers')){
    const flowers=document.createElement('div');
    flowers.className='kusima-flowers';
    flowers.setAttribute('aria-hidden','true');
    flowers.innerHTML='<img class="flowers-left" src="assets/flowers-left.svg?v=1" alt=""><img class="flowers-right" src="assets/flowers-right.svg?v=1" alt="">';
    document.body.appendChild(flowers);
  }

  function syncViewMood(){
    document.body.classList.toggle('kusima-home-active',!!document.querySelector('#home.active'));
  }
  syncViewMood();
  new MutationObserver(syncViewMood).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});

  document.documentElement.dataset.kusimaLayout='v1';
  document.documentElement.dataset.kusimaMood='v3';
})();
