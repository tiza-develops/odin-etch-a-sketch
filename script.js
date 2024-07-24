let base = "#191724";
let love = "#eb6f92";
let pine = "#31748f";

function makeRow() {
  const container = document.querySelector(".content");
  const div1 = document.createElement("div");
  div1.className = "grid-row";
  div1.style.display = "flex";
  div1.style.flexDirection = "row";
  div1.style.justifyContent= "center";
  div1.style.alignItems= "center";
  div1.style.backgroundColor = pine;
  div1.style.height = "30px";
  div1.style.width = "80%";
  div1.style.margin = "2px 80px";
  div1.style.borderRadius = "8px";
  container.appendChild(div1);
}
function makeBox() {
const rowContainer = document.querySelectorAll(".grid-row");
rowContainer.forEach((element) => {
  const div2 = document.createElement("div");
  div2.className = "grid-row";
  div2.style.display = "flex";
  div2.style.flexDirection = "row";
  div2.style.backgroundColor = love;
  div2.style.height = "30px";
  div2.style.width = "30px";
  div2.style.margin = "2px";
  div2.style.borderRadius = "8px";
  element.appendChild(div2);
  });
}

let i = 0;
while (i < 16) {
  makeRow();
  i++;
}

makeBox();
makeBox();
