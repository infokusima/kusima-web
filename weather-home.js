(function(){
  'use strict';

  const row=document.querySelector('#home .hero-glass-small');
  if(!row || document.getElementById('kusimaWeather')) return;

  const weather=document.createElement('div');
  weather.id='kusimaWeather';
  weather.className='hero-weather';
  weather.innerHTML='<span class="hero-weather-fallback" aria-hidden="true">🌡️</span><span class="hero-weather-temp">— °C</span>';
  row.appendChild(weather);

  const style=document.createElement('style');
  style.textContent=`
    /* Kompaktnejsi kalendarovo-casovy panel, aby fotografia zostala dominantna. */
    #home .hero-glass{left:12px!important;right:12px!important;bottom:12px!important;padding:8px 14px!important;border-radius:16px!important}
    #home .hero-glass-top{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important}
    #home .hero-glass-top>div{display:flex!important;align-items:baseline!important;gap:8px!important;min-width:0!important}
    #home .hero-glass-label{display:none!important}
    #home .hero-date{font-size:18px!important;line-height:1!important;margin:0!important;white-space:nowrap!important}
    #home .hero-time{font-size:35px!important;line-height:.9!important;white-space:nowrap!important}
    #home .hero-glass-line{margin:5px 0 4px!important}
    #home .hero-glass-small{display:flex!important;align-items:center!important;gap:7px!important;width:100%!important;min-height:26px!important;font-size:12px!important}
    #home .hero-glass-small .nameday-label{font-size:12px!important}
    #home .hero-glass-small .nameday-name{font-size:21px!important}

    #home .hero-weather{margin-left:auto;display:flex;align-items:center;justify-content:flex-end;gap:4px;min-width:max-content;color:#173d34;font-weight:900;white-space:nowrap}
    #home .hero-weather img{width:33px;height:33px;object-fit:contain;display:block;margin:-5px 0}
    #home .hero-weather-temp{font-size:22px;line-height:1;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
    #home .hero-weather-fallback{font-size:20px;line-height:1;width:25px;text-align:center}

    @media(max-width:560px){
      #home .hero-glass{padding:8px 11px!important}
      #home .hero-glass-top{gap:7px!important}
      #home .hero-glass-top>div{display:block!important}
      #home .hero-date{font-size:16px!important;margin-top:2px!important}
      #home .hero-time{font-size:31px!important}
      #home .hero-glass-small .nameday-name{font-size:19px!important}
      #home .hero-weather img{width:30px;height:30px}
      #home .hero-weather-temp{font-size:20px}
    }
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
      weather.innerHTML=`<img src="${iconUrl}" alt="" aria-hidden="true"><span class="hero-weather-temp">${Math.round(data.temperature)} °C</span>`;
      weather.title='Svit · '+(data.description||'aktuálne počasie');
    })
    .catch(()=>{
      weather.innerHTML='<span class="hero-weather-fallback" aria-hidden="true">🌡️</span><span class="hero-weather-temp">— °C</span>';
      weather.title='Svit · počasie';
    });
})();
