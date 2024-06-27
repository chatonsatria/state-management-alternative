import { atom, selector } from "recoil";

// login data state
export const userCredential = atom({
  key: "userCredential",
  default: {
    username: "emilys",
    password: "emilyspass",
  } as IUserCredential,
});
// user cred selector
export const userCredSelect = selector({
  key: "userCredSelect",
  get: ({ get }) => {
    const credential: IUserCredential = get(userCredential);
    return credential;
  },
});

// auth atom / variabel data
export const authState = atom({
  key: "authState", // unique ID (with respect to other atoms/selectors)
  default: {} as IUserData, // default value (aka initial value)
});
// user data selector
export const baseUserData = selector({
  key: "baseUserData", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const auth: IUserData = get(authState);
    const userData = {
      firstName: auth.firstName,
      lastName: auth.lastName,
      gender: auth.gender,
      image: auth.image,
    };
    return userData;
  },
});

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
