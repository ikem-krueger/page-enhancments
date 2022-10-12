var downstream_docsis_3_0_table = document.querySelectorAll(".flexTableBody")[1];
var dbmv_cell = downstream_docsis_3_0_table.querySelectorAll('[prefid="powerLevel"]')[0];
var row = dbmv_cell.closest(".flexRow");

var dbmv = parseFloat(dbmv_cell.textContent);
var backgroundColor = "red";

// wenn der dBmV-Wert zwischen -15dB und +15dB liegt, dann setze hintergrundfarbe auf gelb
if(dbmv >= -15 && dbmv <= 15) {
	backgroundColor = "yellow";
}

// wenn der dBmV-Wert zwischen +8 und -8 liegt, dann setze hintergrundfarbe auf grün
if(dbmv >= -8 && dbmv <= 8) {
  backgroundColor = "green";
}

row.style.backgroundColor = backgroundColor;
