import { observable, action, decorate } from "mobx";

class CommonStore {
  loggedUser = undefined;
  authToken = undefined;

  setLoggedUser(user) {
    this.loggedUser = user;
  }

  setAuthToken(token) {
    this.authToken = token;
  }
}

decorate(CommonStore, {
  loggedUser: observable,
  authToken: observable,

  setLoggedUser: action,
  setAuthToken: action,
});

export default new CommonStore();
