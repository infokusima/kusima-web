(function(){
  'use strict';

  /* Po konsolidácii je celá pravá časť titulky už priamo v HTML.
     Tento skript iba načíta dnešné meniny – nemení rozloženie stránky. */
  const nameday=document.getElementById('namedayName');
  if(!nameday) return;

  fetch('data/nameday.json?ts='+Date.now(),{cache:'no-store'})
    .then(r=>r.ok?r.json():Promise.reject(new Error('nameday')))
    .then(data=>{
      if(data && data.name) nameday.textContent=data.name;
    })
    .catch(()=>{});
})();
