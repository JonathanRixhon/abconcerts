(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{gTfH:function(e,t,a){"use strict";a.r(t),t.default=function(e){var t=document.body,a=document.querySelectorAll("[data-page-search-toggle]"),n=e.querySelector("input");a.forEach((function(a){a.addEventListener("click",(function(a){a.preventDefault(),e.classList.toggle("-active"),t.classList.toggle("-no-overflow"),e.classList.contains("-active")?n.focus():n.value=""}))})),n.addEventListener("keyup",(function(){if(n.value.length>2){var e=new XMLHttpRequest;e.open("GET",n.dataset.autocompleteUri+"?q="+n.value,!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=JSON.parse(this.response),t=document.querySelector("[data-page-search-container]"),a=document.querySelector("[data-page-search-autocomplete]");null===a&&((a=document.createElement("div")).setAttribute("class","page-search__autocomplete"),a.setAttribute("data-page-search-autocomplete",!0));for(var n=document.createElement("ul"),o=0;o<e.length;o++){var c=document.createElement("li"),l=document.createElement("a");l.textContent=e[o].text,l.href=e[o].uri,c.appendChild(l),n.appendChild(c)}void 0!==a.childNodes[0]?a.replaceChild(n,a.childNodes[0]):a.appendChild(n),t.appendChild(a)}},e.send()}}))}}}]);
//# sourceMappingURL=27.ee3b665c.js.map