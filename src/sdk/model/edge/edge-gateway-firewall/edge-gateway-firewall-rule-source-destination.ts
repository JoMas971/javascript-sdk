import {
  EdgeGatewayFirewallRuleSourceDestinationJson
} from './__json__/edge-gateway-firewall-rule-source-destination-json';

/**
 * Firewall Rule Source Destination
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayFirewallRuleSourceDestination {

  constructor(private _json: EdgeGatewayFirewallRuleSourceDestinationJson) {}

  /**
   * Get exclude.
   * @returns {boolean}
   */
  get exclude(): boolean {
    return this._json.exclude;
  }

  /**
   * Get ip addresses.
   * @returns {Array<string>}
   */
  get ipAddresses(): Array<string> {
    return this._json.ip_addresses;
  }

  /**
   * Get grouping object id.
   * @returns {Array<string>}
   */
  get groupingObjectId(): Array<string> {
    return this._json.grouping_object_id;
  }

  /**
   * Get vnic group id.
   * @returns {Array<string>}
   */
  get vnicGroupId(): Array<string> {
    return this._json.vnic_group_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayFirewallRuleSourceDestinationJson}
   */
  get json(): EdgeGatewayFirewallRuleSourceDestinationJson {
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
