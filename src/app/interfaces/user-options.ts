
export interface UserOptions {
  username: string;
  password: string;
}

export interface userModel {
  newUser: {
    Lastname: '',
    Firstname: '',
    Birthday: '',
    Age: null,
    Address: '',
    Marital_status: '',
    Email: '',
    Contact_number: null,
    Facebook: '',
    Instagram: '',
    Twitter: '',
  }, groupBelong: {
    Leader: ''
  }, role: {
    code: 'Member'
  }
}