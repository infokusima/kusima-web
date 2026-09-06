(function(){
  const target=document.querySelectorAll('#home .hero-glass-small span')[1];
  if(!target) return;
  const fallback='https://www.svit.sk/mesto/aktuality/';

  fetch('data/svit-news.json?ts='+Date.now(),{cache:'no-store'})
    .then(r=>r.ok?r.json():Promise.reject(new Error('rss data')))
    .then(data=>{
      const item=data&&Array.isArray(data.items)?data.items[0]:null;
      if(!item||!item.title) return;
      target.textContent='';
      const label=document.createElement('span');
      label.className='rss-city-label';
      label.textContent='Mesto Svit';
      const a=document.createElement('a');
      a.href=item.link||fallback;
      a.target='_blank';
      a.rel='noopener';
      a.textContent=item.title+' ↗';
      target.append(label,document.createTextNode(' · '),a);
    })
    .catch(()=>{});
})();
