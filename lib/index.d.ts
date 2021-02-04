/**
 * returns an array of manufacturers name
 * @returns {Array<string>}
 */
declare const getCarManufacturers: () => any[];
/**
 * returns a list of car based on the manufacturer
 * @param {string} carManufacturer
 * @returns {array<object>} an array of objects
 */
declare const getCarsByManufacturer: (carManufacturer: string) => any[];
/**
 *
 * @param {string} carMan car manufacturer where you enter the car name
 * @param {string} model Enter the model name
 */
declare const getSpecificCar: (carMan: string, model: string) => any;
/**
 * This function gets all the cars that went out of production
 */
declare const getAllCarsOutofProduction: () => ({
    Car: string;
    Started: number;
    Ended: string;
} | {
    Car: string;
    Started: number;
    Ended: null;
} | {
    Car: string;
    Started: null;
    Ended: string;
})[];
/**
 * This function gets all the vehicle that are still in production
 */
declare const getAllCarsStillInProduction: () => ({
    Car: string;
    Started: number;
    Ended: string;
} | {
    Car: string;
    Started: number;
    Ended: null;
} | {
    Car: string;
    Started: null;
    Ended: string;
})[];
/**
 *
 * @param {string} from A year to start from
 * @param {string} to A year to finish from
 */
declare const getCarsByDate: (from: number, to?: number | null) => any[];
export { getCarManufacturers, getCarsByManufacturer, getSpecificCar, getAllCarsOutofProduction, getAllCarsStillInProduction, getCarsByDate, };
//# sourceMappingURL=index.d.ts.map