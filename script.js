import { createCar, getCarTitle } from "./functions.mjs";

// Show a new car after submitting the form.
const form = document.getElementById("carForm");
const carList = document.getElementById("carList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const car = createCar(
    document.getElementById("model").value,
    document.getElementById("brand").value,
    document.getElementById("year").value,
    document.getElementById("color").value,
    document.getElementById("notes").value,
    document.getElementById("favorite").checked
  );

  const empty = document.getElementById("emptyMessage");
  if (empty) empty.remove();

  const item = document.createElement("li");
  const heading = document.createElement("strong");
  heading.textContent = getCarTitle(car);
  item.appendChild(heading);

  const swatch = document.createElement("span");
  swatch.className = "swatch";
  swatch.style.backgroundColor = car.color;
  swatch.title = "Selected color: " + car.color;
  item.appendChild(document.createTextNode("  "));
  item.appendChild(swatch);

  if (car.notes) {
    const noteText = document.createElement("span");
    noteText.className = "notes";
    noteText.textContent = car.notes;
    item.appendChild(noteText);
  }

  carList.appendChild(item);
  form.reset();
});
