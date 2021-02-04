"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarsByDate = exports.getAllCarsStillInProduction = exports.getAllCarsOutofProduction = exports.getSpecificCar = exports.getCarsByManufacturer = exports.getCarManufacturers = void 0;
// Mke the functions here like routes and call the controllers
const cars_1 = __importDefault(require("./cars"));
/**
 * returns an array of manufacturers name
 * @returns {Array<string>}
 */
const getCarManufacturers = () => {
    return Object.keys(cars_1.default[0]);
};
exports.getCarManufacturers = getCarManufacturers;
/**
 * returns a list of car based on the manufacturer
 * @param {string} carManufacturer
 * @returns {array<object>} an array of objects
 */
const getCarsByManufacturer = (carManufacturer) => {
    const name = `${carManufacturer
        .substring(0, 1)
        .toUpperCase()}${carManufacturer.slice(1).toLowerCase()}`;
    const carArr = cars_1.default[0];
    if (carArr[name]) {
        return carArr[name];
    }
    throw new Error(`Car was not found`);
};
exports.getCarsByManufacturer = getCarsByManufacturer;
/**
 *
 * @param {string} carMan car manufacturer where you enter the car name
 * @param {string} model Enter the model name
 */
const getSpecificCar = (carMan, model) => {
    const name = `${carMan.substring(0, 1).toUpperCase()}${carMan
        .slice(1)
        .toLowerCase()}`;
    const carModel = cars_1.default[0];
    if (carModel[name]) {
        for (let i = 0; i < carModel[name].length; i++) {
            if (carModel[name][i]['Car'].toLowerCase() == model.toLowerCase())
                return carModel[name][i];
        }
    }
    throw new Error('Car was not found');
};
exports.getSpecificCar = getSpecificCar;
/**
 * This function gets all the cars that went out of production
 */
const getAllCarsOutofProduction = () => {
    let arr = [];
    let vehicles = Object.values(cars_1.default[0]);
    for (const vehicle of vehicles) {
        for (let i = 0; i < vehicle.length; i++) {
            if (vehicle[i].Ended !== null)
                arr.push(vehicle[i]);
        }
    }
    return arr;
};
exports.getAllCarsOutofProduction = getAllCarsOutofProduction;
/**
 * This function gets all the vehicle that are still in production
 */
const getAllCarsStillInProduction = () => {
    let arr = [];
    let vehicles = Object.values(cars_1.default[0]);
    for (const vehicle of vehicles) {
        for (let i = 0; i < vehicle.length; i++) {
            if (vehicle[i].Ended === null)
                arr.push(vehicle[i]);
        }
    }
    return arr;
};
exports.getAllCarsStillInProduction = getAllCarsStillInProduction;
/**
 *
 * @param {string} from A year to start from
 * @param {string} to A year to finish from
 */
const getCarsByDate = (from, to = null) => {
    let arr = [];
    let vehicles = Object.values(cars_1.default[0]);
    for (const vehicle of vehicles) {
        for (let i = 0; i < vehicle.length; i++) {
            if (from >= Number(vehicle[i].Started)) {
                if (to === null) {
                    arr.push(vehicle[i]);
                }
                else if (to <= Number(vehicle[i].Ended)) {
                    arr.push(vehicle[i]);
                }
            }
        }
    }
    return arr;
};
exports.getCarsByDate = getCarsByDate;
//# sourceMappingURL=index.js.map