!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="3.1.0",n=e=>{const n=`Sa11yLang${e.charAt(0).toUpperCase()+e.slice(1)}`;Sa11y.Lang.addI18n(window[n].strings),new Sa11y.Sa11y({autoDetectShadowComponents:!0,customChecks:!1,exportResultsPlugin:!0,detectSPArouting:!0})};"object"==typeof Sa11y?window.location.pathname.includes("sa11y")?alert('Trageți butonul "Sa11y" în bara de marcaje. Apoi faceți clic pe marcaj pe orice pagină web.'):alert("Sa11y este deja încărcat pe această pagină. Vă rugăm să așteptați sau reîncărcați pagina și încercați din nou."):function(t){const a=document.createElement("link"),s=document.getElementsByTagName("head")[0];a.rel="stylesheet",a.href=`https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@${e}/dist/css/sa11y.min.css`,a.type="text/css",s.appendChild(a);const c=document.createElement("script");c.src=`https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@${e}/dist/js/lang/${t}.umd.min.js,gh/ryersondmp/sa11y@${e}/dist/js/sa11y.umd.min.js`,document.body.appendChild(c),c.onload=()=>n(t),c.onreadystatechange=()=>n(t)}("ro")}));
