(function(){
  const legacy=['home-v3.css','ui-v5.css','responsive-v1.css','responsive-v2.css'];

  function disableLegacy(){
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link=>{
      const href=link.getAttribute('href')||'';
      if(legacy.some(name=>href.includes(name))) link.disabled=true;
    });
  }

  disableLegacy();

  if(!document.getElementById('kusima-layout-master')){
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href='layout-v1.css?v=20260906-1';
    css.id='kusima-layout-master';
    document.head.appendChild(css);
  }

  /* Ak niektory starsi skript prida historicky CSS neskor, hned ho vyradime. */
  new MutationObserver(()=>disableLegacy()).observe(document.head,{childList:true});

  /* Kalendár. */
  const nameday=document.querySelector('#home .nameday-label');
  if(nameday) nameday.textContent='Meniny má';

  /* ---------------------------------------------------------
     KUSIMA MOOD v1
     Len vizuálna nálada. Nemení šírky, výšky, gridy ani breakpointy.
     --------------------------------------------------------- */
  const mood=document.createElement('style');
  mood.id='kusima-mood-v1';
  mood.textContent=`
    :root{
      --joy-cream:#fffdf7;
      --joy-cream2:#fbf7ec;
      --joy-green:#1b5646;
      --joy-blue:#2f73b8;
      --joy-yellow:#f4cf55;
      --joy-mint:#edf7f0;
      --joy-sky:#eef6ff;
      --joy-sun:#fff8df;
    }

    body{
      background:
        radial-gradient(circle at 82% 4%, rgba(163,205,241,.18), transparent 28%),
        radial-gradient(circle at 18% 6%, rgba(244,207,85,.12), transparent 26%),
        linear-gradient(180deg,#fffefb 0%,#fffdf7 100%) !important;
    }

    .room-shell{
      background:
        radial-gradient(circle at 88% 8%, rgba(164,207,244,.14), transparent 24%),
        radial-gradient(circle at 10% 10%, rgba(246,210,99,.10), transparent 22%),
        linear-gradient(180deg,rgba(255,254,250,.98),rgba(252,249,240,.98)) !important;
    }

    /* Kvety vyrastajú z dolných rohov. Sú dekorácia, nikdy neblokujú kliknutia. */
    html body .room-shell::after{
      content:"" !important;
      display:block !important;
      position:fixed !important;
      inset:auto 0 0 0 !important;
      height:min(48vh,440px) !important;
      pointer-events:none !important;
      z-index:0 !important;
      opacity:.88 !important;
      background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22360%22%20height%3D%22420%22%20viewBox%3D%220%200%20360%20420%22%3E%0A%3Cdefs%3E%0A%20%20%3Cfilter%20id%3D%22s%22%3E%3CfeGaussianBlur%20stdDeviation%3D%220.25%22/%3E%3C/filter%3E%0A%3C/defs%3E%0A%3Cg%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%0A%20%20%3Cpath%20d%3D%22M42%20420C52%20336%2082%20264%20105%20185%22%20stroke%3D%22%23799b64%22%20stroke-width%3D%224%22/%3E%0A%20%20%3Cpath%20d%3D%22M78%20420C88%20330%20126%20252%20170%20152%22%20stroke%3D%22%237da46a%22%20stroke-width%3D%224%22/%3E%0A%20%20%3Cpath%20d%3D%22M122%20420C124%20338%20160%20276%20218%20214%22%20stroke%3D%22%236f9461%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%3Cpath%20d%3D%22M14%20420C18%20360%2030%20312%2054%20264%22%20stroke%3D%22%2390ad72%22%20stroke-width%3D%223%22/%3E%0A%20%20%3Cpath%20d%3D%22M155%20420C166%20352%20210%20300%20268%20258%22%20stroke%3D%22%2388a66d%22%20stroke-width%3D%223%22/%3E%0A%20%20%3Cg%20fill%3D%22%2396b978%22%20stroke%3D%22none%22%20opacity%3D%22.95%22%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2274%22%20cy%3D%22325%22%20rx%3D%229%22%20ry%3D%2224%22%20transform%3D%22rotate%28-40%2074%20325%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22105%22%20cy%3D%22278%22%20rx%3D%229%22%20ry%3D%2224%22%20transform%3D%22rotate%2840%20105%20278%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22139%22%20cy%3D%22303%22%20rx%3D%228%22%20ry%3D%2221%22%20transform%3D%22rotate%28-45%20139%20303%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22176%22%20cy%3D%22246%22%20rx%3D%229%22%20ry%3D%2225%22%20transform%3D%22rotate%2848%20176%20246%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22213%22%20cy%3D%22301%22%20rx%3D%228%22%20ry%3D%2221%22%20transform%3D%22rotate%28-45%20213%20301%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22247%22%20cy%3D%22280%22%20rx%3D%228%22%20ry%3D%2220%22%20transform%3D%22rotate%2840%20247%20280%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%2241%22%20cy%3D%22350%22%20rx%3D%228%22%20ry%3D%2220%22%20transform%3D%22rotate%28-35%2041%20350%29%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20stroke%3D%22none%22%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28103%20178%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23fffdf8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2231%22%20transform%3D%22rotate%280%29%20translate%280%20-23%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2231%22%20transform%3D%22rotate%2860%29%20translate%280%20-23%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2231%22%20transform%3D%22rotate%28120%29%20translate%280%20-23%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2231%22%20transform%3D%22rotate%28180%29%20translate%280%20-23%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2231%22%20transform%3D%22rotate%28240%29%20translate%280%20-23%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2231%22%20transform%3D%22rotate%28300%29%20translate%280%20-23%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%2213%22%20fill%3D%22%23f3c94e%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28171%20151%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%2379aee8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2223%22%20transform%3D%22rotate%280%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2223%22%20transform%3D%22rotate%2872%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2223%22%20transform%3D%22rotate%28144%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2223%22%20transform%3D%22rotate%28216%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2223%22%20transform%3D%22rotate%28288%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%229%22%20fill%3D%22%23e9b83f%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%2856%20259%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23fffdf8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2224%22%20transform%3D%22rotate%280%29%20translate%280%20-18%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2224%22%20transform%3D%22rotate%2872%29%20translate%280%20-18%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2224%22%20transform%3D%22rotate%28144%29%20translate%280%20-18%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2224%22%20transform%3D%22rotate%28216%29%20translate%280%20-18%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2224%22%20transform%3D%22rotate%28288%29%20translate%280%20-18%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%2210%22%20fill%3D%22%23e8bf45%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28219%20214%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23f2d36b%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%280%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%2860%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28120%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28180%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28240%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28300%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%228%22%20fill%3D%22%23d8a83e%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28266%20255%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%238fbce8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%225%22%20ry%3D%2216%22%20transform%3D%22rotate%280%29%20translate%280%20-12%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%225%22%20ry%3D%2216%22%20transform%3D%22rotate%2872%29%20translate%280%20-12%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%225%22%20ry%3D%2216%22%20transform%3D%22rotate%28144%29%20translate%280%20-12%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%225%22%20ry%3D%2216%22%20transform%3D%22rotate%28216%29%20translate%280%20-12%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%225%22%20ry%3D%2216%22%20transform%3D%22rotate%28288%29%20translate%280%20-12%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%227%22%20fill%3D%22%23e8b848%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%3C/g%3E%0A%3C/g%3E%0A%3C/svg%3E"),url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22340%22%20height%3D%22420%22%20viewBox%3D%220%200%20340%20420%22%3E%0A%3Cg%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%0A%20%20%3Cpath%20d%3D%22M308%20420C301%20342%20272%20279%20248%20215%22%20stroke%3D%22%23799b64%22%20stroke-width%3D%224%22/%3E%0A%20%20%3Cpath%20d%3D%22M267%20420C254%20338%20219%20278%20183%20201%22%20stroke%3D%22%237da46a%22%20stroke-width%3D%224%22/%3E%0A%20%20%3Cpath%20d%3D%22M225%20420C216%20349%20180%20300%20132%20253%22%20stroke%3D%22%236f9461%22%20stroke-width%3D%223.5%22/%3E%0A%20%20%3Cpath%20d%3D%22M329%20420C325%20368%20316%20332%20299%20295%22%20stroke%3D%22%2390ad72%22%20stroke-width%3D%223%22/%3E%0A%20%20%3Cg%20fill%3D%22%2396b978%22%20stroke%3D%22none%22%20opacity%3D%22.95%22%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22274%22%20cy%3D%22332%22%20rx%3D%229%22%20ry%3D%2224%22%20transform%3D%22rotate%2840%20274%20332%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22245%22%20cy%3D%22297%22%20rx%3D%229%22%20ry%3D%2224%22%20transform%3D%22rotate%28-40%20245%20297%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22213%22%20cy%3D%22315%22%20rx%3D%228%22%20ry%3D%2221%22%20transform%3D%22rotate%2845%20213%20315%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22179%22%20cy%3D%22273%22%20rx%3D%229%22%20ry%3D%2224%22%20transform%3D%22rotate%28-45%20179%20273%29%22/%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22305%22%20cy%3D%22350%22%20rx%3D%228%22%20ry%3D%2220%22%20transform%3D%22rotate%2835%20305%20350%29%22/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20stroke%3D%22none%22%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28250%20211%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23fffdf8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2230%22%20transform%3D%22rotate%280%29%20translate%280%20-22%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2230%22%20transform%3D%22rotate%2860%29%20translate%280%20-22%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2230%22%20transform%3D%22rotate%28120%29%20translate%280%20-22%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2230%22%20transform%3D%22rotate%28180%29%20translate%280%20-22%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2230%22%20transform%3D%22rotate%28240%29%20translate%280%20-22%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%2210%22%20ry%3D%2230%22%20transform%3D%22rotate%28300%29%20translate%280%20-22%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%2213%22%20fill%3D%22%23f3c94e%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28183%20202%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%2379aee8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2222%22%20transform%3D%22rotate%280%29%20translate%280%20-16%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2222%22%20transform%3D%22rotate%2872%29%20translate%280%20-16%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2222%22%20transform%3D%22rotate%28144%29%20translate%280%20-16%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2222%22%20transform%3D%22rotate%28216%29%20translate%280%20-16%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%227%22%20ry%3D%2222%22%20transform%3D%22rotate%28288%29%20translate%280%20-16%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%229%22%20fill%3D%22%23e9b83f%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28296%20292%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23f2d36b%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%280%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%2860%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28120%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28180%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28240%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%226%22%20ry%3D%2218%22%20transform%3D%22rotate%28300%29%20translate%280%20-14%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%228%22%20fill%3D%22%23d8a83e%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate%28131%20252%29%22%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23fffdf8%22%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2223%22%20transform%3D%22rotate%280%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2223%22%20transform%3D%22rotate%2872%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2223%22%20transform%3D%22rotate%28144%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2223%22%20transform%3D%22rotate%28216%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%20%20%3Cellipse%20rx%3D%228%22%20ry%3D%2223%22%20transform%3D%22rotate%28288%29%20translate%280%20-17%29%22/%3E%0A%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%20%20%3Ccircle%20r%3D%2210%22%20fill%3D%22%23e8bf45%22/%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%3C/g%3E%0A%3C/g%3E%0A%3C/svg%3E") !important;
      background-repeat:no-repeat,no-repeat !important;
      background-position:left bottom,right bottom !important;
      background-size:clamp(190px,23vw,360px) auto,clamp(180px,22vw,340px) auto !important;
      filter:drop-shadow(0 8px 18px rgba(76,104,66,.08)) !important;
    }

    .room-shell>*{position:relative;z-index:1}

    /* Na podstránkach kvety o trochu ustúpia obsahu. */
    .view:not(#home)::after{opacity:.58 !important}

    /* Svetlejšia, radostnejšia hlavička. */
    .topbar{
      background:rgba(255,254,249,.94) !important;
      border-bottom-color:rgba(215,226,218,.82) !important;
      box-shadow:0 5px 18px rgba(60,83,69,.035);
    }

    .logo-name{color:#10231d !important}
    .topbar .brand-sro,.topbar .brand-contact,.topbar .small{color:#5d6b65 !important}

    /* Titulka: štyri jemne odlišné nálady bez zmeny rozmerov. */
    #home .route{
      background:rgba(255,255,255,.91) !important;
      box-shadow:0 12px 32px rgba(37,72,58,.065) !important;
      transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,background .18s ease !important;
    }
    #home .route:nth-child(1){
      background:linear-gradient(145deg,rgba(243,251,244,.96),rgba(255,255,255,.93)) !important;
      border-color:#cfe5d4 !important;
      box-shadow:inset 0 3px 0 #97c999,0 12px 32px rgba(37,72,58,.065) !important;
    }
    #home .route:nth-child(2){
      background:linear-gradient(145deg,rgba(239,247,255,.97),rgba(255,255,255,.93)) !important;
      border-color:#cbdff1 !important;
      box-shadow:inset 0 3px 0 #7fb3e5,0 12px 32px rgba(37,72,58,.065) !important;
    }
    #home .route:nth-child(3){
      background:linear-gradient(145deg,rgba(255,249,227,.97),rgba(255,255,255,.93)) !important;
      border-color:#eadcab !important;
      box-shadow:inset 0 3px 0 #efcd61,0 12px 32px rgba(37,72,58,.065) !important;
    }
    #home .route:nth-child(4){
      background:linear-gradient(145deg,rgba(242,249,243,.97),rgba(255,255,255,.93)) !important;
      border-color:#d2e4d4 !important;
      box-shadow:inset 0 3px 0 #9bc79e,0 12px 32px rgba(37,72,58,.065) !important;
    }
    #home .route:hover{
      transform:translateY(-2px) !important;
      box-shadow:0 18px 42px rgba(37,72,58,.10) !important;
    }

    #home .route strong{color:#164f40 !important}
    #home .hero-copy .eyebrow{color:#1d5d4b !important}

    /* Fotografia nech je živšia, nie sivá. */
    #home .hero-photo>img{
      filter:saturate(1.04) contrast(.99) brightness(1.01) !important;
    }
    #home .hero-photo{
      box-shadow:0 20px 54px rgba(32,69,55,.13),0 0 0 1px rgba(255,255,255,.55) !important;
    }

    #home .hero-glass{
      background:rgba(255,255,252,.92) !important;
      border-color:rgba(255,255,255,.94) !important;
      box-shadow:0 12px 34px rgba(36,65,54,.09) !important;
    }

    /* Modrá mestská správa ostáva, len sviežejšia. */
    #home .svit-news-card{
      background:linear-gradient(135deg,#edf7ff 0%,#dceeff 100%) !important;
      border-color:#b8d7f1 !important;
      box-shadow:0 10px 28px rgba(47,115,184,.09) !important;
    }

    /* Jemnejšie plochy na podstránkach. */
    .choice,.answer,.supplier-card,.invoice-panel,.prospect-card,.story-card,.form-card{
      box-shadow:0 12px 34px rgba(33,70,56,.065) !important;
    }
    .choice,.answer,.supplier-card,.invoice-panel,.prospect-card,.form-card{
      background-color:rgba(255,255,252,.92) !important;
    }
    .choice:hover,.form-card:hover{
      border-color:#bfd8c8 !important;
      box-shadow:0 17px 38px rgba(33,70,56,.09) !important;
    }

    .mini-icon,.prospect-card .room-icon,.price-icon{
      background:#edf7f0 !important;
      color:#205746 !important;
    }
    .form-icon{
      background:#f4d45f !important;
      color:#173d34 !important;
    }

    .btn.primary{
      background:linear-gradient(135deg,#e7f4ea,#eef7f1) !important;
      border-color:#bdd7c5 !important;
      color:#184f40 !important;
    }

    /* Mobil: dekorácia menšia, aby kvety nezjedli obsah. */
    @media(max-width:720px){
      html body .room-shell::after{
        height:300px !important;
        opacity:.62 !important;
        background-size:190px auto,180px auto !important;
      }
      .view:not(#home)::after{opacity:.38 !important}
    }

    @media(max-width:480px){
      html body .room-shell::after{
        background-size:155px auto,145px auto !important;
        opacity:.50 !important;
      }
    }
  `;
  document.head.appendChild(mood);

  document.documentElement.dataset.kusimaLayout='v1';
  document.documentElement.dataset.kusimaMood='v1';
})();
