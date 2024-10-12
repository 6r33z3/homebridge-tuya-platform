import { Service } from 'homebridge';
import { TuyaDeviceSchema } from '../../device/TuyaDevice';
import BaseAccessory from '../BaseAccessory';

export function configureStatusFault(accessory: BaseAccessory, service: Service, schema?: TuyaDeviceSchema) {
  if (!schema) {
    return;
  }

  service.getCharacteristic(accessory.Characteristic.StatusFault)
    .onGet(() => {
      const status = accessory.getStatus(schema.code)!;
      console.log(status.value);
      return (status.value === 'tankfull');
    });
}
