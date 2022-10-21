const COLORS = {
  "Sofortige Beseitigung": "#FF0000",
  "Beseitigung binnen Monatsfrist": "#FFF200",
  "Tolerierte Abweichung": "#ADFF2F",
  "Regel- / Vorgabekonform": "#00FF00"
}

const CLASSIFICATION_LEVEL = ["Sofortige Beseitigung", "Beseitigung binnen Monatsfrist", "Tolerierte Abweichung", "Regel- / Vorgabekonform", "Tolerierte Abweichung", "Beseitigung binnen Monatsfrist", "Sofortige Beseitigung"];

const RECEIVING_LEVEL = {
  "64QAM": [[-60.0, -14.0], [-13.9, -12.0], [-11.9, -10.0], [-9.9, 7.0], [7.1, 12.0], [12.1, 14.0], [14.1, 60.0]],
  "256QAM": [[-60.0, -8.0], [-7.9, -6.0], [-5.9, -4.0], [-3.9, 13.0], [13.1, 18.0], [18.1, 20.0], [20.1, 60.0]],
  "1K": [[-60.0, -6.0], [-5.9, -4.0], [-3.9, -2.0], [-1.9, 15.0], [15.1, 20.0], [20.1, 22.0], [22.1, 60.0]],
  "2K": [[-60.0, -4.0], [-3.9, -2.0], [-1.9, 0.0], [0.1, 17.0], [17.1, 22.0], [22.1, 24.0], [24.1, 60.0]],
  "4K": [[-60.0, -2.0], [-1.9, 0.0], [0.1, 2.0], [2.1, 19.0], [19.1, 24.0], [24.1, 26.0], [26.1, 60.0]]
}

const TRANSMISSION_LEVEL = {
  "64QAM": [[-60.0, 35.0], [35.1, 37.0], [37.1, 41.0], [41.1, 47.0], [47.1, 51.0], [51.1, 53.0], [53.1, 60.0]],
  "4K": [[-60.0, 38.0], [38.1, 40.0], [40.1, 44.0], [44.1, 47.0], [47.1, 48.0], [48.1, 50.0], [50.1, 60.0]]
}

function inRange(value, range) {
  const [min, max] = range;

  return min <= value && value <= max;
}

function colorizePowerLevel(table, level) {
  table.querySelector(".flexTableBody").querySelectorAll(".flexRow").forEach((row) => {
    const childNodes = row.childNodes;

    const typ = childNodes[2];
    const powerLevel = childNodes[4];

    let classification;

    level[typ.textContent].forEach((range, index) => {
      if(inRange(parseFloat(powerLevel.textContent), range)) {
        classification = CLASSIFICATION_LEVEL[index];

        return;
      }
    });

    powerLevel.style.color = COLORS[classification];
  });
}

const DsDocsis31Table = document.querySelector("#uiContainerDsDocsis31Table");
const DsDocsis30Table = document.querySelector("#uiContainerDsDocsis30Table");
const UsDocsis31Table = document.querySelector("#uiContainerUsDocsis31Table");
const UsDocsis30Table = document.querySelector("#uiContainerUsDocsis30Table");

colorizePowerLevel(DsDocsis31Table, RECEIVING_LEVEL);
colorizePowerLevel(DsDocsis30Table, RECEIVING_LEVEL);
colorizePowerLevel(UsDocsis31Table, TRANSMISSION_LEVEL);
colorizePowerLevel(UsDocsis30Table, TRANSMISSION_LEVEL);
