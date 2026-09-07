(function(){
  const home=document.getElementById('home');
  if(!home) return;

  const photo=home.querySelector('.hero-photo');
  let side=null;

  if(photo){
    if(photo.parentElement.classList.contains('hero-side')){
      side=photo.parentElement;
    }else{
      side=document.createElement('div');
      side.className='hero-side';
      photo.parentNode.insertBefore(side,photo);
      side.appendChild(photo);
    }
  }

  if(side && !document.getElementById('svitNewsLink')){
    const news=document.createElement('div');
    news.className='svit-news-card';
    news.innerHTML='<span class="city-dot">S</span><div class="city-copy"><span class="city-label">Mesto Svit · čerstvá správa</span><a id="svitNewsLink" href="https://www.svit.sk/mesto/aktuality/" target="_blank" rel="noopener">Aktuality Mesta Svit ↗</a></div>';
    side.appendChild(news);
  }

  if(side && !document.getElementById('tatryNewsLink')){
    const news=document.createElement('div');
    news.className='svit-news-card tatry-news-card';
    news.innerHTML='<span class="city-dot">T</span><div class="city-copy"><span class="city-label">Región Vysoké Tatry · čerstvá správa</span><a id="tatryNewsLink" href="https://visittatry.sk/" target="_blank" rel="noopener">Novinky z Vysokých Tatier ↗</a></div>';
    side.appendChild(news);
  }

  const small=home.querySelector('.hero-glass-small');
  if(small){
    small.innerHTML='<span class="nameday-label">Meniny:</span><strong class="nameday-name" id="namedayName">—</strong>';
  }

  fetch('data/nameday.json?ts='+Date.now(),{cache:'no-store'})
    .then(r=>r.ok?r.json():Promise.reject(new Error('nameday')))
    .then(data=>{
      const el=document.getElementById('namedayName');
      if(el && data && data.name) el.textContent=data.name;
    })
    .catch(()=>{});
})();
