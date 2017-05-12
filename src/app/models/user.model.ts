export class User {

  public id: string;
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
}
