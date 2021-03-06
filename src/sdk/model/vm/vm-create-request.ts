import { VmCreateRequestJson } from './__json__/vm-create-request-json';
import { IpAddressingModeType } from '../common/__json__/ip-adressing-mode-type';

/**
 * Vm create request.
 */
/* istanbul ignore next: autogenerated */
export class VmCreateRequest {

  private readonly _json: VmCreateRequestJson;

  constructor(vmCreateRequest: VmCreateRequest);
  constructor(vmCreateRequestJson: VmCreateRequestJson);
  constructor(name: string, description: string, ipAddressMode: IpAddressingModeType, networkUuid: string,
              vappTemplateUuid: string, vmTemplateUuid: string, ipAddress: string, storageProfileUuid: string);
  constructor(firstParam: string | VmCreateRequest | VmCreateRequestJson, description?: string,
              ipAddressMode?: IpAddressingModeType, networkUuid?: string, vappTemplateUuid?: string,
              vmTemplateUuid?: string, ipAddress?: string, storageProfileUuid?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        ip_address_mode: ipAddressMode,
        network_uuid: networkUuid,
        vapp_template_uuid: vappTemplateUuid,
        vm_template_uuid: vmTemplateUuid,
        ip_address: ipAddress,
        storage_profile_uuid: storageProfileUuid
      } as VmCreateRequestJson;
    } else if (firstParam instanceof VmCreateRequest) {
      // Copy constructor
      this._json = (firstParam as VmCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VmCreateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get ip address mode.
   * @returns {IpAddressingMode}
   */
  get ipAddressMode(): IpAddressingModeType {
    return this._json.ip_address_mode;
  }

  /**
   * Get network uuid.
   * @returns {string}
   */
  get networkUuid(): string {
    return this._json.network_uuid;
  }

  /**
   * Get vapp template uuid.
   * @returns {string}
   */
  get vappTemplateUuid(): string {
    return this._json.vapp_template_uuid;
  }

  /**
   * Get vm template uuid.
   * @returns {string}
   */
  get vmTemplateUuid(): string {
    return this._json.vm_template_uuid;
  }

  /**
   * Get ip address.
   * @returns {string}
   */
  get ipAddress(): string {
    return this._json.ip_address;
  }

  /**
   * Get storage profile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmCreateRequestJson}
   */
  get json(): VmCreateRequestJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
