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
  weather.innerHTML='<span class="hero-weather-icon" aria-hidden="true">•</span><span class="hero-weather-text">Svit · počasie</span>';
  right.appendChild(weather);

  const style=document.createElement('style');
  style.textContent=`
    #home .hero-time-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:3px}
    #home .hero-weather{display:flex;align-items:center;justify-content:flex-end;gap:5px;min-height:23px;color:#4e5f58;font-size:12px;font-weight:750;white-space:nowrap}
    #home .hero-weather-icon{font-size:18px;line-height:1;width:22px;text-align:center}
    #home .hero-weather img{width:24px;height:24px;object-fit:contain;display:block}
    @media(max-width:560px){#home .hero-weather{font-size:11px}.hero-time-wrap{align-items:flex-end}}
  `;
  document.head.appendChild(style);

  const iconFor=(code,isDay)=>{
    const d=isDay!==0;
    if(code===0) return d?'☀️':'🌙';
    if(code===1) return d?'🌤️':'☁️';
    if(code===2) return '⛅';
    if(code===3) return '☁️';
    if(code===45||code===48) return '🌫️';
    if([51,53,55,56,57].includes(code)) return '🌦️';
    if([61,63,65,66,67,80,81,82].includes(code)) return '🌧️';
    if([71,73,75,77,85,86].includes(code)) return '🌨️';
    if([95,96,99].includes(code)) return '⛈️';
    return '🌡️';
  };

  fetch('data/weather-svit.json?v='+Date.now(),{cache:'no-store'})
    .then(r=>{if(!r.ok) throw new Error('weather');return r.json();})
    .then(data=>{
      if(data.status!=='ok' || typeof data.temperature!=='number') throw new Error('weather');
      const icon=iconFor(Number(data.weather_code),Number(data.is_day));
      weather.innerHTML=`<span class="hero-weather-icon" aria-hidden="true">${icon}</span><span class="hero-weather-text">Svit · ${Math.round(data.temperature)} °C</span>`;
      weather.title=data.description||'Aktuálne počasie vo Svite';
    })
    .catch(()=>{
      weather.innerHTML='<span class="hero-weather-icon" aria-hidden="true">🌡️</span><span class="hero-weather-text">Svit · počasie</span>';
    });
})();
