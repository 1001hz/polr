export class User {

  public id: string;
  public token: string;
  public fname: string;
  public lname: string;
  public username: string;
  public email: string;
  public avatar: string;

  setUsername(val) {
    this.username = val;
  }

  setFname(val) {
    this.fname = val;
  }

  setLname(val) {
    this.lname = val;
  }

  setToken(val) {
    this.token = val;
  }

  makeFromApiData(response) {
    this.id = response._id;
    this.username = response.username;
    this.fname = response.fname ? response.fname : '';
    this.lname = response.lname ? response.lname : '';
    this.token = response.token ? response.token : '';
  }
}
