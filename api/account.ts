import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAccount } from "common/interfaces/models/account.interfaces";
import { requests } from ".";

export const Account = {
  login: (body: {}, config?: AxiosRequestConfig<any>) =>
    requests.post("accounts/login", body, config) as Promise<
      AxiosResponse<{}, any>
    >,
  logout: (config?: AxiosRequestConfig<any>) =>
    requests.post("accounts/logout", {}, config) as Promise<
      AxiosResponse<void, any>
    >,
  auth: (config?: AxiosRequestConfig<any>) =>
    requests.post("accounts/auth", {}, config) as Promise<
      AxiosResponse<IAccount, any>
    >,
};
