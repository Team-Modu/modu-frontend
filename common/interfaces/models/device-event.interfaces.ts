import { DeviceEventCategory } from "common/constants/device-event.constants";
import { ICore } from "./core.interfaces";

export interface IDeviceEvent extends ICore {
  category: DeviceEventCategory;
  userDeviceId: string;
  drvierDeviceId: string;
  busStopId: string;
}
