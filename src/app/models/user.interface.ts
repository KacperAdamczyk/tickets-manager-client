export interface IUser {
  _id: string;
  admin: boolean;
  email: string;
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}
