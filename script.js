(function(){
const overlay = document.getElementById('overlay');
const btn = document.getElementById('revealBtn');


function revealPage(){
overlay.classList.add('hide');
setTimeout(()=>{ overlay.style.display='none' },900);
}


btn.addEventListener('click', revealPage);


// Tecla Enter também revela
document.addEventListener('keydown', (e)=>{ if(e.key==='Enter') revealPage() });
})();