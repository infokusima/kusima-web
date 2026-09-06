(function(){
  const target=document.getElementById('svitNewsLink');
  if(!target) return;
  const fallback='https://www.svit.sk/mesto/aktuality/';

  fetch('data/svit-news.json?ts='+Date.now(),{cache:'no-store'})
    .then(r=>r.ok?r.json():Promise.reject(new Error('rss data')))
    .then(data=>{
      const item=data&&Array.isArray(data.items)?data.items[0]:null;
      if(!item||!item.title) return;
      target.href=item.link||fallback;
      target.textContent=item.title+' ↗';
    })
    .catch(()=>{
      target.href=fallback;
      target.textContent='Aktuality Mesta Svit ↗';
    });
})();
