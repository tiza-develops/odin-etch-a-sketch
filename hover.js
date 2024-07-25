const gold = "#f6c177"


const elements = document.querySelectorAll(".col");

elements.forEach(element => {
  element.addEventListener(
    "mouseenter",
    (event) => {
      event.target.style.backgroundColor = gold;
    },
  );
}
)

