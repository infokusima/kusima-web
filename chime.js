(function(){
  'use strict';

  // KUSIMA – nočný zvukový režim 20:00–06:00 (Europe/Bratislava).
  // Svieža generovaná cinkohra bez MP3.

  let ctx = null;
  let master = null;
  let ambienceTimer = null;
  let started = false;
  let nightCheckTimer = null;

  const F = {
    D5:587.33, E5:659.25, Fs5:739.99, A5:880.00, B5:987.77,
    D6:1174.66, E6:1318.51, Fs6:1479.98, A6:1760.00, B6:1975.53,
    D7:2349.32
  };

  const MOTIFS = [
    [F.D6,F.Fs6,F.A6,F.Fs6],
    [F.A5,F.D6,F.E6,F.Fs6,F.D6],
    [F.B5,F.D6,F.Fs6,F.E6],
    [F.D6,F.E6,F.Fs6,F.A6,F.D7],
    [F.Fs5,F.A5,F.B5,F.D6,F.A5]
  ];

  function bratislavaHour(){
    try{
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone:'Europe/Bratislava',
        hour:'2-digit',
        hour12:false
      }).formatToParts(new Date());
      const hourPart = parts.find(p => p.type === 'hour');
      return hourPart ? Number(hourPart.value) % 24 : new Date().getHours();
    }catch(e){
      return new Date().getHours();
    }
  }

  function isNight(){
    const h = bratislavaHour();
    return h >= 20 || h < 6;
  }

  function makeContext(){
    if(ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return null;

    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.034;
    master.connect(ctx.destination);
    return ctx;
  }

  function makePan(pan){
    if(!ctx || !ctx.createStereoPanner) return null;
    const p = ctx.createStereoPanner();
    p.pan.value = Math.max(-1, Math.min(1, pan || 0));
    return p;
  }

  function bell(freq, when, strength, pan){
    if(!ctx || !master || !isNight()) return;

    const t = Math.max(when, ctx.currentTime + 0.01);
    const s = Math.max(0.2, Math.min(1, strength || 0.55));
    const out = ctx.createGain();
    const panner = makePan(pan);
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const o3 = ctx.createOscillator();

    o1.type = 'sine';
    o2.type = 'sine';
    o3.type = 'triangle';
    o1.frequency.setValueAtTime(freq, t);
    o2.frequency.setValueAtTime(freq * 2.004, t);
    o3.frequency.setValueAtTime(freq * 3.006, t);

    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(0.58 * s, t + 0.012);
    out.gain.exponentialRampToValueAtTime(0.0001, t + 1.75);

    o1.connect(out); o2.connect(out); o3.connect(out);
    if(panner){ out.connect(panner); panner.connect(master); }
    else out.connect(master);

    o1.start(t); o2.start(t); o3.start(t);
    o1.stop(t + 1.8); o2.stop(t + 1.35); o3.stop(t + 0.95);
  }

  function pluck(freq, when, strength, pan){
    if(!ctx || !master || !isNight()) return;

    const t = Math.max(when, ctx.currentTime + 0.01);
    const s = Math.max(0.2, Math.min(1, strength || 0.5));
    const out = ctx.createGain();
    const panner = makePan(pan);
    const osc = ctx.createOscillator();
    const overtone = ctx.createOscillator();

    osc.type = 'triangle';
    overtone.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    overtone.frequency.setValueAtTime(freq * 2.01, t);

    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(0.34 * s, t + 0.008);
    out.gain.exponentialRampToValueAtTime(0.0001, t + 0.62);

    osc.connect(out); overtone.connect(out);
    if(panner){ out.connect(panner); panner.connect(master); }
    else out.connect(master);

    osc.start(t); overtone.start(t);
    osc.stop(t + 0.68); overtone.stop(t + 0.48);
  }

  function opening(){
    if(!isNight()) return;
    const t = ctx.currentTime + 0.06;

    pluck(F.D5,  t,       0.72,-0.45);
    pluck(F.A5,  t+0.17,  0.62,-0.18);
    pluck(F.D6,  t+0.34,  0.72, 0.10);
    pluck(F.Fs6, t+0.51,  0.62, 0.38);
    bell (F.A6,  t+0.70,  0.54, 0.62);

    pluck(F.E6,  t+0.98,  0.50, 0.30);
    pluck(F.B5,  t+1.14,  0.46,-0.12);
    pluck(F.D6,  t+1.31,  0.56,-0.36);
    bell (F.Fs6, t+1.52,  0.48, 0.10);
    bell (F.D7,  t+1.86,  0.34, 0.50);
  }

  function playMotif(){
    if(!ctx || ctx.state !== 'running' || !isNight()) return;

    const motif = MOTIFS[Math.floor(Math.random() * MOTIFS.length)];
    const t = ctx.currentTime + 0.03;
    const step = 0.17 + Math.random() * 0.10;
    const leftToRight = Math.random() > 0.5;

    motif.forEach(function(freq, i){
      const pos = motif.length <= 1 ? 0 : i / (motif.length - 1);
      const pan = leftToRight ? (-0.58 + pos * 1.16) : (0.58 - pos * 1.16);
      pluck(freq, t + i * step, 0.31 + Math.random() * 0.15, pan);
    });

    if(Math.random() < 0.62){
      const last = motif[motif.length - 1];
      bell(last, t + motif.length * step + 0.08, 0.24 + Math.random() * 0.13, leftToRight ? 0.45 : -0.45);
    }
  }

  function nextAmbience(){
    if(!started || !ctx || !isNight()) return;

    const delay = 3200 + Math.random() * 3800;
    ambienceTimer = setTimeout(function(){
      if(isNight()){
        playMotif();
        nextAmbience();
      }else{
        stopNightMode();
      }
    }, delay);
  }

  function stopNightMode(){
    if(ambienceTimer){
      clearTimeout(ambienceTimer);
      ambienceTimer = null;
    }
    started = false;
    if(master && ctx && ctx.state === 'running'){
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setTargetAtTime(0.0001, t, 0.12);
    }
  }

  async function start(){
    if(started || !isNight()) return;
    const audio = makeContext();
    if(!audio) return;

    try{
      if(audio.state === 'suspended') await audio.resume();
      if(audio.state !== 'running' || !isNight()) return;

      if(master){
        const t = audio.currentTime;
        master.gain.cancelScheduledValues(t);
        master.gain.setTargetAtTime(0.034, t, 0.08);
      }

      started = true;
      opening();
      nextAmbience();
    }catch(e){}
  }

  function checkMode(){
    if(isNight()) start();
    else stopNightMode();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', checkMode, {once:true});
  }else{
    checkMode();
  }

  ['pointerdown','keydown','touchstart'].forEach(function(ev){
    window.addEventListener(ev, start, {once:true, passive:true});
  });

  // Ak ostane stránka otvorená cez 20:00 alebo 06:00, režim sa prepne sám.
  nightCheckTimer = setInterval(checkMode, 60000);
})();
