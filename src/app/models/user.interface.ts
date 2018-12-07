export interface IUser {
  _id: string;
  admin: boolean;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ICredentials {
  email?: string;
  password: string;
  newPassword?: string;
}

export interface IToken {
  token: string;
}
