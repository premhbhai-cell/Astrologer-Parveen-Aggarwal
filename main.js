(function(){
var b=document.querySelector('.burger'),n=document.querySelector('nav');
b.addEventListener('click',function(){b.classList.toggle('open');n.classList.toggle('open')});
n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){b.classList.remove('open');n.classList.remove('open')})});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
var co=new IntersectionObserver(function(e){e.forEach(function(x){if(!x.isIntersecting)return;var el=x.target,t=+el.dataset.n,s=el.dataset.s||'',i=0;var id=setInterval(function(){i+=Math.ceil(t/40);if(i>=t){i=t;clearInterval(id)}el.textContent=i+s},30);co.unobserve(el)})},{threshold:.5});
document.querySelectorAll('[data-n]').forEach(function(el){co.observe(el)});
document.querySelectorAll('.fq button').forEach(function(btn){btn.addEventListener('click',function(){var p=btn.parentElement,o=p.classList.contains('open');document.querySelectorAll('.fq').forEach(function(f){f.classList.remove('open')});if(!o)p.classList.add('open')})});
var rw=document.querySelector('.rev-wrap');
if(rw){var step=function(d){var c=rw.querySelector('.rev');rw.scrollBy({left:d*(c.offsetWidth+24),behavior:'smooth'})};
document.querySelectorAll('[data-rev]').forEach(function(x){x.addEventListener('click',function(){step(+x.dataset.rev)})});
setInterval(function(){if(rw.scrollLeft+rw.clientWidth>=rw.scrollWidth-10)rw.scrollTo({left:0,behavior:'smooth'});else step(1)},5000)}
document.querySelectorAll('video').forEach(function(v){v.addEventListener('play',function(){document.querySelectorAll('video').forEach(function(o){if(o!==v)o.pause()})})});
document.querySelectorAll('.cf').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var m='Namaste Parveen Ji,%0AName: '+encodeURIComponent(d.get('name'))+'%0APhone: '+encodeURIComponent(d.get('phone'))+'%0AProblem: '+encodeURIComponent(d.get('type'))+'%0ADetails: '+encodeURIComponent(d.get('msg')||'-');
window.open('https://wa.me/916280269457?text='+m,'_blank')})});
var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<button aria-label="Close">×</button><img alt="">';document.body.appendChild(lb);
document.querySelectorAll('.gal a').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();lb.querySelector('img').src=a.getAttribute('href');lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
})();
