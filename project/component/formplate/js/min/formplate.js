function formplate(e){var t=function(e){var t={body:e.getElementsByTagName("body")[0],html:e.getElementsByTagName("html")[0]},o=function(e,t){var o=e.className;null===o.match(new RegExp("\\b"+t+"\\b","g"))&&(e.className=""===o?t:o+" "+t)},n=function(e){e.removeAttribute("class")},a=function(e,t){e.className.indexOf(t)>-1&&(e.className=e.className.split(" ").filter(function(e){return e!=t}).toString().replace(/,/g," "),""===e.className&&n(e))},c=function(e,t,o){null!=e&&"undefined"!=typeof e&&(e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent?e.attachEvent("on"+t,o):e["on"+t]=o)},s=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},r=function(){return"ontouchstart"in window||"onmsgesturechange"in window};return{classAdd:o,classClear:n,classRemove:a,element:t,eventAdd:c,hasClass:s,isTouch:r}}(document),o=this;o.options={selector:e&&e.selector?e.selector:$formplateDefault.selector,colour:e&&e.colour?e.colour:$formplateDefault.colour,style:e&&e.style?e.style:$formplateDefault.style};var n=document.querySelectorAll(o.options.selector);t.isTouch()||t.hasClass(t.element.html,"formplate-no-touch")||t.classAdd(t.element.html,"formplate-no-touch");for(var a=function(e){e.onchange=function(){t.hasClass(e.parentNode,"_checked")?t.classRemove(e.parentNode,"_checked"):t.classAdd(e.parentNode,"_checked")}},c=function(e){for(var o=e.querySelectorAll("input"),n=0,a=o.length;a>n;n++){var c=o[n];c.onfocus=function(){var e=c.parentNode.getAttribute("class").indexOf("fp-")>-1?c.parentNode:c.parentNode.parentNode.getAttribute("class").indexOf("fp-")>-1?c.parentNode.parentNode:c.parentNode.parentNode.parentNode;t.classAdd(e,"_focused")},c.onblur=function(){var e=c.parentNode.getAttribute("class").indexOf("fp-")>-1?c.parentNode:c.parentNode.parentNode.getAttribute("class").indexOf("fp-")>-1?c.parentNode.parentNode:c.parentNode.parentNode.parentNode;t.classRemove(e,"_focused")}}},s=function(e){e.onclick=function(){for(var o=document.getElementsByName(e.getAttribute("name")),n=0,a=o.length;a>n;n++)t.classRemove(o[n].parentNode,"_checked");t.classAdd(e.parentNode,"_checked")}},r=function(e){e.onfocus=function(){t.classAdd(e.parentNode,"_focused")},e.onblur=function(){t.classRemove(e.parentNode,"_focused")}},l=0,d=n.length;d>l;l++){var u=n[l],f=" _c-"+o.options.colour+" _s-"+o.options.style;if(u.querySelector("input")){var i=u.querySelector("input"),p=i.getAttribute("type");"checkbox"===p?(f+="checked"===i.getAttribute("checked")?" _checked":"",t.hasClass(i,"toggler")?t.classAdd(u,"fp-tog"+f):t.classAdd(u,"fp-check"+f),a(i)):"radio"===p?(f+="checked"===i.getAttribute("checked")?" _checked":"",t.classAdd(u,"fp-check _t-radio"+f),s(i)):"password"===p?(t.classAdd(u,"fp-inp _t-password"+f),c(u)):(t.classAdd(u,"fp-inp"+f),c(u))}else if(u.querySelector("textarea")){var m=u.querySelector("textarea");t.classAdd(u,"fp-text"+f),r(m)}else if(u.querySelector("select")){var h=u.querySelector("select");null!=h&&t.classAdd(u,"fp-sel"+f)}}}var $formplateDefault={selector:".formplate",colour:"blue",style:"line"};