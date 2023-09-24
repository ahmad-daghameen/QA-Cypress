// cypress/utils/counter.js

const fs = require('fs');
const path = require('path');

const counterPath = path.join(__dirname, '..', 'fixtures', 'count.json');

function getCurrentValue() {
  const data = fs.readFileSync(counterPath, 'utf8');
  return JSON.parse(data).value;
}

function incrementValue() {
  const currentValue = getCurrentValue();
  const updatedValue = currentValue + 1;
  fs.writeFileSync(counterPath, JSON.stringify({ value: updatedValue }));
  return updatedValue;
}

module.exports = {
  getCurrentValue,
  incrementValue
};
