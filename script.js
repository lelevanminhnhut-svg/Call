const r=document.getElementById('ring'),v=document.getElementById('voice');
if(navigator.vibrate)navigator.vibrate([200,150,200]);
setTimeout(()=>{r.play().catch(()=>{});},500);
setTimeout(()=>{r.pause();r.currentTime=0;v.play().catch(()=>{});},3500);
endCall.onclick=()=>{if(navigator.vibrate)navigator.vibrate(100);location.href='https://lelevanminhnhut-svg.github.io/';};