document.querySelectorAll(".ad-deleted").forEach((n, i) => {
  setTimeout(() => {
    n.querySelector(".watchlist-remove").click()
  }, i * 1000, n);
});
