import test from 'node:test';
import assert from 'node:assert/strict';
import { createCar, getCarTitle } from '../functions.mjs';

test('creates a car with the entered information', () => {
  const car = createCar('WRX', 'Subaru', '2017', '#4169e1', 'Daily driver', false);
  assert.deepStrictEqual(car, {
    model: 'WRX', brand: 'Subaru', year: 2017,
    color: '#4169e1', notes: 'Daily driver', favorite: false
  });
});

test('trims extra spaces from model and notes', () => {
  const car = createCar('  RX330  ', 'Lexus', '2006', '#000000', '  Family car  ', true);
  assert.strictEqual(car.model, 'RX330');
  assert.strictEqual(car.notes, 'Family car');
});

test('formats the car heading', () => {
  const car = createCar('SLK350', 'Mercedes-Benz', '2006', '#000000', '', false);
  assert.strictEqual(getCarTitle(car), '2006 Mercedes-Benz SLK350');
});

test('adds a star to a favorite car heading', () => {
  const car = createCar('WRX', 'Subaru', '2017', '#4169e1', '', true);
  assert.strictEqual(getCarTitle(car), '2017 Subaru WRX ★');
});
