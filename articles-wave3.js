(function(){
  'use strict';

  const month=(new Date()).getMonth()+1;

  const extraArticles=[
    {
      id:'heatingseason', base:60, months:[9,10], category:'VYKUROVACIA SEZÓNA · PRAKTICKY', updated:'09/2026',
      title:'Kedy sa v bytovke začne kúriť a prečo radiátor nemusí byť stále teplý',
      desc:'Vykurovacie obdobie sa začína v septembri, ale kúrenie sa nespúšťa podľa kalendára. Rozhoduje počasie a vnútorná teplota.',
      html:`
        <p>Prvý september neznamená, že radiátory musia byť automaticky horúce. Vyhláška určuje <b>vykurovacie obdobie spravidla od 1. septembra do 31. mája</b>, ale samotná dodávka tepla sa riadi vývojom vonkajšej teploty.</p>
        <h4>Kedy sa začne kúriť</h4>
        <p>Dodávateľ začne teplo na vykurovanie dodávať, ak priemerná denná vonkajšia teplota počas <b>dvoch po sebe nasledujúcich dní klesne pod 13 °C</b> a podľa predpovede nemožno očakávať, že nasledujúci deň vystúpi nad túto hranicu.</p>
        <h4>Kedy sa kúrenie môže dočasne prerušiť</h4>
        <p>Ak počas vykurovacieho obdobia priemerná denná teplota počas dvoch dní vystúpi nad 13 °C a neočakáva sa jej pokles, dodávateľ môže vykurovanie prerušiť. Po ochladení sa dodávka znovu obnoví.</p>
        <div class="tip-note"><b>Radiátor nie je teplomer miestnosti.</b> Moderná regulácia môže počas teplejšej časti dňa prívod tepla výrazne obmedziť. To, že je radiátor chvíľu vlažný alebo studený, ešte samo osebe neznamená poruchu.</div>
        <h4>Aká teplota má byť v byte</h4>
        <p>Vyhláška pracuje s výslednou vnútornou teplotou. Pre obytné miestnosti uvádza 21 °C, pre kuchyňu 20 °C a pre kúpeľňu 24 °C, s určenou toleranciou dodávky. Pri podozrení na problém je preto dôležitejšie zmerať teplotu v miestnosti než iba chytiť radiátor rukou.</p>
        <h4>Čo nám oznámiť, ak je vám zima</h4>
        <ul>
          <li>dom, vchod, byt a miestnosť,</li>
          <li>nameranú vnútornú teplotu a približný čas merania,</li>
          <li>či je problém na jednom radiátore alebo v celom byte,</li>
          <li>či podobný problém majú aj susedia nad alebo pod vami.</li>
        </ul>
        <p>Dodávateľ a odberateľ sa môžu zmluvne dohodnúť aj na vykurovaní mimo bežného vykurovacieho obdobia. V praxi však pri bytovom dome treba vždy posudzovať technické možnosti domu a podmienky dodávateľa tepla.</p>`,
      sources:[
        ['Vyhláška 152/2005 Z. z. · vykurovacie obdobie a teploty','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2005/152/'],
        ['Zákon 657/2004 Z. z. · tepelná energetika','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2004/657/']
      ]
    },
    {
      id:'remote2027', base:45, months:[10,11,12,1], category:'MERADLÁ · DIAĽKOVÝ ODPOČET 2027', updated:'09/2026',
      title:'Diaľkový odpočet od roku 2027: čo je povinné a čo si môžu vlastníci rozhodnúť',
      desc:'Jedna vec je spôsob rozpočítania a druhá zákonná povinnosť mať meradlá a diaľkový odpočet. Nie je to to isté.',
      html:`
        <p>Pri diaľkových odpočtoch sa často miešajú dve rozdielne otázky: <b>ako sa náklad rozpočíta medzi byty</b> a <b>aké meranie musí byť v dome technicky zabezpečené</b>. Vlastníci môžu o mnohých pravidlách rozhodovať, ale hlasovaním nemôžu zrušiť povinnosť, ktorú priamo ukladá zákon.</p>
        <h4>Vykurovanie</h4>
        <p>Pri budove s ústredným teplovodným vykurovaním a celkovou podlahovou plochou nad 500 m² zákon o tepelnej energetike ukladá zabezpečiť meranie u konečných spotrebiteľov – určenými meradlami, pomerovými rozdeľovačmi alebo zákonom pripusteným alternatívnym nákladovo efektívnym spôsobom. Zákon o energetickej efektívnosti zároveň vyžaduje pri takýchto meradlách a pomerových rozdeľovačoch funkciu diaľkového odpočtu; výnimka je možná, ak vlastník budovy preukáže, že diaľkový odpočet nie je nákladovo primeraný alebo technicky možný.</p>
        <h4>Teplá voda</h4>
        <p>Pri bytových meradlách teplej vody zákon č. 657/2004 Z. z. výslovne vyžaduje určené meradlá s diaľkovým odpočtom. Pre existujúce meradlá je stanovený prechod na diaľkový odpočet do <b>1. januára 2027</b>, opäť s výnimkou pre preukázanú technickú nemožnosť alebo nákladovú neprimeranosť.</p>
        <h4>A čo studená voda?</h4>
        <p>Všeobecná povinnosť „od 1. januára 2027 musia byť na diaľkový odpočet všetky bytové vodomery“ nie je presná. Uvedená povinnosť sa viaže na meranie tepla a teplej vody. Pri bytových vodomeroch <b>studenej vody</b> tieto ustanovenia samy osebe diaľkový odpočet od roku 2027 neprikazujú; spôsob odpočtu môže vyplývať z iných pravidiel domu, zmluvy alebo zvoleného systému merania.</p>
        <h4>Môžu vlastníci rozpočítať vykurovanie iba podľa plochy?</h4>
        <p>Ak sú v dome zapojené meradlá alebo pomerové rozdeľovače, vyhláška č. 503/2022 Z. z. určuje štandardnú základnú zložku 60 %. Vlastníci môžu jej podiel zmeniť, nesmie byť však nižší ako 30 %. Vyhláška hornú hranicu základnej zložky výslovne neurčuje, takže <b>100 % základná zložka – teda prakticky rozpočítanie podľa plochy – sa z textu vyhlášky javí ako prípustná</b>. To však neznamená, že tým zanikne zákonná povinnosť mať a prevádzkovať meradlá či diaľkový odpočet tam, kde ju zákon ukladá.</p>
        <div class="tip-note"><b>Jednoducho:</b> aj 100 % vlastníkov môže rozhodnúť o zákonom dovolenej variante rozpočítania, ale 100 % vlastníkov nemôže hlasovaním vytvoriť výnimku zo zákona. Výnimku treba opierať o konkrétne ustanovenie – napríklad preukázanú technickú nemožnosť alebo nákladovú neprimeranosť.</div>
        <p>Pre menšie domy je dôležitá ešte jedna hranica: povinnosti podľa § 18 ods. 4 písm. a) až c) zákona o tepelnej energetike nevznikajú, ak má budova celkovú podlahovú plochu menšiu ako 500 m². Preto sa každý dom musí posúdiť podľa svojej technickej situácie, nie iba podľa všeobecného sloganu „od roku 2027 všetko na diaľku“.</p>`,
      sources:[
        ['Zákon 657/2004 Z. z. · § 17 a § 18','https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2004/657/'],
        ['Zákon 321/2014 Z. z. · energetická efektívnosť','https://www.slov-lex.sk/ezbierky-fe/pravne-predpisy/SK/ZZ/2014/321/'],
        ['Vyhláška 503/2022 Z. z. · rozpočítavanie','https://www.slov-lex.sk/ezbierky-fe/pravne-predpisy/SK/ZZ/2022/503/']
      ]
    }
  ];

  const relevance={
    billing:{base:20,months:[4,5,6]},
    heat:{base:25,months:[1,2,3,9,10,11,12]},
    rights:{base:30,months:[7,8]},
    evoting:{base:26,months:[5,6,9,10,11]},
    water:{base:24,months:[6,7,8]},
    reconstruction2026:{base:22,months:[3,4,5,9]},
    money:{base:18,months:[1,11,12]},
    heatingseason:{base:60,months:[9,10]},
    remote2027:{base:45,months:[10,11,12,1]}
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

  function openRelatedArticle(id){
    const own=extraArticles.find(a=>a.id===id);
    if(own){openExtraArticle(own);return;}
    const card=document.querySelector(`#exploreView [data-article="${id}"]`);
    if(card) card.click();
  }

  const related={
    billing:[['billing','Ako čítať ročné vyúčtovanie']],
    billcomplaint:[['billing','Ako čítať ročné vyúčtovanie']],
    heat:[
      ['heatingseason','Kedy sa v bytovke začne kúriť'],
      ['heat','Za teplo musí platiť aj ten, kto má zavretý radiátor'],
      ['remote2027','Diaľkový odpočet od roku 2027'],
      ['water','Prečo sa za vodu platí aj fixná zložka']
    ],
    myreconstruction:[['reconstruction2026','Prerábka bytu po novom']],
    reconstruction:[['reconstruction2026','Prerábka bytu po novom']],
    voting:[['evoting','Elektronické hlasovanie vlastníkov']],
    votecomplaint:[['evoting','Elektronické hlasovanie vlastníkov']]
  };

  function injectRelated(id){
    const items=related[id];
    if(!items) return;
    const content=document.getElementById('content');
    if(!content || content.querySelector('.related-articles')) return;
    const box=document.createElement('div');
    box.className='related-articles';
    box.innerHTML=`<span class="related-label">Súvisiace články KUSIMA</span><div class="related-links">${items.map(x=>`<button type="button" data-related-article="${x[0]}">${x[1]} →</button>`).join('')}</div>`;
    content.appendChild(box);
  }

  function init(){
    const grid=document.querySelector('#exploreView .tips-featured');
    if(grid){
      extraArticles.forEach(a=>{
        if(grid.querySelector(`[data-article="${a.id}"]`)) return;
        const wrap=document.createElement('div');
        wrap.innerHTML=articleCard(a);
        const card=wrap.firstElementChild;
        card.addEventListener('click',()=>openExtraArticle(a));
        grid.appendChild(card);
      });

      [...grid.children]
        .sort((a,b)=>score(b.dataset.article)-score(a.dataset.article))
        .forEach(card=>grid.appendChild(card));
    }

    if(typeof renderNode==='function' && !window.__kusimaRelatedArticlesWrapped){
      const previousRender=renderNode;
      renderNode=function(id,push=true){
        const result=previousRender(id,push);
        setTimeout(()=>injectRelated(id),0);
        return result;
      };
      window.__kusimaRelatedArticlesWrapped=true;
    }

    const current=document.getElementById('dialogView');
    if(current && current.dataset.node) injectRelated(current.dataset.node);
  }

  document.addEventListener('click',e=>{
    const btn=e.target.closest('[data-related-article]');
    if(btn){
      e.preventDefault();
      openRelatedArticle(btn.dataset.relatedArticle);
    }
  });

  if(!document.getElementById('articles-wave3-style')){
    const style=document.createElement('style');
    style.id='articles-wave3-style';
    style.textContent=`
      .related-articles{margin-top:20px;padding:15px 17px;border:1px solid #d9e4de;border-radius:17px;background:rgba(255,255,255,.88)}
      .related-label{display:block;margin-bottom:9px;font-size:10.5px;font-weight:900;letter-spacing:.11em;text-transform:uppercase;color:#68756f}
      .related-links{display:flex;gap:8px;flex-wrap:wrap}
      .related-links button{border:1px solid #c8d8d0;background:#f8fbf9;color:#214d40;border-radius:999px;padding:8px 12px;font-size:13px;font-weight:800;cursor:pointer}
      .related-links button:hover{background:#eef6f2}
    `;
    document.head.appendChild(style);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
