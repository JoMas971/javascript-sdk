import {
    O365RestoreSessionEventJson,
    O365RestoreSessionEventStatus,
    O365RestoreSessionEventType
} from './__json__/o365-restore-session-event-json';

/**
 * O365 Restore Session Event
 */
/* istanbul ignore next: autogenerated */
export class O365RestoreSessionEvent {

  constructor(private _json: O365RestoreSessionEventJson) {
  }

  /**
   * Get the item size in bytes
   */
  get itemSizeBytes(): number {
    return this._json.item_size_bytes;
  }

  /**
   * Get id for Restore Session Event
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Get the type for Restore Session Event
   */
  get type(): O365RestoreSessionEventType {
    return this._json.type;
  }

  /**
   * Get the status for Restore Session Event
   */
  get status(): O365RestoreSessionEventStatus {
    return this._json.status;
  }

  /**
   * Get the start time for Restore Session Event
   */
  get startTime(): number {
    return this._json.start_time;
  }

  /**
   * Get the end time for Restore Session Event
   */
  get endTime(): number {
    return this._json.end_time;
  }

  /**
   * Get the duration for Restore Session Event
   */
  get duration(): number {
    return this._json.duration;
  }

  /**
   * Get the title for Restore Session Event
   */
  get title(): string {
    return this._json.title;
  }

  /**
   * Get the order for Restore Session Event
   */
  get order(): number {
    return this._json.order;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365RestoreSessionEventJson}
   */
  get json(): O365RestoreSessionEventJson {
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
