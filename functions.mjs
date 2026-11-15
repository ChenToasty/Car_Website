// Reusable functions for My Garage. These can be unit tested without a browser.
export function createCar(model, brand, year, color, notes, favorite) {
  return {
    model: model.trim(),
    brand: brand,
    year: Number(year),
    color: color,
    notes: notes.trim(),
    favorite: Boolean(favorite)
  };
}

export function getCarTitle(car) {
  return"Broken";
}
