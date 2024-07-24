function t(t){return t.toLocaleString("en-US")}var e=document.querySelectorAll("span.population"),n=0,o=0;e.forEach(function(t){var e=Number(t.textContent.split(",").join(""));!isNaN(e)&&(n+=e,o++)});var a=n/o,r=document.querySelector("span.average-population"),u=document.querySelector("span.total-population");r.textContent=t(a),u.textContent=t(n);
//# sourceMappingURL=index.178247cc.js.map
