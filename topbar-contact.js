(function(){
  'use strict';

  function decorate(root=document){
    root.querySelectorAll('.topbar .logo-name').forEach(name=>{
      if(name.parentElement?.querySelector('.brand-line')) return;
      const wrap=document.createElement('span');
      wrap.className='brand-line';
      name.after(wrap);
      wrap.append(
        Object.assign(document.createElement('span'),{className:'brand-sro',textContent:'s.r.o.'}),
        Object.assign(document.createElement('span'),{className:'brand-sep sep-email',textContent:'·'})
      );
      const email=document.createElement('a');
      email.className='brand-contact email';
      email.href='mailto:info.kusima@gmail.com';
      email.textContent='info.kusima@gmail.com';
      email.addEventListener('click',e=>e.stopPropagation());
      wrap.append(email,Object.assign(document.createElement('span'),{className:'brand-sep',textContent:'·'}));
      const tel=document.createElement('a');
      tel.className='brand-contact phone';
      tel.href='tel:+421919231998';
      tel.title='Konateľ / technické záležitosti';
      tel.innerHTML='<span class="phone-icon" aria-hidden="true">☎</span><span>Konateľ/tech. 0919 231 998</span>';
      tel.addEventListener('click',e=>e.stopPropagation());
      const sep=document.createElement('span');
      sep.className='brand-sep';
      sep.textContent='·';
      const economic=document.createElement('a');
      economic.className='brand-contact phone';
      economic.href='tel:+421919134142';
      economic.title='Spoločníčka / ekonomické záležitosti';
      economic.innerHTML='<span class="phone-icon" aria-hidden="true">☎</span><span>Spoločníčka/ekon. 0919 134 142</span>';
      economic.addEventListener('click',e=>e.stopPropagation());
      wrap.append(tel,sep,economic);
    });
  }

  decorate();

  /* Prospect sa zatiaľ vytvára skriptom. Sledujeme len pridanie nového view,
     nie celý obsah stránky a nič spätne neprepisujeme. */
  const observer=new MutationObserver(records=>{
    records.forEach(r=>r.addedNodes.forEach(n=>{
      if(n.nodeType===1) decorate(n);
    }));
  });
  observer.observe(document.body,{childList:true});
})();
