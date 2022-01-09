import { IAccount } from "common/interfaces/models/account.interfaces";
import { createContext } from "react";

export interface IAccountContext {
  account: IAccount | null;
  setAccount: (account: IAccount | null) => void;
}

export default createContext<IAccountContext>({
  account: null,
  setAccount: (account: IAccount | null) => {},
});
