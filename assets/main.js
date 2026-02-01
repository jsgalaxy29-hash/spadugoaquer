(function(){
  const thumbs = document.getElementById('thumbs');
  const dlg = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if(!thumbs || !dlg || !img) return;

  thumbs.addEventListener('click', (e)=>{
    const a = e.target.closest('a.thumb');
    if(!a) return;
    e.preventDefault();
    img.src = a.getAttribute('href');
    img.alt = a.querySelector('img')?.alt || '';
    dlg.showModal();
  });

  dlg.addEventListener('click', (e)=>{
    const close = e.target.closest('[data-close]');
    if(close) dlg.close();
  });

  dlg.addEventListener('cancel', ()=> dlg.close());
})();