export class User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export class UserProfile {
  id: number;
  user: User;
  phoneNumber: string;
}

export class LoginResponse {
  token: string;
}

export class Advertisement {
  id: number;
  brand: string;
  model: string;
  country: string;
  status: string;
  body: string;
  typeOfEngine: string;
  transmission: string;
  steeringWheel: string;
  driveWheel: string;
  mileage: number;
  engineCapacity: number;
  yearOfManufacture: number;
  color: string;
  description: string;
  price: number;
  imageBase: string;
  image1: string;
  image2: string;
  userProfile: UserProfile;
}
