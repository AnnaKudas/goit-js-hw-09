function e(e,t){const n=Math.random()>.3;return new Promise(((o,s)=>{setTimeout((()=>{n?o({position:e,delay:t}):s({position:e,delay:t})}),t)}))}document.querySelector("button").addEventListener("click",(t=>{t.preventDefault();const n=parseInt(document.getElementsByName("amount")[0].value,10),o=parseInt(document.getElementsByName("delay")[0].value,10),s=parseInt(document.getElementsByName("step")[0].value,10);if(isNaN(n)||isNaN(o)||isNaN(s))alert("Please enter valid numeric values.");else for(let t=0;t<n;t++){e(t+1,o+t*s).then((({position:e,delay:t})=>{console.log(` ✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.53b92363.js.map
