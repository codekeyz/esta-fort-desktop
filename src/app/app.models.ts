export interface Request {
  id: string;
  user: User;
  request: string;
  date_created: Date;
  date_confirmed: Date;
  status: number;
  type: number;
}

export interface User {
  displayImage: string;
  username: string;
  email: string;
  phone: string;
}
