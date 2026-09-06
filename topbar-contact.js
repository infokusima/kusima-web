(function(){
  const style=document.createElement('style');
  style.textContent=`
    .topbar .logo{display:flex;align-items:center;min-width:0}
    .topbar .brand-line{display:inline-flex;align-items:center;gap:10px;min-width:0;white-space:nowrap}
    .topbar .brand-sro{font-size:13px;font-weight:700;letter-spacing:.02em;color:#627069}
    .topbar .brand-contact{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:#53615b;text-decoration:none;font-weight:650}
    .topbar .brand-contact:hover{color:#173d34;text-decoration:underline}
    .topbar .brand-sep{color:#bcc8c2;font-size:12px}
    .topbar .phone-icon{font-size:14px;line-height:1}
    @media(max-width:1050px){.topbar .brand-contact.email{display:none}.topbar .brand-sep.sep-email{display:none}}
    @media(max-width:760px){.topbar .brand-sro,.topbar .brand-contact{display:none}.topbar .brand-sep{display:none}}
  `;
  document.head.appendChild(style);

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
      tel.innerHTML='<span class="phone-icon" aria-hidden="true">☎</span><span>0919 231 998</span>';
      tel.addEventListener('click',e=>e.stopPropagation());
      wrap.append(tel);
    });
  }

  decorate();
  new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(n=>{if(n.nodeType===1) decorate(n)}))).observe(document.body,{childList:true,subtree:true});
})();
