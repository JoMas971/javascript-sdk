import { Entity } from './entity';
import {
  CatalogJson, EntityType, ItemDownloadJson, MediaJson, MetadataJson, MetadataType,
  VappTemplateJson
} from './json';
import { Iland } from '../iland';
import { Vapp } from './vapp';
import { AxiosResponse } from 'axios';
import { Media } from './media';
import { VappTemplate } from './vapp-template';
import { Metadata } from './metadata';
import { TaskJson } from './json/task';
import { Task } from './task';

/**
 * Catalog.
 */
export class Catalog extends Entity {

  constructor(private _json: CatalogJson) {
    super(_json);
  }

  /**
   * Get the Catalog from API.
   * @param {string} uuid
   * @returns {Promise<Catalog>} promise that resolves with the Catalog
   */
  static async getCatalog(uuid: string): Promise<Catalog> {
    // TODO: Once the API implement the public keyword in uuid, we should remove this.
    // We make sure that we are using the original uuid not the overridden one...
    uuid = uuid.replace('public:', '');
    return Iland.getHttp().get(`/catalog/${uuid}`).then((response) => {
      const json = response.data as CatalogJson;
      return new Catalog(json);
    });
  }

  static async deleteCatalog(uuid: string): Promise<number> {
    // TODO: Once the API implement the public keyword in uuid, we should remove this.
    // We make sure that we are using the original uuid not the overridden one...
    uuid = uuid.replace('public:', '');
    return Iland.getHttp().delete(`/catalog/${uuid}`).then((response) => {
      return response.status;
    });
  }

  static async updateCatalog(catalogJson: CatalogJson, catalog: Catalog | undefined): Promise<Catalog> {
    // TODO: Once the API implement the public keyword in uuid, we should remove this.
    // We make sure that we are using the original uuid not the overridden one...
    catalogJson.uuid = catalogJson.uuid.replace('public:', '');
    return Iland.getHttp().put(`/catalog/${catalogJson.uuid}`, catalogJson).then((response) => {
      const json = response.data as CatalogJson;
      if (catalog !== undefined) {
        catalog.json = json;
        return catalog;
      } else {
        return new Catalog(json);
      }
    });
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Refreshes the Catalog data by retrieving it from the API again.
   * @returns {Promise<Catalog>} promise that resolves with the Catalog
   */
  async refresh(): Promise<Catalog> {
    return Iland.getHttp().get(`/catalog/${this.originalUuid}`).then((response) => {
      this._json = response.data as CatalogJson;
      return this;
    });
  }

  async delete(): Promise<number> {
    return Catalog.deleteCatalog(this.uuid);
  }

  async update(catalogJson: CatalogJson): Promise<Catalog> {
    return Catalog.updateCatalog(catalogJson, this);
  }

  async getItemDownloads(): Promise<Array<ItemDownloadJson>> {
    return Iland.getHttp().get(`/catalog/${this.originalUuid}/item-downloads`).then((response) => {
      return response.data as Array<ItemDownloadJson>;
    });
  }

  async getMediaUpload(resumableIdentifier: string, resumableChunkNumber: string,
                       resumableTotalChunks: string): Promise<AxiosResponse> {
    return Iland.getHttp().get(`/catalog/${this.originalUuid}/media/upload`, {
      params: {
        resumableIdentifier: resumableIdentifier,
        resumableChunkNumber: resumableChunkNumber,
        resumableTotalChunks: resumableTotalChunks
      }
    });
  }

  async getMedias(): Promise<Array<Media>> {
    return Iland.getHttp().get(`/catalog/${this.originalUuid}/medias`).then((response) => {
      const medias = response.data as Array<MediaJson>;
      return medias.map(media => new Media(media));
    });
  }

  async getVappTemplates(): Promise<Array<VappTemplate>> {
    return Iland.getHttp().get(`/catalog/${this.originalUuid}/vapp-templates`).then((response) => {
      const vappTemplates = response.data as Array<VappTemplateJson>;
      return vappTemplates.map(vappTemplate => new VappTemplate(vappTemplate));
    });
  }

  /**
   * Gets the Catalog's metadata.
   * @returns {Promise<Metadata<MetadataType>[]>}
   */
  async getMetadata(): Promise<Array<Metadata<MetadataType>>> {
    return Iland.getHttp().get(`/catalog/${this.originalUuid}/metadata`).then((response) => {
      const jsonMetadata = response.data as Array<MetadataJson<MetadataType>>;
      return jsonMetadata.map<Metadata<MetadataType>>((json) => {
        switch (json.type) {
          case 'number':
            return new Metadata<number>(json as MetadataJson<number>);
          case 'boolean':
            return new Metadata<boolean>(json as MetadataJson<boolean>);
          case 'datetime':
            return new Metadata<Date>(json as MetadataJson<Date>);
          case 'string':
            return new Metadata<string>(json as MetadataJson<string>);
        }
        throw new Error(`Metadata with type ${json.type} is unknown.`);
      });
    });
  }

  /**
   * Updates the Catalog's metadata.
   * @param {Array<MetadataJson<MetadataType>>} metadataJson the new array of metadata
   * @returns {Promise<Task>} task promise
   */
  async updateMetadata(metadataJson: Array<MetadataJson<MetadataType>>): Promise<Task> {
    return Iland.getHttp().put(`/catalog/${this.originalUuid}/metadata`, metadataJson).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Deletes a metadata entry.
   * @param {string} metadataKey the key of the metadata entry to delete
   * @returns {Promise<Task>} task promise
   */
  async deleteMetadata(metadataKey: string): Promise<Task> {
    return Iland.getHttp().delete(`/catalog/${this.uuid}/metadata/${metadataKey}`).then((response) => {
      const apiTask = response.data as TaskJson;
      return new Task(apiTask);
    });
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CatalogJson} the JSON representation
   */
  get json(): CatalogJson {
    return Object.assign({}, this._json);
  }

  get originalUuid(): string {
    return this._json.uuid;
  }

  get uuid(): string {
    return (this.isPublic && this.isShared) ? `public:${this._json.uuid}` : this._json.uuid;
  }

  /**
   * Get entity type for catalog.
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'CATALOG';
  }

  /**
   * Get location ID
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Indicate whether the catalog is shared or not.
   * @returns {boolean}
   */
  get isShared(): boolean {
    return this._json.shared;
  }

  /**
   * Indicate whether the catalog is public or not.
   * @returns {boolean}
   */
  get isPublic(): boolean {
    return this._json.public;
  }

  /**
   * Get the catalog version
   * @returns {number}
   */
  get version(): number {
    return this._json.version;
  }

  /**
   * Get org uuid for catalog.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get description for catalog
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get vCloudHref for catalog
   * @returns {string}
   */
  get vcloudHref(): string {
    return this._json.vcloud_href;
  }

  /**
   * Get the creation date
   * @returns {Date}
   */
  get createdDate(): Date {
    return new Date(this._json.created_date);
  }

  set locationId(value: string) {
    this._json.location_id = value;
  }

  set shared(value: boolean) {
    this._json.shared = value;
  }

  set public(value: boolean) {
    this._json.public = value;
  }

  set version(value: number) {
    this._json.version = value;
  }

  set orgUuid(value: string) {
    this._json.org_uuid = value;
  }

  set description(value: string) {
    this._json.description = value;
  }

  set vcloudHref(value: string) {
    this._json.vcloud_href = value;
  }

  set createdDate(value: Date) {
    this._json.created_date = value.getTime();
  }

  set json(value: CatalogJson) {
    this._json = value;
  }
}
