document.querySelectorAll(".arztsuche_results .docob").forEach((result) => {
  const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  const weekday = days[date.getDay()];

  /*
  const date = new Date();
  
  let now = date.getTime();

  let start = date.setHours(10, 10);
  let end = date.setHours(10, 50);
  */
  
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
    
    console.debug(erreichbarkeit.closest(".hourstable").querySelector(".hours").innerText);
  } else {
    result.style = "display: none;";
  }
});