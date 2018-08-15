import { EventListJson } from './__json__/event-list-json';
import { EventFilterParams } from './event-filter-params';
import { Event } from './event';

/**
 * Class EventList
 */
/* istanbul ignore next: autogenerated */
export class EventList {

  constructor(private _json: EventListJson) {
  }

  /**
   * Get current page parameters.
   * @returns {EventFilterParams}
   */
  get currentPageParameters(): EventFilterParams {
    return new EventFilterParams(this._json.current_page_parameters);
  }

  /**
   * Get next page parameters.
   * @returns {EventFilterParams}
   */
  get nextPageParameters(): EventFilterParams {
    return new EventFilterParams(this._json.next_page_parameters);
  }

  /**
   * Get total records.
   * @returns {number}
   */
  get totalRecords(): number {
    return this._json.total_records;
  }

  /**
   * Get last page.
   * @returns {boolean}
   */
  get lastPage(): boolean {
    return this._json.last_page;
  }

  /**
   * Get data.
   * @returns {Array<Event>}
   */
  get data(): Array<Event> {
    return this._json.data.map(event => {
      return new Event(event);
    });
  }

  /**
   * Get the json representation of this class.
   * @returns {EventListJson}
   */
  get json(): EventListJson {
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
