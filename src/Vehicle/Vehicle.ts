export abstract class Vehicle {
  private static _id: number = 0;

  protected id: string = '';

  constructor(
    protected width: number,
    protected height: number
  ) {
    this.id = this.generateId();
  }

  generateId(): string {
    Vehicle._id++;
    return Vehicle._id.toString();
  }

  getId(): string {
    return this.id;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}
