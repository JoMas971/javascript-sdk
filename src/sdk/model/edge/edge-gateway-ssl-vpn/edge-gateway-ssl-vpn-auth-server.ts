import { EdgeGatewaySslVpnAuthServerJson } from './__json__/edge-gateway-ssl-vpn-auth-server-json';
import { EdgeGatewaySslVpnAuthServerType } from './edge-gateway-ssl-vpn-auth-server-type';

/* istanbul ignore next: autogenerated */
export class EdgeGatewaySslVpnAuthServer {

  constructor(private _json: EdgeGatewaySslVpnAuthServerJson) {
  }

  /**
   * Get auth server type.
   * @returns {EdgeGatewaySslVpnAuthServerType}
   */
  get authServerType(): EdgeGatewaySslVpnAuthServerType {
    return this._json.auth_server_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewaySslVpnAuthServerJson}
   */
  get json(): EdgeGatewaySslVpnAuthServerJson {
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