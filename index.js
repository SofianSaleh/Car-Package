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

/**
 *
 * @param {string} carMan car manufacturer where you enter the car name
 * @param {string} model Enter the model name
 */
const getSpecificCar = (carMan, model) => {
  const name = `${carMan.substring(0, 1).toUpperCase()}${carMan
    .slice(1)
    .toLowerCase()}`;

  const carModel = cars[0][name];
  if (carModel) {
    for (let i = 0; i < carModel.length; i++) {
      if (carModel[i]['Car'].toLowerCase() == model.toLowerCase())
        return carModel[i];
    }
  }
  throw new Error('Car was not found');
};

const getAllCarsOutofProduction = () => {
  let vehicles = Object.values(cars[0]);
  for (const vehicle of vehicles) {
    console.log(vehicle);
  }
};

const getAllCarsStillInProduction = () => {};

const getCarsByDate = (from, to) => {};

console.log(getAllCarsOutofProduction());
