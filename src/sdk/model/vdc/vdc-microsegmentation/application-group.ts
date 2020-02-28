import { ApplicationGroupJson } from './__json__/application-group-json';
import { Member } from './member';

/**
 * Application Group
 */
/* istanbul ignore next: autogenerated */
export class ApplicationGroup {

  constructor(private _json: ApplicationGroupJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get inheritance allowed.
   * @returns {boolean}
   */
  get inheritanceAllowed(): boolean {
    return this._json.inheritance_allowed;
  }

  /**
   * Get members.
   * @returns {Array<Member>}
   */
  get members(): Array<Member> {
    return this._json.members.map(it => new Member(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {ApplicationGroupJson}
   */
  get json(): ApplicationGroupJson {
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