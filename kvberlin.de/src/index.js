document.querySelectorAll(".arztsuche_results .docob").forEach((result) => {
  const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  const date = new Date();
  
  const weekday = days[date.getDay()];
 
  const tel = result.querySelector(".tel");

  let sprechzeiten;
  
  result.querySelectorAll(".p-accordion-header-text").forEach((accordion) => {
    if(accordion.innerText === "Sprechzeiten")
      sprechzeiten = accordion;
  });
  
  let sprechzeitenToday;
  
  result.querySelectorAll(".day").forEach((day) => {
    if(day.innerText === weekday)
      sprechzeitenToday = day.closest("tr");
  });

  let erreichbarkeit;

  if(sprechzeitenToday) {
    sprechzeitenToday.querySelectorAll(".typ").forEach((typ) => {
      if(typ.innerText === "Telefonische Erreichbarkeit")
        erreichbarkeit = typ.closest("tr");
    });
  }
 
  if(tel && sprechzeiten && erreichbarkeit) {
    sprechzeiten.click();

    sprechzeitenToday.style = "background-color: antiquewhite;";
    erreichbarkeit.style = "background-color: bisque;";
  } else {
    result.style = "display: none;";
  }
});
