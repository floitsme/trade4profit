const canvas=document.getElementById('bg');const ctx=canvas.getContext('2d');
let w,h,t=0;function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;}resize();addEventListener('resize',resize);
function draw(){t+=0.005;ctx.clearRect(0,0,w,h);ctx.globalAlpha=0.06;ctx.strokeStyle='#ffffff';
for(let y=60;y<h;y+=60){ctx.beginPath();ctx.moveTo(0,y+Math.sin(t+y*0.01)*8);ctx.lineTo(w,y+Math.sin(t+y*0.01)*8);ctx.stroke();}
for(let x=80;x<w;x+=120){ctx.beginPath();ctx.moveTo(x+Math.cos(t+x*0.01)*6,0);ctx.lineTo(x+Math.cos(t+x*0.01)*6,h);ctx.stroke();}
ctx.globalAlpha=0.12;for(let i=0;i<6;i++){const rad=120+Math.sin(t*2+i)*40,x=(w/2)+Math.cos(t+i*1.2)*(220+i*30),y=(h/2)+Math.sin(t*1.2+i*0.8)*(120+i*18);
const g=ctx.createRadialGradient(x,y,0,x,y,rad);g.addColorStop(0,'rgba(123,210,60,0.7)');g.addColorStop(0.5,'rgba(49,196,141,0.5)');g.addColorStop(1,'rgba(31,90,166,0)');
ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,rad,0,Math.PI*2);ctx.fill();}requestAnimationFrame(draw);}draw();
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const qs=new URLSearchParams(location.search);
const ca=qs.get('ca'); if(ca){ const el=document.getElementById('contract'); if(el) el.textContent=ca; }
const buy=qs.get('buy'); const watch=qs.get('watch'); const comm=qs.get('community');
if(buy){ const e1=document.getElementById('buyBtn'); const e2=document.getElementById('buyBtn2'); if(e1) e1.href=buy; if(e2) e2.href=buy; }
if(watch){ const e=document.getElementById('watchBtn'); if(e) e.href=watch; }
if(comm){ const e=document.getElementById('communityBtn'); if(e) e.href=comm; }