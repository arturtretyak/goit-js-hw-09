!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector("body");function r(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(n){e.disabled=!0;var a=r();o.style.backgroundColor=a,t=setInterval((function(){if(e.disabled){var t=r();o.style.backgroundColor=t}}),1e3)})),n.addEventListener("click",(function(n){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.fe39009f.js.map
