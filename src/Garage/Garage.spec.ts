import { Car } from 'Vehicle/Car';
import { Garage, GarageIsFull, HasAlreadyParked, VehicleNotFound } from './Garage';


describe('Parking to garage', () => {
  it('should park if there is space', () => {
    try {
      const garage = new Garage(1);

      const car = new Car(10, 10);

      garage.park(car);
    } catch (error) {
      fail(`Exception thrown: ${error}`);
    }
  });

  it('should throw garage is full exception in case there is not any space', () => {
    try {
      const garage = new Garage(1);

      const car1 = new Car(10, 10);
      const car2 = new Car(10, 10);

      garage.park(car1);
      garage.park(car2);
    } catch (error) {
      if (error instanceof GarageIsFull) {
        return;
      }
    }

    fail('Test should throw GarageIsFull');
  });

  it('should throw error if trying to park same car ', () => {
    try {
      const garage = new Garage(2);

      const car1 = new Car(10, 10);

      garage.park(car1);
      garage.park(car1);
    } catch (error) {
      if (error instanceof HasAlreadyParked) {
        return;
      }
    }

    fail('Test should throw HasAlreadyParked');
  });
});

describe('Taking vehicle out from garage', () => {
  it('should work correctly in case car is in garage', () => {
    try {
      const garage = new Garage(1);

      const car = new Car(10, 10);

      const ticket = garage.park(car);
      garage.takeVehicleOut(ticket);
    } catch (error) {
      fail(`Exception thrown: ${error}`);
    }
  });

  it('should throw VehicleNotFound in case car is not in garage', () => {
    try {
      const garage = new Garage(1);

      const car1 = new Car(10, 10);

      const ticket = garage.park(car1);
      garage.takeVehicleOut(ticket);
      garage.takeVehicleOut(ticket);
    } catch (error) {
      if (error instanceof VehicleNotFound) {
        return;
      }
    }

    fail('Test should throw VehicleNotFound');
  });
});
