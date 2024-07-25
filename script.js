let base = "#191724";
let love = "#eb6f92";
let pine = "#31748f";

const container = document.querySelector(".content");

function makeGrid() {
  for (i = 0; i < 16; i++) {
      const row = document.createElement("div");
      row.className = "row";
      row.style.display = "flex";
      container.appendChild(row);

      for (j = 0; j < 16; j++) {
        const col = document.createElement("div");
        col.className = "col";
        col.style.width = "30px";
        col.style.height = "30px";
        col.style.backgroundColor = "love";
        col.style.margin = "2px";
        col.style.borderRadius = "20%";
        row.appendChild(col);
      }
    }
}

makeGrid();

