import { Service } from 'homebridge';
import { TuyaDeviceSchema } from '../../device/TuyaDevice';
import BaseAccessory from '../BaseAccessory';

export function configureWaterLevel(accessory: BaseAccessory, service: Service, schema?: TuyaDeviceSchema) {
  if (!schema) {
    return;
  }

  service.getCharacteristic(accessory.Characteristic.WaterLevel)
    .onGet(() => {
      const status = accessory.getStatus(schema.code)!;
      return status.value === 1 ? 100 : 0;
    });
}
