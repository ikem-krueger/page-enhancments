document.querySelectorAll(".arztsuche_results .docob").forEach((result) => {
  result.style.filter = "saturate(0%)";

  const date = new Date();
  const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const today = weekdays[date.getDay()];

  const phoneNumber = result.querySelector(".tel");

  let officeHoursLink;

  result.querySelectorAll(".p-accordion-header-text").forEach((accordion) => {
    if(accordion.innerText == "Sprechzeiten")
      officeHoursLink = accordion
  });

  let officeHourDay;

  result.querySelectorAll(".day").forEach((day) => {
    if(day.innerText == today)
      officeHourDay = day.closest("tr");
  });

  let officeHoursAvailable;

  officeHourDay?.querySelectorAll(".typ").forEach((type) => {
    if(type.innerText == "Sprechzeiten" || type.innerText == "Telefonische Erreichbarkeit") {
      officeHoursAvailable = type.closest("tr");

      officeHoursAvailable.style.backgroundColor = "bisque";
    }
  });

  if(phoneNumber && officeHoursAvailable) {
    if(officeHoursLink.closest(".p-accordion-header-link").querySelector('.pi-chevron-right'))
      officeHoursLink.click();

    phoneNumber.style.backgroundColor = "bisque";

    officeHourDay.style.backgroundColor = "antiquewhite";

    const officeHours = officeHoursAvailable.querySelector(".hours");

    const [fromHour, fromMinute, toHour, toMinute] = officeHours.innerText.match(/(\d+):(\d+) - (\d+):(\d+)/).slice(1)

    let from = new Date();
    let to = new Date();

    from.setHours(fromHour, fromMinute);
    to.setHours(toHour, toMinute);

    if(date.getTime() >= from.getTime() && date.getTime() <= to.getTime())
      result.style.filter = "saturate(100%)";
  } else {
    result.style.display = "none";
  }
});
