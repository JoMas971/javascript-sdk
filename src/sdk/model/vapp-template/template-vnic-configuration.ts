import { IpAddressingModeType } from '../common/__json__/ip-adressing-mode-type';
import { AdapterType } from '../common/__json__/adapter-type';
import { TemplateVnicConfigurationJson } from './__json__/template-vnic-configuration-json';

/**
 * Template VNIC Configuration Response.
 */
/* istanbul ignore next: autogenerated */
export class TemplateVnicConfiguration {

  constructor(private _json: TemplateVnicConfigurationJson) {
  }

  /**
   * Get network name.
   * @returns {string}
   */
  get networkName(): string {
    return this._json.network_name;
  }

  /**
   * Get ip assignment mode.
   * @returns {IpAddressingModeType}
   */
  get ipAssignmentMode(): IpAddressingModeType {
    return this._json.ip_assignment_mode;
  }

  /**
   * Get ip address.
   * @returns {string}
   */
  get ipAddress(): string {
    return this._json.ip_address;
  }

  /**
   * Get primary vnic.
   * @returns {boolean}
   */
  get primaryVnic(): boolean {
    return this._json.primary_vnic;
  }

  /**
   * Get network adapter type.
   * @returns {AdapterType}
   */
  get networkAdapterType(): AdapterType {
    return this._json.network_adapter_type;
  }

  /**
   * Get needs customization.
   * @returns {boolean}
   */
  get needsCustomization(): boolean {
    return this._json.needs_customization;
  }

  /**
   * Get connected.
   * @returns {boolean}
   */
  get connected(): boolean {
    return this._json.connected;
  }

  /**
   * Get the json representation of this class.
   * @returns {TemplateVnicConfigurationJson}
   */
  get json(): TemplateVnicConfigurationJson {
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
