// Mke the functions here like routes and call the controllers
const cars = require('./cars.js');

/**
 * returns an array of manufacturers name
 * @returns {Array<string>}
 */
const getCarManufacturers = () => {
  return Object.keys(cars[0]);
};

/**
 * returns a list of car based on the manufacturer
 * @param {string} carManufacturer
 * @returns {array<object>} an array of objects
 */
const getCarsByManufacturer = (carManufacturer) => {
  const name = `${carManufacturer
    .substring(0, 1)
    .toUpperCase()}${carManufacturer.slice(1).toLowerCase()}`;
  return cars[0][name];
};

const getSpecificCar = (carMan, model) => {
  const name = `${carMan.substring(0, 1).toUpperCase()}${carMan
    .slice(1)
    .toLowerCase()}`;
  if (cars[0][name]) {
    cars[0][name].forEach((arr) => {
      console.log(arr.Car == model);
      if (arr.Car == model) return arr;
    });
  }
  throw new Error('Car was not found');
};

const getAllCarsOutofProduction = () => {};

const getAllCarsStillInProduction = () => {};

const getCarsByDate = (from, to) => {};

console.log(getSpecificCar('ACura', 'CL'));
