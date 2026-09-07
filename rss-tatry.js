(function(){
  const target=document.getElementById('tatryNewsLink');
  if(!target) return;
  const fallback='https://visittatry.sk/';

  fetch('data/tatry-news.json?ts='+Date.now(),{cache:'no-store'})
    .then(r=>r.ok?r.json():Promise.reject(new Error('tatry data')))
    .then(data=>{
      const item=data&&Array.isArray(data.items)?data.items[0]:null;
      if(!item||!item.title){
        target.href=fallback;
        target.textContent='Novinky z Vysokých Tatier ↗';
        return;
      }
      target.href=item.link||fallback;
      target.textContent=item.title+' ↗';
    })
    .catch(()=>{
      target.href=fallback;
      target.textContent='Novinky z Vysokých Tatier ↗';
    });
})();
