import { Car } from 'Vehicle/Car';
import { Garage } from 'Garage/Garage';

try {
  const garage = new Garage(2);

  const car1 = new Car(10, 10);
  const car2 = new Car(20, 10);

  const ticket1 = garage.park(car1);
  const ticket2 = garage.park(car2);

  garage.takeVehicleOut(ticket1);
  garage.takeVehicleOut(ticket2);
} catch (error) {
  console.error('Error:', error);
}
