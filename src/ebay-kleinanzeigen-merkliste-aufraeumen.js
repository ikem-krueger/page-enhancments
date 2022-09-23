// ==UserScript==
// @name         eBay Kleinanzeigen Merkliste aufräumen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Entfernt alle verkauften Artikel von der Merkliste.
// @author       Ikem Krueger <ikem.krueger@gmail.com>
// @match        https://www.ebay-kleinanzeigen.de/m-merkliste.html
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelectorAll(".ad-deleted").forEach((n, i) => {
    setTimeout(() => {
      n.querySelector(".watchlist-remove").click()
    }, i * 1000, n);
  });
})();
