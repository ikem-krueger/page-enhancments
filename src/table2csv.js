// This script uses HTML tables to generates CSV files
// It followes the official specification for CSV files: https://www.rfc-editor.org/rfc/rfc4180#page-2

function download(filename, text) {
  const element = document.createElement("a");

  element.href = `data:text/csv;charset=utf-8, ${encodeURIComponent(text)}`;
  element.download = filename;

  element.style.display = "none";

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

NodeList.prototype.map = Array.prototype.map;
HTMLCollection.prototype.map = Array.prototype.map;

const table = document.querySelector("#tablepress-96");

const text = table.querySelectorAll("tr").map(tr => tr.children.map(td => `"${td.innerText.replaceAll('"', '""')}"`).join(",")).join("\r\n");

download("sample.csv", text);
