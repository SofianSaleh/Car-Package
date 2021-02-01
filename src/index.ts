// Mke the functions here like routes and call the controllers
import cars from '../cars';

/**
 * returns an array of manufacturers name
 * @returns {Array<string>}
 */
const getCarManufacturers = (): any[] => {
  return Object.keys(cars[0]);
};

/**
 * returns a list of car based on the manufacturer
 * @param {string} carManufacturer
 * @returns {array<object>} an array of objects
 */
const getCarsByManufacturer = (carManufacturer: string): any[] => {
  const name = `${carManufacturer
    .substring(0, 1)
    .toUpperCase()}${carManufacturer.slice(1).toLowerCase()}`;
  const carArr: any = cars[0];
  if (carArr[name]) {
    return carArr[name];
  }
  throw new Error(`Car was not found`);
};

/**
 *
 * @param {string} carMan car manufacturer where you enter the car name
 * @param {string} model Enter the model name
 */
const getSpecificCar = (carMan: string, model: string) => {
  const name = `${carMan.substring(0, 1).toUpperCase()}${carMan
    .slice(1)
    .toLowerCase()}`;

  const carModel: any = cars[0];

  if (carModel[name]) {
    for (let i = 0; i < carModel[name].length; i++) {
      if (carModel[name][i]['Car'].toLowerCase() == model.toLowerCase())
        return carModel[name][i];
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
const getCarsByDate = (from: number, to: number | null = null): any[] => {
  let arr = [];
  let vehicles = Object.values(cars[0]);
  for (const vehicle of vehicles) {
    for (let i = 0; i < vehicle.length; i++) {
      if (from >= Number(vehicle[i].Started)) {
        if (to === null) {
          arr.push(vehicle[i]);
        } else if (to <= Number(vehicle[i].Ended)) {
          arr.push(vehicle[i]);
        }
      }
    }
  }

  return arr;
};

export {
  getCarManufacturers,
  getCarsByManufacturer,
  getSpecificCar,
  getAllCarsOutofProduction,
  getAllCarsStillInProduction,
  getCarsByDate,
};
