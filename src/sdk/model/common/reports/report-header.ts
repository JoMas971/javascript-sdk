import { ReportHeaderJson } from '../__json__/report-header-json';
import { ReportTypeJson } from '../__json__/report-type-json';
import { ReportFormat } from '../__json__/report-format';

/* istanbul ignore next: autogenerated */
export class ReportHeader {

  constructor(private _json: ReportHeaderJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get entity uuid.
   * @returns {string}
   */
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Get report type.
   * @returns {ReportTypeJson}
   */
  get reportType(): ReportTypeJson {
    return this._json.report_type;
  }

  /**
   * Get file type.
   * @returns {ReportFormat}
   */
  get fileType(): ReportFormat {
    return this._json.file_type;
  }

  /**
   * Get created.
   * @returns {number}
   */
  get created(): number {
    return this._json.created;
  }

  /**
   * Get the json representation of this class.
   * @returns {ReportHeaderJson}
   */
  get json(): ReportHeaderJson {
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
