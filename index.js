// Mke the functions here like routes and call the controllers
const getCarManufacturers = () => {
  return Object.keys(cars[0]);
};

const getCarsByManufacturer = (carManufacturer) => {
  const name = `${carManufacturer
    .substring(0, 1)
    .toUpperCase()}${carManufacturer.slice(1).toLowerCase()}`;
  return cars[0][name];
};

const getSpecificCar = (carMan, Model) => {};

const getAllCarsOutofProduction = () => {};

const getAllCarsStillInProduction = () => {};

const getCarsByDate = (from, to) => {};

console.log(getCarsByManufacturer());
