// ==UserScript==
// @name         AutoTrimpsV2+genBTC-GraphsOnly
// @namespace    https://raw.githubusercontent.com/genbtc/AutoTrimps/december
// @version      2.1.6.5-genbtc-3-7-2018+Mod+Uni+coderpatsy
// @description  Graphs Module (only) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
//this comes from AutoTrimps/modules/utils.js , then we dont need to load everything from that file.
function safeSetItems(name,data) {
    try {
        localStorage.setItem(name, data);
    } catch(e) {
      if (e.code == 22) {
        // Storage full, maybe notify user or do some clean-up
        debug("Error: LocalStorage is full, or error. Attempt to delete some portals from your graph or restart browser.");
      }
    }
}
//This can be edited to point to your own Github Repository URL.
var basepath = 'https://raw.githubusercontent.com/genbtc/AutoTrimps/december';
var script = document.createElement('script');
script.id = 'AutoTrimps-Graphs';
script.src = basepath + 'Graphs.js';
document.head.appendChild(script);