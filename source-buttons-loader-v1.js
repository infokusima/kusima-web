(function(){
  if(document.getElementById('kusima-source-buttons-css')) return;
  const link=document.createElement('link');
  link.id='kusima-source-buttons-css';
  link.rel='stylesheet';
  link.href='source-buttons-v1.css?v=1';
  document.head.appendChild(link);
})();
