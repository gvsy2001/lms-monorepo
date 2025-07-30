import { IUser } from '../../models/User'; // adjust this import if needed

declare namespace Express {
  export interface Request {
    user?: IUser;
  }
}
