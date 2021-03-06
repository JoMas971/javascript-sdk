import { FailoverTestParamsRequestJson } from './__json__/failover-test-params-request-json';

/* istanbul ignore next: autogenerated */
export class FailoverTestParamsRequest {

  private readonly _json: FailoverTestParamsRequestJson;

  constructor(failoverTestParamsRequest: FailoverTestParamsRequest);
  constructor(failoverTestParamsRequestJson: FailoverTestParamsRequestJson);
  constructor(checkpointId: string);
  constructor(firstParam: string | FailoverTestParamsRequest | FailoverTestParamsRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        checkpoint_id: firstParam
      } as FailoverTestParamsRequestJson;
    } else if (firstParam instanceof FailoverTestParamsRequest) {
      // Copy constructor
      this._json = (firstParam as FailoverTestParamsRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as FailoverTestParamsRequestJson;
    }
  }

  /**
   * Get checkpoint id.
   * @returns {string}
   */
  get checkpointId(): string {
    return this._json.checkpoint_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {FailoverTestParamsRequestJson}
   */
  get json(): FailoverTestParamsRequestJson {
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
