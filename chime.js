(function(){
  'use strict';

  // KUSIMA – jemná generovaná cinkohra bez MP3.
  // Web Audio API: krátky úvodný motív + veľmi riedke zvončeky na pozadí.

  let ctx = null;
  let master = null;
  let ambienceTimer = null;
  let started = false;

  const NOTES = [
    587.33,  // D5
    659.25,  // E5
    739.99,  // F#5
    880.00,  // A5
    987.77,  // B5
    1174.66  // D6
  ];

  function makeContext(){
    if(ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return null;

    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.038;
    master.connect(ctx.destination);
    return ctx;
  }

  function bell(freq, when, strength){
    if(!ctx || !master) return;

    const out = ctx.createGain();
    const dry = ctx.createGain();
    const shimmer = ctx.createGain();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();

    const now = Math.max(when, ctx.currentTime + 0.01);
    const s = Math.max(0.35, Math.min(1, strength || 0.65));

    osc1.type = 'sine';
    osc2.type = 'sine';
    osc3.type = 'triangle';

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2.006, now);
    osc3.frequency.setValueAtTime(freq * 3.01, now);

    dry.gain.setValueAtTime(0.0001, now);
    dry.gain.exponentialRampToValueAtTime(0.72 * s, now + 0.018);
    dry.gain.exponentialRampToValueAtTime(0.0001, now + 2.7);

    shimmer.gain.setValueAtTime(0.0001, now);
    shimmer.gain.exponentialRampToValueAtTime(0.18 * s, now + 0.025);
    shimmer.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

    osc1.connect(dry);
    osc2.connect(shimmer);
    osc3.connect(shimmer);
    dry.connect(out);
    shimmer.connect(out);
    out.connect(master);

    osc1.start(now); osc2.start(now); osc3.start(now);
    osc1.stop(now + 2.8); osc2.stop(now + 2.2); osc3.stop(now + 1.7);
  }

  function opening(){
    const t = ctx.currentTime + 0.08;
    bell(587.33, t,       0.78); // D5
    bell(739.99, t+0.48,  0.65); // F#5
    bell(880.00, t+1.03,  0.72); // A5
    bell(1174.66,t+1.68,  0.48); // D6
  }

  function nextAmbience(){
    if(!started || !ctx) return;

    const delay = 4200 + Math.random() * 5200;
    ambienceTimer = setTimeout(function(){
      if(ctx.state === 'running'){
        const t = ctx.currentTime + 0.03;
        const n = NOTES[Math.floor(Math.random() * NOTES.length)];
        bell(n, t, 0.38 + Math.random() * 0.22);

        if(Math.random() < 0.34){
          const n2 = NOTES[Math.floor(Math.random() * NOTES.length)];
          bell(n2, t + 0.45 + Math.random() * 0.55, 0.28 + Math.random() * 0.16);
        }
      }
      nextAmbience();
    }, delay);
  }

  async function start(){
    if(started) return;
    const audio = makeContext();
    if(!audio) return;

    try{
      if(audio.state === 'suspended') await audio.resume();
      if(audio.state !== 'running') return;

      started = true;
      opening();
      nextAmbience();
    }catch(e){
      // Ak prehliadač prvý pokus nepovolí, ďalší pokus príde pri prvej interakcii.
    }
  }

  // Pokus o zvuk okamžite po načítaní.
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', start, {once:true});
  }else{
    start();
  }

  // Tichá poistka pre prehliadače, ktoré AudioContext najprv pozastavia.
  ['pointerdown','keydown','touchstart'].forEach(function(ev){
    window.addEventListener(ev, start, {once:true, passive:true});
  });
})();
