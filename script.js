// When the form is submitted, show the entered car on the page.
const form = document.getElementById("carForm");
const carList = document.getElementById("carList");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stops the page from refreshing

  const model = document.getElementById("model").value.trim();
  const brand = document.getElementById("brand").value;
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const notes = document.getElementById("notes").value.trim();
  const favorite = document.getElementById("favorite").checked;

  const empty = document.getElementById("emptyMessage");
  if (empty) empty.remove();

  const item = document.createElement("li");
  const heading = document.createElement("strong");
  heading.textContent = year + " " + brand + " " + model + (favorite ? " ★" : "");
  item.appendChild(heading);

  const swatch = document.createElement("span");
  swatch.className = "swatch";
  swatch.style.backgroundColor = color;
  swatch.title = "Selected color: " + color;
  item.appendChild(document.createTextNode("  "));
  item.appendChild(swatch);

  if (notes) {
    const noteText = document.createElement("span");
    noteText.className = "notes";
    noteText.textContent = notes;
    item.appendChild(noteText);
  }

  carList.appendChild(item);
  form.reset();
});
