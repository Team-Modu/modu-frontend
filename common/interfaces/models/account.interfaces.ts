import { Role } from "common/constants/account.constants";
import { ICoreSoftDelete } from "./core.interfaces";

export interface IAccount extends ICoreSoftDelete {
  userId: string;
  username: string;
  role: Role;
}
