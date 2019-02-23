export interface Request {
  id: string;
  userName: string;
  userImage: string;
  driverName: string;
  date_created: Date;
  date_confirmed: Date;
  status: number;
}

export interface User {
  displayImage: string;
  username: string;
  email: string;
  phone: string;
  token: string;
}

export interface Driver extends User {
  status: number;
}
