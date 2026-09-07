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
  ensureCss('kusima-preconsolidation-fixes','preconsolidation-fixes.css?v=20260907-1');
  new MutationObserver(()=>disableLegacy()).observe(document.head,{childList:true});

  const nameday=document.querySelector('#home .nameday-label');
  if(nameday) nameday.textContent='Meniny má';

  const lead=document.querySelector('#home .hero-copy .lead');
  if(lead) lead.textContent='Pokračujte podľa ponuky:';

  const routes=document.querySelectorAll('#home .route');
  if(routes[0]){
    const title=routes[0].querySelector('strong');
    const sub=routes[0].querySelector('span:last-child');
    if(title) title.textContent='KLIENT – vlastník bytu';
    if(sub) sub.innerHTML='<b>Naša kuchyňa</b> · poďme spolu nájsť riešenie.';
  }
  if(routes[1]){
    const sub=routes[1].querySelector('span:last-child');
    if(sub) sub.innerHTML='<b>Naša dielňa</b> · ponuky, spolupráca a fakturácia.';
  }
  if(routes[2]){
    const sub=routes[2].querySelector('span:last-child');
    if(sub) sub.innerHTML='<b>Naša obývačka</b> · pre domy, ktoré hľadajú správcu.';
  }
  if(routes[3]){
    const sub=routes[3].querySelector('span:last-child');
    if(sub) sub.innerHTML='<b>Naša terasa / balkón</b> · články, trendy a dobré odkazy.';
  }

  if(!document.getElementById('kusima-home-service-colors')){
    const style=document.createElement('style');
    style.id='kusima-home-service-colors';
    style.textContent=`
      #home.room-shell{
        background:
          radial-gradient(900px 430px at 15% 12%,rgba(255,255,255,.88) 0%,rgba(255,255,255,.42) 34%,transparent 62%),
          radial-gradient(720px 390px at 34% 82%,rgba(255,255,255,.38) 0%,transparent 58%),
          linear-gradient(135deg,#f2f3f4 0%,#e8eaec 46%,#dfe2e5 100%)!important;
      }
      #home.room-shell::before{
        display:none!important;
        background-image:none!important;
      }
      #home.room-shell::after{
        content:""!important;
        position:fixed!important;
        inset:0!important;
        pointer-events:none!important;
        z-index:0!important;
        background:
          linear-gradient(104deg,rgba(255,255,255,.38) 0%,rgba(255,255,255,.13) 23%,transparent 46%),
          radial-gradient(520px 250px at 50% 8%,rgba(255,255,255,.24),transparent 70%)!important;
      }
      #home .hero-glass{
        background:rgba(255,249,218,.95)!important;
        border-color:rgba(225,202,92,.48)!important;
      }
      #home .quicklinks a{
        background:rgba(255,249,218,.96)!important;
        border-color:rgba(222,199,92,.58)!important;
      }
      #home .quicklinks a:hover,
      #home .quicklinks a:focus-visible{
        background:rgba(255,242,178,.98)!important;
        border-color:rgba(210,181,52,.72)!important;
      }
      #home .route span:last-child b{
        font-weight:900!important;
        color:#405c52!important;
      }
    `;
    document.head.appendChild(style);
  }

  const tickerText='KUSIMA správca bytových domov v Poprade, vo Svite a okolí, KUSIMA Váš správca.';
  document.querySelectorAll('#home .ticker .track span').forEach(span=>{span.textContent=tickerText;});

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
