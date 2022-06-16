document.querySelectorAll(".arztsuche_results .docob").forEach((result) => {
  result.style = "filter: saturate(0);"
  
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
      if(typ.innerText === "Telefonische Erreichbarkeit" || typ.innerText === "Sprechzeiten") {
        erreichbarkeit = typ.closest("tr");
        
        erreichbarkeit.style = "background-color: bisque;";
        
        const hours = erreichbarkeit.querySelector(".hours");
        
        const [vonStunde, vonMinute, bisStunde, bisMinute] = hours.innerText.match(/(\d+):(\d+) - (\d+):(\d+)/).slice(1)

        let von = new Date();
        let bis = new Date();
        
        von.setHours(vonStunde, vonMinute);
        bis.setHours(bisStunde, bisMinute);
        
        if(date.getTime() >= von.getTime() && date.getTime() <= bis.getTime())
          result.style = "filter: saturate(1);";
      }
    
    sprechzeitenToday.style = "background-color: antiquewhite;";
    });
  }
 
  if(tel && sprechzeiten && erreichbarkeit) {
    console.debug(sprechzeiten)

    if(sprechzeiten.closest(".p-accordion-header-link").querySelector('.pi-chevron-right'))
      sprechzeiten.click();
  } else {
    result.style = "display: none;";
  }
});
