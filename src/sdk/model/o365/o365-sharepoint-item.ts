import { O365SharePointItemJson } from './__json__/o365-sharepoint-item-json';

/**
 * O365 SharePoint Item
 */
/* istanbul ignore next: autogenerated */
export class O365SharePointItem {

  constructor(private _json: O365SharePointItemJson) {
  }

  /**
   * Gets the id of the SharePoint Item
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Gets the title of the SharePoint Item
   */
  get title(): string {
    return this._json.title;
  }

  /**
   * Gets the version of the SharePoint Item
   */
  get version(): string {
    return this._json.version;
  }

  /**
   * Gets the name of the SharePoint Item
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the created by of the SharePoint Item
   */
  get createdBy(): string {
    return this._json.created_by;
  }

  /**
   * Gets the creation time of the SharePoint Item
   */
  get creationTime(): number {
    return this._json.creation_time;
  }

  /**
   * Gets the modified by of the SharePoint Item
   */
  get modifiedBy(): string {
    return this._json.modified_by;
  }

  /**
   * Gets the modification time of the SharePoint Item
   */
  get modificationTime(): number {
    return this._json.modification_time;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365SharePointItemJson}
   */
  get json(): O365SharePointItemJson {
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
