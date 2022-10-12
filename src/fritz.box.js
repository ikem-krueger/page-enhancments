const downstream_docsis_3_0_table = document.querySelectorAll(".flexTableBody")[1];

const dbmvClass = {
  BAD: "#FF0000",
  MEDIUM: "#FFF200",
  GOOD: "#00FF00"
}

downstream_docsis_3_0_table.querySelectorAll('[prefid="powerLevel"]').forEach((dbmv_cell) => {
  const row = dbmv_cell.closest(".flexRow");

  const dbmv = parseFloat(dbmv_cell.textContent);
  let backgroundColor = dbmvClass.BAD;

  if(dbmv >= -15 && dbmv <= 15) {
    backgroundColor = dbmvClass.MEDIUM;
  }

  if(dbmv >= -8 && dbmv <= 8) {
    backgroundColor = dbmvClass.GOOD;
  }

  row.style.backgroundColor = backgroundColor;
});
