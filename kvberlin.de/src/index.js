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
      if(typ.innerText === "Telefonische Erreichbarkeit") {
        erreichbarkeit = typ.closest("tr");
        
        erreichbarkeit.style = "background-color: bisque;";
      }
    
    sprechzeitenToday.style = "background-color: antiquewhite;";
    });
  }
 
  if(tel && sprechzeiten && erreichbarkeit) {
    if(sprechzeiten.closest(".p-accordion-header-link").querySelector('.pi-chevron-right'))
      sprechzeiten.click();

    /*
    let now = date.getTime();
    let start = date.setHours(10, 10);
    let end = date.setHours(10, 50);

    console.debug(erreichbarkeit.closest(".hourstable").querySelector(".hours").innerText);
    */
  } else {
    result.style = "display: none;";
  }
});
