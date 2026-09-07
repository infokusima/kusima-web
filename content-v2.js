(function(){
  'use strict';

  const css=document.createElement('link');
  css.rel='stylesheet';css.href='content-v2.css?v=1';document.head.appendChild(css);

  // DÔLEŽITÉ: poradie článkov sa mení automaticky podľa mesiaca v roku.
  // Máj/jún zvýrazní vyúčtovanie, vykurovacie mesiace teplo, leto práva vlastníka.
  const monthNames=['januári','februári','marci','apríli','máji','júni','júli','auguste','septembri','októbri','novembri','decembri'];
  const month=(new Date()).getMonth()+1;

  const articles=[
    {
      id:'billing', base:20, months:[4,5,6], category:'VYÚČTOVANIE · PENIAZE', updated:'09/2026',
      title:'Ako čítať ročné vyúčtovanie bez zbytočnej paniky',
      desc:'Čo skontrolovať ako prvé, kde hľadať spotreby a čo urobiť, ak vám niečo nesedí.',
      html:`
        <p>Ročné vyúčtovanie nie je len číslo „preplatok alebo nedoplatok“. Je to kontrola toho, koľko ste počas roka zaplatili na zálohách a aké skutočné náklady boli na váš byt rozpočítané.</p>
        <h4>Čo skontrolovať ako prvé</h4>
        <ul>
          <li><b>Uhradené zálohy</b> – či sedia s vašimi reálnymi platbami počas roka.</li>
          <li><b>Stavy meradiel</b> – najmä voda a teplo; porovnajte počiatočný a konečný stav, ak sú vo vyúčtovaní uvedené.</li>
          <li><b>Spôsob rozpočítania</b> – niektoré položky sa delia podľa spotreby, iné podľa plochy, počtu osôb alebo spoluvlastníckeho podielu.</li>
          <li><b>Preplatok alebo nedoplatok</b> – je výsledkom rozdielu medzi zaplatenými zálohami a skutočnými nákladmi, nie známkou toho, či bol rok „drahý“ alebo „lacný“.</li>
        </ul>
        <div class="tip-note"><b>Termín správcu:</b> správca je povinný najneskôr do 31. mája nasledujúceho roka predložiť správu o činnosti za dom a vykonať vyúčtovanie.</div>
        <h4>Ak niečo nesedí</h4>
        <p>Napíšte nám konkrétne, ktorú položku namietate a prečo. Najlepšie je uviesť dom, byt, názov položky a číslo alebo údaj, ktorý považujete za nesprávny. Zákon č. 182/1993 Z. z. neurčuje jednu všeobecnú 14-dňovú reklamačnú lehotu pre každé vyúčtovanie; osobitná lehota môže vyplývať zo zmluvy alebo pravidiel konkrétneho domu.</p>
        <p>Fond prevádzky, údržby a opráv sledujte oddelene od bežných služieb. Je to majetok vlastníkov domu určený na prevádzku, údržbu, opravy, obnovu a ďalšie zákonné účely.</p>`,
      sources:[['Zákon 182/1993 Z. z. · Slov-Lex','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/']]
    },
    {
      id:'heat', base:25, months:[1,2,3,9,10,11,12], category:'TEPLO · ENERGIE', updated:'09/2026',
      title:'Prečo sused, ktorý skoro nekúri, neplatí za teplo nulu',
      desc:'Jednoduché vysvetlenie základnej a spotrebnej zložky a ochranného pravidla 2,85.',
      html:`
        <p>Byt v bytovom dome nie je samostatná termoska. Teplo prechádza stenami, stropmi, rozvodmi aj spoločnými konštrukciami. Preto sa náklady na vykurovanie nerozdeľujú iba podľa čísla na pomerovom rozdeľovači alebo merači.</p>
        <h4>Základná a spotrebná zložka</h4>
        <p>Pri bytoch s pomerovými rozdeľovačmi alebo určenými meradlami je podľa aktuálnej vyhlášky základná zložka štandardne <b>60 %</b>. Vlastníci môžu rozhodnúť o inom podiele, ale základná zložka nemôže byť nižšia ako <b>30 %</b>. Zvyšok tvorí spotrebná zložka.</p>
        <h4>Načo je hranica 2,85</h4>
        <p>Vyhláška obsahuje kontrolný mechanizmus: ak je pomer najvyššieho a najnižšieho špecifického nákladu na vykurovanie v dome vyšší ako <b>2,85</b>, základná zložka sa upraví tak, aby bol rozdiel medzi bytmi primeranejší.</p>
        <div class="tip-note"><b>Prakticky:</b> úplne zavrieť radiátory nemusí znamenať nulový účet. Časť tepla dostávate nepriamo z domu a časť nákladov sa preto rozpočítava cez základnú zložku.</div>
        <p>Pri konkrétnom vyúčtovaní vždy treba pozrieť pravidlá platné pre daný dom, typ merania a rozhodnutia vlastníkov. V roku 2026 sa zároveň menilo znenie vyhlášky po náleze Ústavného súdu, preto na staršie internetové články netreba automaticky spoliehať.</p>`,
      sources:[['Vyhláška 503/2022 Z. z. · Slov-Lex','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2022/503/']]
    },
    {
      id:'rights', base:30, months:[7,8], category:'VLASTNÍK · PRÁVA A POVINNOSTI', updated:'09/2026',
      title:'10 vecí, ktoré by mal vedieť každý vlastník bytu',
      desc:'Hlasovanie, dokumenty, spoločné časti domu, platby aj lehoty – bez právnickej reči.',
      html:`
        <p>Vlastník bytu nie je iba zákazník správcu. Je zároveň spoluvlastníkom spoločných častí a zariadení domu a má právo aj povinnosť podieľať sa na jeho správe.</p>
        <h4>Najdôležitejšie v skratke</h4>
        <ul>
          <li>Máte právo zúčastňovať sa na správe domu a hlasovaním rozhodovať o spoločných veciach.</li>
          <li>Platné rozhodnutia vlastníkov sú záväzné aj pre tých, ktorí nehlasovali alebo hlasovali proti.</li>
          <li>Výsledok schôdze alebo písomného hlasovania sa zverejňuje spôsobom v dome obvyklým.</li>
          <li>Prehlasovaný vlastník sa môže obrátiť na súd do <b>30 dní od oznámenia výsledku hlasovania</b>; ak sa o výsledku nemohol dozvedieť, najneskôr do troch mesiacov od oznámenia výsledku.</li>
          <li>Máte povinnosť riadne a včas platiť preddavky do fondu aj úhrady za služby.</li>
          <li>Pri zásahu, ktorý môže ovplyvniť spoločné časti, rozvody alebo bezpečnosť domu, treba postup vopred konzultovať.</li>
          <li>Správca hospodári s peniazmi vlastníkov a musí uprednostňovať ich záujmy pred vlastnými.</li>
          <li>Pri obstarávaní má správca dojednávať čo najvýhodnejšie podmienky v prospech vlastníkov.</li>
          <li>O dôležitých investíciách, úveroch a zásadných zmenách rozhodujú vlastníci hlasovaním podľa zákonných kvór.</li>
          <li>Keď si nie ste istí, pýtajte sa skôr, než urobíte nevratný zásah alebo podpíšete záväzok za dom.</li>
        </ul>
        <div class="tip-note"><b>Starý údaj 15 dní už neplatí.</b> Lehota pre prehlasovaného vlastníka je dnes 30 dní od oznámenia výsledku hlasovania.</div>`,
      sources:[['Zákon 182/1993 Z. z. · Slov-Lex','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/']]
    }
  ];

  function score(a){return (a.months.includes(month)?100:0)+a.base;}
  const ordered=articles.slice().sort((a,b)=>score(b)-score(a));

  function articleCard(a){return `<button class="tip-article-card" type="button" data-article="${a.id}"><span class="tip-meta">${a.category} · aktualizované ${a.updated}</span><strong>${a.title}</strong><span class="desc">${a.desc}</span><span class="tip-read">Čítať článok →</span></button>`;}

  const explore=document.getElementById('exploreView');
  if(explore){
    const head=explore.querySelector('.explore-head');
    if(head && !explore.querySelector('.tips-library')){
      const library=document.createElement('section');
      library.className='tips-library';
      library.innerHTML=`<div class="tips-library-head"><div><span class="tips-season">Odporúčame v ${monthNames[month-1]}</span><h3>Články KUSIMA</h3></div><p>Aktualizované praktické texty pre vlastníkov. Poradie sa automaticky mení každý mesiac podľa toho, čo je práve počas roka najaktuálnejšie.</p></div><div class="tips-featured">${ordered.map(articleCard).join('')}</div>`;
      head.insertAdjacentElement('afterend',library);
    }
  }

  const modal=document.createElement('div');
  modal.className='tip-modal';modal.id='kusimaTipModal';
  modal.innerHTML='<article class="tip-modal-card" role="dialog" aria-modal="true"><div class="tip-modal-top"><div><span class="tip-modal-kicker" id="tipModalKicker"></span><h3 id="tipModalTitle"></h3></div><button class="tip-close" type="button" aria-label="Zavrieť">×</button></div><div class="tip-body" id="tipModalBody"></div><div class="tip-sources" id="tipModalSources"></div></article>';
  document.body.appendChild(modal);

  function openArticle(id){
    const a=articles.find(x=>x.id===id);if(!a)return;
    modal.querySelector('#tipModalKicker').textContent=a.category+' · aktualizované '+a.updated;
    modal.querySelector('#tipModalTitle').textContent=a.title;
    modal.querySelector('#tipModalBody').innerHTML=a.html;
    modal.querySelector('#tipModalSources').innerHTML=a.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]} ↗</a>`).join('');
    modal.classList.add('open');document.body.style.overflow='hidden';
  }
  function closeArticle(){modal.classList.remove('open');document.body.style.overflow='';}
  document.addEventListener('click',e=>{
    const card=e.target.closest('[data-article]');if(card)openArticle(card.dataset.article);
    if(e.target.closest('.tip-close')||e.target===modal)closeArticle();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeArticle();});

  /* Plán údržby a opráv 2027 – verejná všeobecná časť.
     Zákon vyžaduje predloženie vlastníkom do 30.11.; konkrétny plán musí byť prispôsobený každému domu. */
  if(typeof nodes!=='undefined'){
    nodes.maintenance2027={type:'answer',kicker:'POVINNÁ INFORMÁCIA SPRÁVCU',title:'Plán údržby a opráv na rok 2027',html:`
      <div class="plan-2027">
        <p class="plan-lead">Tento dokument je <b>všeobecnou časťou plánu údržby a opráv na rok 2027</b> pre bytové domy v správe KUSIMA, s.r.o. Jeho cieľom je určiť spoločný rámec pravidelnej údržby, kontrol, opráv a priorít počas roka.</p>
        <div class="plan-warning"><b>Dôležité:</b> zákon č. 182/1993 Z. z. vyžaduje, aby správca každoročne do 30. novembra vlastníkom predložil plán opráv na nasledujúci rok. Plán musí zohľadniť stav a opotrebenie konkrétneho domu a obsahovať aj návrh tvorby fondu prevádzky, údržby a opráv. Preto táto verejná všeobecná časť nenahrádza individuálnu časť plánu konkrétneho domu.</div>
        <h4>Činnosti plánované priebežne podľa potreby domu</h4>
        <div class="plan-grid">
          <div class="plan-box"><b>Strecha a obvodový plášť</b><span>Kontrola zatekania, oplechovania, vpustov a žľabov, fasády, sokla, škár a poškodení, ktoré môžu zhoršovať technický stav domu.</span></div>
          <div class="plan-box"><b>Spoločné priestory</b><span>Vstupy, dvere, zámky, schodiská, zábradlia, osvetlenie, pivnice, povrchy a ďalšie bežné opravy spoločných častí.</span></div>
          <div class="plan-box"><b>Rozvody a technické zariadenia</b><span>Spoločné rozvody vody, kanalizácie, vykurovania, elektriny a plynu podľa vybavenia domu; odstraňovanie porúch a prevencia havárií.</span></div>
          <div class="plan-box"><b>Povinné kontroly a revízie</b><span>Odborné prehliadky, skúšky a kontroly technických zariadení v termínoch vyplývajúcich z právnych predpisov a technickej dokumentácie konkrétneho domu.</span></div>
          <div class="plan-box"><b>Balkóny, loggie a vonkajšie prvky</b><span>Sledovanie porúch povrchov, zábradlí, kotvenia, odvodnenia a bezpečnosti podľa technického stavu.</span></div>
          <div class="plan-box"><b>Havárie a neodkladné zásahy</b><span>Bezodkladné riešenie stavov, pri ktorých hrozí škoda na majetku, prerušenie prevádzky alebo ohrozenie bezpečnosti osôb.</span></div>
        </div>
        <h4>Poradie priorít v roku 2027</h4>
        <div class="plan-priority">
          <div><b>1. Bezpečnosť a havárie</b> – zásahy, ktoré nemožno odkladať.</div>
          <div><b>2. Zákonné a technické povinnosti</b> – revízie, kontroly a odstránenie zistených závad.</div>
          <div><b>3. Zastavenie ďalšieho poškodzovania</b> – napríklad zatekanie, korózia, poruchy rozvodov alebo degradácia konštrukcií.</div>
          <div><b>4. Schválené opravy a obnova</b> – projekty odsúhlasené vlastníkmi podľa finančných možností domu.</div>
          <div><b>5. Modernizácia a úspory</b> – opatrenia zvyšujúce hospodárnosť, komfort a hodnotu domu.</div>
        </div>
        <h4>Financovanie</h4>
        <p>Údržba a opravy sa financujú najmä z fondu prevádzky, údržby a opráv konkrétneho domu. Pri každom dome sa osobitne posúdi stav fondu, očakávané príjmy, už schválené záväzky a predpokladané náklady. <b>Výšku tvorby fondu preto nemožno určiť jednou spoločnou sumou pre všetky domy.</b></p>
        <h4>Individuálna časť pre každý dom</h4>
        <p>Najneskôr do 30. novembra 2026 sa k tomuto rámcu pre každý spravovaný dom doplní konkrétny zoznam známych potrieb a opráv, ich priorita, orientačný finančný rámec podľa dostupných údajov a návrh výšky tvorby fondu na rok 2027.</p>
        <div class="notice"><strong>Aktualizácia počas roka:</strong> plán sa môže meniť podľa technického stavu domu, výsledkov kontrol, havárií, cien prác a rozhodnutí vlastníkov. Schválené rozhodnutia vlastníkov majú pri realizácii prednosť.</div>
        <div class="actions"><a class="btn" target="_blank" rel="noopener" href="https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/">Zákon 182/1993 Z. z. · § 8b ↗</a></div>
      </div>`,src:['law182']};
  }

  function injectRequiredDoc(){
    const view=document.getElementById('dialogView');
    const content=document.getElementById('content');
    if(!view||!content||view.dataset.node!=='client'||content.querySelector('.client-required-doc'))return;
    const options=content.querySelector('.options');if(!options)return;
    const box=document.createElement('div');
    box.className='client-required-doc';
    box.innerHTML='<div><small>Povinné informácie správcu</small><strong>Plán údržby a opráv na rok 2027 · všeobecná časť</strong></div><button type="button">Otvoriť plán →</button>';
    box.querySelector('button').addEventListener('click',()=>renderNode('maintenance2027'));
    options.insertAdjacentElement('afterend',box);
  }

  if(typeof renderNode==='function'){
    const previousRender=renderNode;
    renderNode=function(id,push=true){
      const result=previousRender(id,push);
      if(id==='client')setTimeout(injectRequiredDoc,0);
      if(id==='maintenance2027'){
        const view=document.getElementById('dialogView');if(view){view.dataset.room='office';view.dataset.node=id;}
        const assoc=document.getElementById('roomAssociation');if(assoc)assoc.textContent='· naša pracovňa';
        const cap=document.querySelector('#content .room-caption');if(cap)cap.innerHTML='<strong>Naša pracovňa</strong><small>plány, pravidlá a povinné informácie</small>';
      }
      return result;
    };
  }
})();
