export interface IUserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}

export interface IUserCredential {
  username: string;
  password: string;
}
