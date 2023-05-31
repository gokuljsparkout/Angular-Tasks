export class AuthService {
  isLoggedin = false;

  login() {
    return (this.isLoggedin = true);
  }
  logout() {
    return (this.isLoggedin = false);
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedin);
      }, 500);
    });
    return promise;
  }
}
