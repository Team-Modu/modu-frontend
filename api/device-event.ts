import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IDeviceEvent } from "common/interfaces/models/device-event.interfaces";
import { requests } from ".";

export const DeviceEvent = {
  getDeviceEvents: (config?: AxiosRequestConfig<any>) =>
    requests.get("device-events", config) as Promise<
      AxiosResponse<IDeviceEvent[], any>
    >,
};
