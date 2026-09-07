(function(){
  'use strict';

  // KUSIMA – krátka uvítacia cinkohra pri otvorení stránky.
  // Naplánuje sa iba raz. Ak prehliadač povolí autoplay, zaznie hneď;
  // ak ho zablokuje, zaznie pri prvom kliknutí/dotyku/klávese.

  let ctx=null;
  let master=null;
  let scheduled=false;
  let resumed=false;

  const F={D5:587.33,A5:880.00,B5:987.77,D6:1174.66,E6:1318.51,Fs6:1479.98,A6:1760.00,D7:2349.32};

  function makeContext(){
    if(ctx) return ctx;
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC) return null;
    ctx=new AC();
    master=ctx.createGain();
    master.gain.value=0.034;
    master.connect(ctx.destination);
    return ctx;
  }

  function panNode(value){
    if(!ctx||!ctx.createStereoPanner) return null;
    const p=ctx.createStereoPanner();
    p.pan.value=Math.max(-1,Math.min(1,value||0));
    return p;
  }

  function note(freq,when,strength,pan,bell){
    if(!ctx||!master) return;
    const t=Math.max(when,ctx.currentTime+0.01);
    const gain=ctx.createGain();
    const panner=panNode(pan);
    const o1=ctx.createOscillator();
    const o2=ctx.createOscillator();

    o1.type=bell?'sine':'triangle';
    o2.type='sine';
    o1.frequency.setValueAtTime(freq,t);
    o2.frequency.setValueAtTime(freq*(bell?2.004:2.01),t);

    gain.gain.setValueAtTime(0.0001,t);
    gain.gain.exponentialRampToValueAtTime((bell?0.43:0.31)*strength,t+0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001,t+(bell?1.35:0.58));

    o1.connect(gain);o2.connect(gain);
    if(panner){gain.connect(panner);panner.connect(master);}else gain.connect(master);
    o1.start(t);o2.start(t);
    o1.stop(t+(bell?1.42:0.64));o2.stop(t+(bell?1.10:0.48));
  }

  function scheduleWelcome(){
    if(scheduled) return;
    const audio=makeContext();
    if(!audio) return;
    scheduled=true;

    // Pri suspendovanom AudioContext currentTime stojí, takže tóny zostanú
    // pripravené a odohrajú sa hneď po povolení zvuku.
    const t=audio.currentTime+0.06;
    note(F.D5,t,0.78,-0.45,false);
    note(F.A5,t+0.17,0.68,-0.20,false);
    note(F.D6,t+0.34,0.74,0.05,false);
    note(F.Fs6,t+0.52,0.66,0.30,false);
    note(F.A6,t+0.72,0.58,0.52,true);
    note(F.E6,t+1.00,0.52,0.28,false);
    note(F.B5,t+1.18,0.48,-0.10,false);
    note(F.D6,t+1.35,0.58,-0.30,false);
    note(F.Fs6,t+1.55,0.50,0.10,true);
    note(F.D7,t+1.88,0.36,0.45,true);
  }

  function tryResume(){
    scheduleWelcome();
    if(!ctx||ctx.state==='running'){
      resumed=true;
      return;
    }
    try{
      const p=ctx.resume();
      if(p&&typeof p.then==='function'){
        p.then(()=>{resumed=ctx.state==='running';}).catch(()=>{});
      }
    }catch(e){}
  }

  // Skusime okamzite pri nacitani.
  scheduleWelcome();
  tryResume();

  // Ak autoplay politika prehliadaca zvuk blokuje, prvy skutocny vstup ho odomkne.
  function unlock(){
    if(resumed&&ctx&&ctx.state==='running') return;
    tryResume();
  }
  ['pointerdown','keydown','touchstart'].forEach(function(ev){
    window.addEventListener(ev,unlock,{passive:true});
  });
})();
