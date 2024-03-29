/*
Baseten management API

REST API for management of Baseten resources

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A Baseten secret. Note that we do not support retrieving secret values.
 * @export
 * @interface SecretV1
 */
export interface SecretV1 {
    /**
     * Time the secret was created in ISO 8601 format
     * @type {string}
     * @memberof SecretV1
     */
    'created_at': string;
    /**
     * Name of the secret
     * @type {string}
     * @memberof SecretV1
     */
    'name': string;
}

