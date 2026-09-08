(function(){
  'use strict';

  /* Po konsolidácii je blok počasia už v HTML a jeho vzhľad v CSS.
     Skript iba vymení hodnotu a ikonku – bez zásahu do rozloženia. */
  const weather=document.getElementById('kusimaWeather');
  if(!weather) return;

  const iconCodeFor=(code,isDay)=>{
    const suffix=isDay!==0?'d':'n';
    if(code===0) return '01'+suffix;
    if(code===1) return '02'+suffix;
    if(code===2) return '03'+suffix;
    if(code===3) return '04'+suffix;
    if(code===45||code===48) return '50'+suffix;
    if([51,53,55,56,57].includes(code)) return '09'+suffix;
    if([61,63,65,66,67].includes(code)) return '10'+suffix;
    if([80,81,82].includes(code)) return '09'+suffix;
    if([71,73,75,77,85,86].includes(code)) return '13'+suffix;
    if([95,96,99].includes(code)) return '11'+suffix;
    return '02'+suffix;
  };

  fetch('data/weather-svit.json?v='+Date.now(),{cache:'no-store'})
    .then(r=>{if(!r.ok) throw new Error('weather');return r.json();})
    .then(data=>{
      if(data.status!=='ok' || typeof data.temperature!=='number') throw new Error('weather');
      const iconCode=iconCodeFor(Number(data.weather_code),Number(data.is_day));
      const iconUrl='https://openweathermap.org/img/wn/'+iconCode+'@2x.png';
      weather.innerHTML=`<img src="${iconUrl}" alt="" aria-hidden="true"><span class="hero-weather-temp">${Math.round(data.temperature)} °C</span>`;
      weather.title='Svit · '+(data.description||'aktuálne počasie');
    })
    .catch(()=>{
      weather.innerHTML='<span class="hero-weather-fallback" aria-hidden="true">🌡️</span><span class="hero-weather-temp">— °C</span>';
      weather.title='Svit · počasie';
    });
})();
