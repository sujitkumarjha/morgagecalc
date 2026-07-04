// FinCalcs shared helpers — all client-side, no backend.
function $(id){return document.getElementById(id)}
function num(id){return parseFloat($(id).value)||0}
// two-way bind a number input with its range slider (idR) and recalc
function sync(id,fn){
  const n=$(id),r=$(id+'R');
  if(r){r.addEventListener('input',()=>{n.value=r.value;fn()});
       n.addEventListener('input',()=>{r.value=n.value;fn()});}
  else n.addEventListener('input',fn);
}
function usd(v){return '$'+Math.round(v).toLocaleString('en-US')}
function usd2(v){return '$'+v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}
function inr(v){return '₹'+Math.round(v).toLocaleString('en-IN')}
// donut: parts=[{f:fraction,c:color}], renders into <svg> element (140x140)
function donut(el,parts){
  const C=2*Math.PI*54;let off=0,h='';
  parts.forEach(p=>{if(p.f<=0)return;const len=Math.max(p.f*C,0);
    h+='<circle r="54" cx="70" cy="70" fill="none" stroke="'+p.c+'" stroke-width="24" stroke-dasharray="'+len+' '+(C-len)+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 70 70)"/>';
    off+=len;});
  el.innerHTML=h;
}
