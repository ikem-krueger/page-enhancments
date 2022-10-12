function inRange(testval, min, max) {
  return min <= testval && testval <= max;
}

var einstufung = {
  SOFORTIGE_BESEITIGUNG: "#FF0000",
  BESEITIGUNG_BINNEN_MONATSFRIST: "#FFF200",
  TOLERIERTE_ABWEICHUNG: "#00FF00",
  REGELKONFORM: "#00FF00"
}

// Empfangsrichtung
var DsDocsis31Table = document.querySelector("#uiContainerDsDocsis31Table");
var DsDocsis30Table = document.querySelector("#uiContainerDsDocsis30Table");

// DOCSIS 2.0 / 3.0
DsDocsis30Table.querySelector(".flexTableBody").querySelectorAll(".flexRow").forEach((row) => {
  const [ kanal, kanalId, typ, frequenz, powerLevel, mse, latenz, korrigierbareFehler, nichtKorrigierbareFehler ] = row.childNodes;

  const pegel = parseFloat(powerLevel.textContent);

  let hintergrundfarbe;

  if(typ.textContent == "64QAM") {
    if(inRange(pegel, -60.0, -14.0)) {
      hintergrundfarbe = einstufung.SOFORTIGE_BESEITIGUNG;
    }

    if(inRange(pegel, -13.9, -12.0)) {
      hintergrundfarbe = einstufung.BESEITIGUNG_BINNEN_MONATSFRIST;
    }

    if(inRange(pegel, -11.9, -10.0)) {
      hintergrundfarbe = einstufung.TOLERIERTE_ABWEICHUNG;
    }

    if(inRange(pegel, -9.9, 7.0)) {
      hintergrundfarbe = einstufung.REGELKONFORM;
    }

    if(inRange(pegel, 7.1, 12.0)) {
      hintergrundfarbe = einstufung.TOLERIERTE_ABWEICHUNG;
    }

    if(inRange(pegel, 12.1, 14.0)) {
      hintergrundfarbe = einstufung.BESEITIGUNG_BINNEN_MONATSFRIST;
    }

    if(inRange(pegel, 14.1, 60)) {
      hintergrundfarbe = einstufung.SOFORTIGE_BESEITIGUNG;
    }
  }

  row.style.backgroundColor = hintergrundfarbe;
});

// Senderichtung
var UsDocsis31Table = document.querySelector("#uiContainerUsDocsis31Table");
var UsDocsis30Table = document.querySelector("#uiContainerUsDocsis30Table");
