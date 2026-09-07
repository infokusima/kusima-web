(function(){
  'use strict';

  const host=document.querySelector('#home .hero-glass-top');
  if(!host || document.getElementById('kusimaWeather')) return;

  const time=document.getElementById('clock');
  if(!time) return;

  const right=time.parentElement||host;
  if(right) right.classList.add('hero-time-wrap');

  const weather=document.createElement('div');
  weather.id='kusimaWeather';
  weather.className='hero-weather';
  weather.innerHTML='<span class="hero-weather-fallback" aria-hidden="true">🌡️</span><span class="hero-weather-text">Svit · počasie</span>';
  right.appendChild(weather);

  const style=document.createElement('style');
  style.textContent=`
    #home .hero-time-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:2px}
    #home .hero-weather{display:flex;align-items:center;justify-content:flex-end;gap:3px;min-height:25px;color:#4e5f58;font-size:12px;font-weight:780;white-space:nowrap}
    #home .hero-weather img{width:30px;height:30px;object-fit:contain;display:block;margin:-4px -1px -4px 0}
    #home .hero-weather-fallback{font-size:17px;line-height:1;width:24px;text-align:center}
    @media(max-width:560px){#home .hero-weather{font-size:11px}#home .hero-weather img{width:27px;height:27px}}
  `;
  document.head.appendChild(style);

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
      weather.innerHTML=`<img src="${iconUrl}" alt="" aria-hidden="true"><span class="hero-weather-text">Svit · ${Math.round(data.temperature)} °C</span>`;
      weather.title=data.description||'Aktuálne počasie vo Svite';
    })
    .catch(()=>{
      weather.innerHTML='<span class="hero-weather-fallback" aria-hidden="true">🌡️</span><span class="hero-weather-text">Svit · počasie</span>';
    });
})();
