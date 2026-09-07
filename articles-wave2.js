(function(){
  'use strict';

  const month=(new Date()).getMonth()+1;

  const extraArticles=[
    {
      id:'evoting', base:26, months:[5,6,9,10,11], category:'HLASOVANIE · ELEKTRONICKY', updated:'09/2026',
      title:'Elektronické hlasovanie vlastníkov: ako funguje a kedy je platné',
      desc:'Čo musí vedieť správca overiť, čo musí potvrdiť a prečo obyčajný náhodný e-mail ešte nemusí byť hlasom.',
      html:`
        <p>Elektronické hlasovanie je dnes zákonnou súčasťou písomného hlasovania. Nie je to však voľné posielanie názorov e-mailom bez pravidiel. Hlas musí byť priradený ku konkrétnemu vlastníkovi a ku konkrétnej otázke tak, aby nevznikla pochybnosť, kto a ako hlasoval.</p>
        <h4>Kedy ho správca zabezpečí</h4>
        <p>Ak vlastník pri písomnom hlasovaní prejaví záujem hlasovať elektronicky, spoločenstvo alebo správca elektronické hlasovanie zabezpečí. Výnimkou je prípad, keď písomné hlasovanie vyhlásila štvrtina vlastníkov; vtedy zákon elektronické hlasovanie nepripúšťa.</p>
        <h4>Čo musí byť splnené</h4>
        <ul>
          <li>vlastník oznámi správcovi alebo spoločenstvu svoju elektronickú adresu,</li>
          <li>spôsob hlasovania musí umožniť jednoznačne overiť účasť vlastníka bez možnosti zámeny,</li>
          <li>z hlasu musí byť zrejmá a určitá vôľa pri každej konkrétnej otázke,</li>
          <li>hlasovanie a výsledky musia byť chránené pred neoprávneným zásahom,</li>
          <li>správca musí bez zbytočného odkladu potvrdiť prijatie elektronického hlasu rovnakým spôsobom.</li>
        </ul>
        <div class="tip-note"><b>Dôležité:</b> ak vlastník hlasuje elektronicky viackrát, platí jeho posledný elektronický hlas. Ak však hlasuje aj na papierovej hlasovacej listine, na elektronický hlas sa neprihliada.</div>
        <p>Starší text na našom webe uvádzal aj povinné zverejnenie osobitnej smernice správcu k elektronickému hlasovaniu. Takú všeobecnú povinnosť zákon č. 182/1993 Z. z. neustanovuje. Správca však musí mať proces nastavený tak, aby zákonné podmienky vedel preukázať.</p>`,
      sources:[['Zákon 182/1993 Z. z. · § 14 a § 14a','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/']]
    },
    {
      id:'water', base:24, months:[6,7,8], category:'VODA · POPRAD A SVIT', updated:'09/2026',
      title:'Prečo sa za vodu platí aj fixná zložka',
      desc:'Ako funguje dvojzložková cena vodného a stočného a čo dnes účtuje PVPS v našom regióne.',
      html:`
        <p>Vodné a stočné už nie je iba cena za každý spotrebovaný kubík. Dvojzložková cena pozostáva z <b>fixnej zložky za odberné miesto</b> a z <b>variabilnej zložky podľa skutočne odobratého množstva vody</b>.</p>
        <h4>Za čo je fixná zložka</h4>
        <p>ÚRSO vysvetľuje, že fixná časť pokrýva náklady spojené s existenciou a pripravenosťou odberného miesta – napríklad meradlo, jeho overovanie a opravy, odpočty a udržiavanie potrebnej kapacity siete. Preto určitý náklad vzniká aj pri veľmi nízkej spotrebe.</p>
        <h4>Aktuálne ceny PVPS</h4>
        <p>Podtatranská vodárenská prevádzková spoločnosť má od <b>15. júna 2026</b> novú regulovanú cenu. Variabilná zložka vodného je <b>2,2151 € s DPH za m³</b> a variabilná zložka stočného <b>1,9108 € s DPH za m³</b>. Fixná ročná zložka závisí od tarifnej skupiny odberného miesta T1 až T6; pri stočnom sa rozlišuje aj to, či sa odvádzajú zrážkové vody.</p>
        <div class="tip-note"><b>V bytovom dome:</b> vodárenská spoločnosť fakturuje odberné miesto domu podľa hlavného meradla. Náklady domu sa potom rozpočítajú medzi vlastníkov podľa platných pravidiel rozpočítania a údajov bytových vodomerov.</div>
        <p>Preto pri porovnávaní cien nestačí sledovať iba cenu jedného kubíka. Treba pozerať celý účet domu, tarifnú skupinu a obdobie, v ktorom bola konkrétna cena účinná.</p>`,
      sources:[
        ['ÚRSO · vysvetlenie dvojzložkovej ceny vody','https://www.urso.gov.sk/205993-sk/voda/'],
        ['PVPS · aktuálne ceny vodného a stočného','https://pvpsas.sk/cena-vody-dvojzlozkova/']
      ]
    },
    {
      id:'reconstruction2026', base:22, months:[3,4,5,9], category:'REKONŠTRUKCIA · STAVEBNÝ ZÁKON', updated:'09/2026',
      title:'Prerábka bytu po novom: čo treba riešiť pred začatím prác',
      desc:'Nie každá výmena obkladu potrebuje povolenie, ale zásah do nosných konštrukcií či spoločných častí už nemožno brať na ľahkú váhu.',
      html:`
        <p>Nový Stavebný zákon č. 25/2025 Z. z. sprísnil dôraz na bezpečnú prevádzku a údržbu stavieb. Starší článok na našom webe však niektoré dôsledky opísal príliš široko.</p>
        <h4>Čo zákon naozaj ukladá</h4>
        <p>§ 45 kladie povinnosť udržiavať stavbu v dobrom stavebno-technickom stave predovšetkým na <b>vlastníka stavby</b>. Pri bytovom dome sa k tomu pridávajú pravidlá správy spoločného majetku podľa zákona č. 182/1993 Z. z. Správca zabezpečuje výkon správy, ale nový stavebný zákon z neho automaticky nerobí osobného „odborného garanta“ za každú stavebnú konštrukciu domu.</p>
        <h4>Nie každá prerábka má rovnaký režim</h4>
        <p>Bežná údržba a výmena nepodstatných vnútorných prvkov môže byť bez ohlásenia. Iná situácia nastáva, ak práce môžu ovplyvniť stabilitu, protipožiarnu bezpečnosť, vzhľad domu, spoločné rozvody alebo iné spoločné časti domu. Vtedy treba vopred preveriť, aký postup vyžaduje stavebný zákon a aký súhlas vyžaduje bytový zákon.</p>
        <ul>
          <li>búranie alebo úprava nosnej konštrukcie – najprv odborné posúdenie a príslušný zákonný postup,</li>
          <li>zmena okien, balkóna, fasády alebo iného vonkajšieho vzhľadu – môže sa týkať spoločných častí a rozhodovania vlastníkov,</li>
          <li>zásah do spoločných rozvodov kúrenia, vody, plynu či elektriny – vždy vopred konzultovať so správcom,</li>
          <li>bežné vnútorné povrchy, obklady, podlahy a podobná údržba – spravidla podstatne jednoduchší režim.</li>
        </ul>
        <div class="tip-note"><b>Praktické pravidlo KUSIMA:</b> ak chcete búrať, meniť rozvody, radiátory, okná, balkón alebo čokoľvek, čo môže zasiahnuť do spoločnej časti domu, ozvite sa nám ešte pred objednaním prác.</div>
        <p>Staršie tvrdenie, že každý bytový dom musí mať automaticky nový „digitálny technický preukaz“ so záznamom každej úpravy, v zákone takto formulované nie je. Zákon však vyžaduje viesť a aktualizovať dokumentáciu o stavbe a doklady o kontrolách, revíziách, údržbe a opravách.</p>`,
      sources:[
        ['Stavebný zákon 25/2025 Z. z. · Slov-Lex','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2025/25/'],
        ['Zákon 182/1993 Z. z. · práva a povinnosti vlastníka','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/']
      ]
    },
    {
      id:'money', base:18, months:[1,11,12], category:'PENIAZE DOMU · BEZPEČNOSŤ', updated:'09/2026',
      title:'Komu patria peniaze na účte domu a ako ich zákon chráni',
      desc:'Účet domu nie je účtom správcu. Zákon presne oddeľuje peniaze vlastníkov od majetku správcovskej firmy.',
      html:`
        <p>Peniaze, ktoré vlastníci posielajú na služby a do fondu prevádzky, údržby a opráv, nie sú majetkom správcovskej spoločnosti. Zákon ich označuje ako <b>majetok vlastníkov</b> a prikazuje ich viesť oddelene od vlastných peňazí správcu.</p>
        <h4>Čo musí správca dodržať</h4>
        <ul>
          <li>viesť samostatné analytické účty osobitne za každý spravovaný dom,</li>
          <li>prostriedky vlastníkov viesť oddelene od účtov správcu v banke a osobitne pre každý dom,</li>
          <li>používať majetok vlastníkov iba na činnosti bezprostredne súvisiace so správou daného domu,</li>
          <li>nevyužiť tieto prostriedky vo vlastný prospech ani v prospech tretích osôb.</li>
        </ul>
        <p>Majiteľmi účtu domu zriadeného správcom sú podľa zákona vlastníci bytov a nebytových priestorov v dome. Majetok vlastníkov nie je súčasťou majetku správcu a nemôže sa stať ani súčasťou jeho konkurznej podstaty.</p>
        <div class="tip-note"><b>Čo z toho vyplýva:</b> správca má k účtu dispozičné oprávnenie na výkon správy, ale peniaze mu nepatria. Zákonnú ochranu majú dopĺňať praktické interné kontroly, bankové limity a transparentná kontrola hospodárenia.</div>
        <p>Na starom webe sme uvádzali, že zlyhanie jednotlivca je „technicky aj právne vylúčené“. Takú absolútnu garanciu nie je správne sľubovať. Presnejšie je povedať, že zákon vytvára veľmi jasné oddelenie majetku vlastníkov a správca má povinnosť nastaviť ďalšie kontrolné mechanizmy tak, aby riziko zneužitia čo najviac obmedzil.</p>`,
      sources:[['Zákon 182/1993 Z. z. · § 8','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/1993/182/']]
    }
  ];

  const relevance={
    billing:{base:20,months:[4,5,6]},
    heat:{base:25,months:[1,2,3,9,10,11,12]},
    rights:{base:30,months:[7,8]},
    evoting:{base:26,months:[5,6,9,10,11]},
    water:{base:24,months:[6,7,8]},
    reconstruction2026:{base:22,months:[3,4,5,9]},
    money:{base:18,months:[1,11,12]}
  };

  function score(id){
    const r=relevance[id]||{base:0,months:[]};
    return (r.months.includes(month)?100:0)+r.base;
  }

  function articleCard(a){
    return `<button class="tip-article-card" type="button" data-article="${a.id}"><span class="tip-meta">${a.category} · aktualizované ${a.updated}</span><strong>${a.title}</strong><span class="desc">${a.desc}</span><span class="tip-read">Čítať článok →</span></button>`;
  }

  function openExtraArticle(a){
    const modal=document.getElementById('kusimaTipModal');
    if(!modal) return;
    modal.querySelector('#tipModalKicker').textContent=a.category+' · aktualizované '+a.updated;
    modal.querySelector('#tipModalTitle').textContent=a.title;
    modal.querySelector('#tipModalBody').innerHTML=a.html;
    modal.querySelector('#tipModalSources').innerHTML=a.sources.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]} ↗</a>`).join('');
    modal.classList.add('open');
    document.body.style.overflow='hidden';
  }

  function init(){
    const grid=document.querySelector('#exploreView .tips-featured');
    if(!grid) return;

    extraArticles.forEach(a=>{
      if(grid.querySelector(`[data-article="${a.id}"]`)) return;
      const wrap=document.createElement('div');
      wrap.innerHTML=articleCard(a);
      const card=wrap.firstElementChild;
      card.addEventListener('click',()=>openExtraArticle(a));
      grid.appendChild(card);
    });

    [...grid.querySelectorAll('.tip-article-card[data-article]')]
      .sort((a,b)=>score(b.dataset.article)-score(a.dataset.article))
      .forEach(card=>grid.appendChild(card));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
