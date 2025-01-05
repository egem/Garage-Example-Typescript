import { ParkingInfo } from 'Garage/Models/ParkingInfo.model';
import { Vehicle } from 'Vehicle/Vehicle';

export class GarageIsFull extends Error {
  constructor(message = '') {
    super(`Garage is full: ${message}`);
  }
}

export class HasAlreadyParked extends Error {
  constructor(message = '') {
    super(`Has already parked: ${message}`);
  }
}

export class VehicleNotFound extends Error {
  constructor(public vehicleId: string) {
    super(`Vehicle not found: ${vehicleId}`);
  }
}

export class Garage {
  readonly DefaultCapacity = 1;
  private static ticketId = 1;

  private parkingInfoMap = new Map<string, ParkingInfo>()

  constructor(
    private capacity = this.DefaultCapacity
  ) {}

  park(vehicle: Vehicle): ParkingInfo {
    if (this.parkingInfoMap.size >= this.capacity) {
      throw new GarageIsFull();
    }

    const hasParked = this.parkingInfoMap.has(vehicle.getId());

    if (hasParked) {
      throw new HasAlreadyParked();
    }

    const parkingInfo: ParkingInfo = {
      ticketId: (Garage.ticketId++).toString(),
      vehicleId: vehicle.getId()
    };

    this.parkingInfoMap.set(vehicle.getId(), parkingInfo);

    return parkingInfo;
  }

  takeVehicleOut(parkingInfo: ParkingInfo): void {
    const result = this.parkingInfoMap.delete(parkingInfo.vehicleId);

    if (!result) {
      throw new VehicleNotFound(parkingInfo.vehicleId);
    }

    return;
  }
}
