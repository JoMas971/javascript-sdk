import { O365MailboxJson } from './__json__/o365-mailbox-json';

/**
 * Office 365 Mailbox
 */
/* istanbul ignore next: autogenerated */
export class O365Mailbox {

  constructor(private _json: O365MailboxJson) {
  }

  /**
   * Gets the id of the O365 mailbox
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Gets the name of the O365 mailbox
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the email of the O365 mailbox
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Is O365 mailbox archived
   */
  get isArchive(): boolean {
    return this._json.archive;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365MailboxJson}
   */
  get json(): O365MailboxJson {
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
