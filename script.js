let base = "#191724";
let love = "#eb6f92";
let pine = "#31748f";

function makeRow() {
  const container = document.querySelector(".content");
  const div1 = document.createElement("div");
  div1.className = "grid-row";
  div1.style.display = "flex";
  div1.style.flexDirection = "row";
  div1.style.backgroundColor = pine;
  div1.style.height = "30px";
  div1.style.width = "80%";
  div1.style.margin = "2px 80px";
  div1.style.borderRadius = "8px";
  container.appendChild(div1)
}

let i = 0;
while (i < 16) {
  makeRow();
  i++;
}

function makeBox() {
  const container = document.querySelector(".grid-row");
  const div2 = document.createElement("div");
  div2.className = "grid-box";
  div2.style.backgroundColor = love;
  div2.style.height = "30px";
  div2.style.width = "30px";
  div2.style.margin = "2px";
  div2.style.borderRadius = "8px";
  container.appendChild(div2)
}

let j = 0;
while (j < 16) {
  makeBox();
  j++;
}
