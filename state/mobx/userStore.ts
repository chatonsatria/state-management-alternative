import { makeAutoObservable } from "mobx";
import { IUserData } from "../types";

export class UserStore {
  user = {} as IUserData;

  constructor() {
    makeAutoObservable(this);
  }

  loginSuccess = (userData: IUserData) => {
    this.user = userData;
  };

  get userFirstName(): string {
    return this.user.firstName;
  }
}

const userStore = new UserStore();
export default userStore;
