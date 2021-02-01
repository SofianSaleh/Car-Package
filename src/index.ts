// Mke the functions here like routes and call the controllers
import cars from '../cars';

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

/**
 * This function gets all the cars that went out of production
 */
const getAllCarsOutofProduction = () => {
  let arr = [];
  let vehicles = Object.values(cars[0]);
  for (const vehicle of vehicles) {
    for (let i = 0; i < vehicle.length; i++) {
      if (vehicle[i].Ended === null) arr.push(vehicle[i]);
    }
  }

  return arr;
};

/**
 * This function gets all the vehicle that are still in production
 */
const getAllCarsStillInProduction = () => {
  let arr = [];
  let vehicles = Object.values(cars[0]);
  for (const vehicle of vehicles) {
    for (let i = 0; i < vehicle.length; i++) {
      if (vehicle[i].Ended !== null) arr.push(vehicle[i]);
    }
  }

  return arr;
};

/**
 *
 * @param {string} from A year to start from
 * @param {string} to A year to finish from
 */
const getCarsByDate = (from, to = null) => {
  console.log(to, from);
  let arr = [];
  let vehicles = Object.values(cars[0]);
  for (const vehicle of vehicles) {
    for (let i = 0; i < vehicle.length; i++) {
      //   console.log(from >= Number(vehicle[i].Start));
      if (
        from >= Number(vehicle[i].Started) &&
        to <= Number(vehicle[i].Ended)
      ) {
        arr.push(vehicle[i]);
      }
    }
  }

  return arr;
};

module.exports = {
  getCarManufacturers,
  getCarsByManufacturer,
  getSpecificCar,
  getAllCarsOutofProduction,
  getAllCarsStillInProduction,
  getCarsByDate,
};
