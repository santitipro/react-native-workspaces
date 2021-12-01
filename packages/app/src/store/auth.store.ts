import { action, makeAutoObservable } from "mobx";

type Nullable<T> = T | undefined;

type User = {
  id: string;
  email: string;
};

class AuthStore {
  public isAuthenticated: boolean = false;
  public user: Nullable<User> = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public setIsLoggedIn(user: User): void {
    this.isAuthenticated = true;
    this.user = user;
  }
}

export default AuthStore;
