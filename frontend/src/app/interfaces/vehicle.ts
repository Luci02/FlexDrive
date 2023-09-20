export interface Vehicle {

  id?: Number;
  brand: {
    name: string;
  }
  model: string;
  trim: string;
  engineType: string;
  mileage: Number;
  rentDuration: Number;
  transmission: string;
  price: Number;
  imgPath: string;

}
