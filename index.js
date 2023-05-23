// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice (0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice (-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
    return function (value) {
        return (fare * value)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, func) => func(drivers)
    