/* Tested for FRITZ!OS 7.29/7.57 */

/* Internet > Kabel-Informationen > Kanäle */

const powerLevelCombined = {
  "colors": ["#ff0000", "#fff200", "#80f800", "#00ff00", "#80f800", "#fff200", "#ff0000"],
  "downstream": {
    "4096QAM": [[-60.0, -2.0], [-1.9, 0.0], [0.1, 2.0], [2.1, 19.0], [19.1, 24.0], [24.1, 26.0], [26.1, 60.0]],
    "2048QAM": [[-60.0, -4.0], [-3.9, -2.0], [-1.9, 0.0], [0.1, 17.0], [17.1, 22.0], [22.1, 24.0], [24.1, 60.0]],
    "1024QAM": [[-60.0, -6.0], [-5.9, -4.0], [-3.9, -2.0], [-1.9, 15.0], [15.1, 20.0], [20.1, 22.0], [22.1, 60.0]],
    "256QAM": [[-60.0, -8.0], [-7.9, -6.0], [-5.9, -4.0], [-3.9, 13.0], [13.1, 18.0], [18.1, 20.0], [20.1, 60.0]],
    "64QAM": [[-60.0, -14.0], [-13.9, -12.0], [-11.9, -10.0], [-9.9, 7.0], [7.1, 12.0], [12.1, 14.0], [14.1, 60.0]]
  }, 
  "upstream": {
    "4096QAM": [[-60.0, 38.0], [38.1, 40.0], [40.1, 44.0], [44.1, 47.0], [47.1, 48.0], [48.1, 50.0], [50.1, 60.0]],
    "64QAM": [[-60.0, 35.0], [35.1, 37.0], [37.1, 41.0], [41.1, 47.0], [47.1, 51.0], [51.1, 53.0], [53.1, 60.0]]
  },
  "alias": {
    "4K": "4096QAM",
    "2K": "2048QAM",
    "1K": "1024QAM"
  }
}

function isInRange(value, range) {
  const [min, max] = range;

  return min <= value && value <= max;
}

NodeList.prototype.findIndex = Array.prototype.findIndex;

function colorizePowerLevel(table, direction) {
  const tableObject = document.querySelector("#uiContainer" + table + "Table");

  const headerColumns = tableObject.querySelector(".flexTableHeader").childNodes;

  const typeIndex = headerColumns.findIndex(column => column.textContent == "Typ" || column.textContent == "Modulation");
  const powerLevelIndex = headerColumns.findIndex(column => column.textContent == "Power Level (dBmV)");

  tableObject.querySelector(".flexTableBody").querySelectorAll(".flexRow").forEach((row) => {
    const columns = row.childNodes;

    const type = columns[typeIndex].textContent;

    const powerLevelObject = columns[powerLevelIndex];

    const powerLevel = powerLevelCombined[direction][type] || powerLevelCombined[direction][powerLevelCombined["alias"][type]];

    if(powerLevel) {
      powerLevel.forEach((range, index) => {
        if(isInRange(parseFloat(powerLevelObject.textContent), range)) {
          powerLevelObject.style.color = powerLevelCombined["colors"][index];

          return;
        }
      });
    }
  });
}

colorizePowerLevel("DsDocsis31", "downstream");
colorizePowerLevel("DsDocsis30", "downstream");
colorizePowerLevel("UsDocsis31", "upstream");
colorizePowerLevel("UsDocsis30", "upstream");
