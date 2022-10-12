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

  let hintergrundfarbe = einstufung.SOFORTIGE_BESEITIGUNG;

  if(pegel >= -15 && pegel <= 15) {
    hintergrundfarbe = einstufung.BESEITIGUNG_BINNEN_MONATSFRIST;
  }

  if(pegel >= -8 && pegel <= 8) {
    hintergrundfarbe = einstufung.TOLERIERTE_ABWEICHUNG;
  }

  row.style.backgroundColor = hintergrundfarbe;
});

// Senderichtung
var UsDocsis31Table = document.querySelector("#uiContainerUsDocsis31Table");
var UsDocsis30Table = document.querySelector("#uiContainerUsDocsis30Table");
