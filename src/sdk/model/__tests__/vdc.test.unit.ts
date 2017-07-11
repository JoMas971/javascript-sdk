import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { Vdc } from '../vdc';
import { MockVdcJson } from '../../__mocks__/responses/vdc/vdc';
import { MockVdcVmsJson } from '../../__mocks__/responses/vdc/vms';
import { MockVdcVappsJson } from '../../__mocks__/responses/vdc/vapps';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Properly submits request to get vDC', async() => {
  let uuid = 'test-vdc-uuid';
  Vdc.getVdc(uuid).then(function(vdc) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdc/${uuid}`);
    expect(vdc.getEntityType()).toBe('VDC');
  });
});

test('Properly submits request to get vDCs child vApps', async() => {
  let vdc = new Vdc(MockVdcJson);
  return vdc.getVapps().then(function(vapps) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdc/${vdc.getUuid()}/vapps`);
    expect(vapps.length).toBe(MockVdcVappsJson.length);
    let idx = 0;
    for (let vapp of vapps) {
      expect(vapp.getJson()).toEqual(MockVdcVappsJson[idx]);
      idx++;
    }
  });
});

test('Properly submits request to get vDCs child VMs', async() => {
  let vdc = new Vdc(MockVdcJson);
  return vdc.getVms().then(function(vms) {
    expect(Iland.getHttp().get).lastCalledWith(`/vdc/${vdc.getUuid()}/vms`);
    expect(vms.length).toBe(MockVdcVmsJson.length);
    let idx = 0;
    for (let vm of vms) {
      expect(vm.getJson()).toEqual(MockVdcVmsJson[idx]);
      idx++;
    }
  });
});
