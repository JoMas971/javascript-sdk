import { EdgeGatewayDhcpRelayTypeJson } from './__json__/edge-gateway-dhcp-relay-type-json';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayDhcpRelayType {

  constructor(private _json: EdgeGatewayDhcpRelayTypeJson) {
  }

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayDhcpRelayTypeJson}
   */
  get json(): EdgeGatewayDhcpRelayTypeJson {
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
