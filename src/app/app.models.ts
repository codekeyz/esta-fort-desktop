export interface Request {
  id: string;
  userName: string;
  userImage: string;
  userID: string;
  driverName: string;
  driverTelephone: string;
  driverID: string;
  is_cancelled: string;
  is_completed: string;
  date_created: Date;
  date_confirmed: Date;
  status: number;
}

export interface User {
  displayImage: string;
  username: string;
  location: string;
  email: string;
  phone: string;
  token: string;
}

export interface Driver extends User {
  status: number;
}
