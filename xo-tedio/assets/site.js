tailwind.config={theme:{extend:{colors:{surface:'#131317',c0:'#0e0e12',c1:'#1b1b1f',c2:'#1f1f23',c3:'#2a292e',ink:'#e4e1e7',mute:'#cdc7aa',volt:'#fde400',onvolt:'#201c00',cyan:'#00fbfc'},fontFamily:{head:['Syne'],body:['Spline Sans'],mono:['Space Mono']},borderRadius:{DEFAULT:'1rem',lg:'2rem',xl:'3rem'}}}};
document.addEventListener('DOMContentLoaded',function(){
const pages=[['inicio','Início'],['trajetoria','Trajetória'],['missao','Missão'],['comunidade','Comunidade']];
const link=(p,m)=>`<a href="#${p[0]}" data-nav="${p[0]}" class="nav-l ${m?'block px-4 py-3':'px-4 py-2'} rounded-full font-semibold text-sm transition-all text-mute hover:text-ink hover:bg-c2">${p[1]}</a>`;
document.body.insertAdjacentHTML('afterbegin',`
<header class="fixed top-0 inset-x-0 z-50 bg-surface/75 backdrop-blur-xl">
 <div class="h-20 max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between">
  <a href="#inicio" class="flex items-center gap-3">
   <span class="w-10 h-10 rounded-full bg-c3 border border-volt/30 flex items-center justify-center text-volt"><span class="material-symbols-outlined">sports_esports</span></span>
   <span class="flex flex-col leading-none"><span class="font-head font-extrabold text-xl uppercase text-white">Xô Tédio</span><span class="font-mono text-[10px] tracking-widest uppercase text-mute mt-1">Game Studio</span></span>
  </a>
  <nav class="hidden md:flex gap-1 p-1 rounded-full bg-c1">${pages.map(p=>link(p)).join('')}</nav>
  <div class="flex items-center gap-3">
   <a href="https://nopression.vercel.app/" target="_blank" rel="noopener" class="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-volt text-onvolt font-head font-bold uppercase text-sm tracking-wider shadow-[0_0_24px_rgba(253,228,0,.25)] hover:scale-105 active:scale-95 transition">Jogar agora ⚡</a>
   <button id="menu-btn" aria-label="Abrir menu" class="md:hidden w-10 h-10 rounded-full bg-c2 flex items-center justify-center"><span class="material-symbols-outlined">menu</span></button>
  </div>
 </div>
 <nav id="menu" class="hidden md:hidden px-5 pb-4 bg-surface">${pages.map(p=>link(p,1)).join('')}<a href="https://nopression.vercel.app/" target="_blank" rel="noopener" class="block px-4 py-3 rounded-full font-semibold text-sm bg-volt text-onvolt mt-2 text-center">Jogar agora ⚡</a></nav>
</header>`);
document.body.insertAdjacentHTML('beforeend',`
<footer class="bg-c0 mt-10"><div class="max-w-[1280px] mx-auto px-5 md:px-10 py-12 grid md:grid-cols-12 gap-8">
 <div class="md:col-span-6"><div class="flex items-center gap-2 font-head font-extrabold text-xl uppercase text-white"><span class="material-symbols-outlined text-volt">sports_esports</span>Xô Tédio</div>
 <p class="mt-3 text-ink">O tédio não tem vez.</p><p class="mt-2 text-mute text-sm max-w-sm">Desenvolvedora de jogos independente, fundada em julho de 2026. Se existe tédio, existe uma oportunidade.</p></div>
 <div class="md:col-span-3 flex flex-col gap-2"><span class="font-mono text-[11px] tracking-widest uppercase text-mute mb-1">Navegação</span>${pages.map(p=>`<a href="#${p[0]}" class="text-ink hover:text-volt transition-colors">${p[1]}</a>`).join('')}</div>
 <div class="md:col-span-3"><span class="font-mono text-[11px] tracking-widest uppercase text-mute">Nosso jogo</span><a href="https://nopression.vercel.app/" target="_blank" rel="noopener" class="block mt-3 text-volt font-semibold hover:underline">Jogo dos 10 Segundos ↗</a><span class="block mt-6 font-mono text-[11px] tracking-widest uppercase text-mute">Fique por dentro</span><p class="mt-3 text-mute text-sm">Entre na lista e saiba primeiro dos nossos lançamentos.</p><a href="#comunidade" class="inline-block mt-3 text-volt font-semibold hover:underline">Entrar na comunidade →</a></div>
 <p class="md:col-span-12 pt-6 border-t border-c3 font-mono text-[11px] uppercase text-mute">© 2026 Xô Tédio. Todos os direitos reservados.<br class="sm:hidden"><span class="hidden sm:inline"> · </span>Razão Social: Soares Almeida Tecnologia e Entretenimento Ltda.<span class="hidden sm:inline"> · </span><br class="sm:hidden">CNPJ: 12.345.678/0001-00</p>
</div></footer>`);
const menu=document.getElementById('menu');
document.getElementById('menu-btn').onclick=()=>menu.classList.toggle('hidden');
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.add('hidden')));
const setActive=id=>document.querySelectorAll('.nav-l').forEach(a=>{const on=a.dataset.nav===id;a.classList.toggle('bg-c3',on);a.classList.toggle('text-volt',on);a.classList.toggle('text-mute',!on)});
const secs=pages.map(p=>document.getElementById(p[0])).filter(Boolean);
const spy=()=>{let id=secs[0].id;secs.forEach(e=>{if(e.getBoundingClientRect().top<=window.innerHeight*0.35)id=e.id});setActive(id)};
addEventListener('scroll',spy,{passive:true});spy();
});
