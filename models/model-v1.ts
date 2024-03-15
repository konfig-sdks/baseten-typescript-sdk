/*
Baseten management API

REST API for management of Baseten resources

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A model.
 * @export
 * @interface ModelV1
 */
export interface ModelV1 {
    /**
     * Unique identifier of the model
     * @type {string}
     * @memberof ModelV1
     */
    'id': string;
    /**
     * Time the model was created in ISO 8601 format
     * @type {string}
     * @memberof ModelV1
     */
    'created_at': string;
    /**
     * Name of the model
     * @type {string}
     * @memberof ModelV1
     */
    'name': string;
    /**
     * Number of deployments of the model
     * @type {number}
     * @memberof ModelV1
     */
    'deployments_count': number;
    /**
     * Unique identifier of the production deployment of the model
     * @type {string}
     * @memberof ModelV1
     */
    'production_deployment_id': string;
    /**
     * Unique identifier of the development deployment of the model
     * @type {string}
     * @memberof ModelV1
     */
    'development_deployment_id': string;
    /**
     * Name of the instance type the model is deployed on
     * @type {string}
     * @memberof ModelV1
     */
    'instance_type_name': string;
}

