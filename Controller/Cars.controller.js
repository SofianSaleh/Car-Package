const cars = require('../cars');

class Cars {
  getCarManufacturers() {
    console.log('hi');
    return Object.keys(cars[0]);
  }

  getCarsByManufacturer(carManufacturer) {}

  getSpecificCar(carMan, Model) {}

  getAllCarsOutofProduction() {}

  getAllCarsStillInProduction() {}

  getCarsByDate(from, to) {}
}

module.exports = Cars;
