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

const getSpecificCar = (carMan, Model) => {
  const name = `${carManufacturer
    .substring(0, 1)
    .toUpperCase()}${carManufacturer.slice(1).toLowerCase()}`;
  return cars[0][name][Model];
};

const getAllCarsOutofProduction = () => {};

const getAllCarsStillInProduction = () => {};

const getCarsByDate = (from, to) => {};

console.log(getSpecificCar('ACura', 'CL'));
