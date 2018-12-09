import { TokenPurpose } from '../services/user/user.service';

export interface IUser {
  _id: string;
  admin: boolean;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ICredentials {
  email?: string;
  password?: string;
  oldPassword?: string;
}

export interface IToken {
  token: string;
  purpose?: TokenPurpose;
}
