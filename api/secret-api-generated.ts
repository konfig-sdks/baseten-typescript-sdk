/* tslint:disable */
/* eslint-disable */
/*
Baseten management API

REST API for management of Baseten resources

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { SecretV1 } from '../models';
// @ts-ignore
import { SecretsV1 } from '../models';
// @ts-ignore
import { UpsertSecretRequestV1 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SecretApi - axios parameter creator
 * @export
 */
export const SecretApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets all secrets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSecrets: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/secrets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKeyAuth", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/secrets',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new secret or updates an existing secret if one with the provided name already exists. The name and creation date of the created or updated secret is returned.
         * @summary Upserts a secret
         * @param {UpsertSecretRequestV1} upsertSecretRequestV1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upsertNewSecret: async (upsertSecretRequestV1: UpsertSecretRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'upsertSecretRequestV1' is not null or undefined
            assertParamExists('upsertNewSecret', 'upsertSecretRequestV1', upsertSecretRequestV1)
            const localVarPath = `/v1/secrets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKeyAuth", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: upsertSecretRequestV1,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/secrets',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(upsertSecretRequestV1, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecretApi - functional programming interface
 * @export
 */
export const SecretApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SecretApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Gets all secrets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllSecrets(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecretsV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllSecrets(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new secret or updates an existing secret if one with the provided name already exists. The name and creation date of the created or updated secret is returned.
         * @summary Upserts a secret
         * @param {SecretApiUpsertNewSecretRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async upsertNewSecret(requestParameters: SecretApiUpsertNewSecretRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecretV1>> {
            const upsertSecretRequestV1: UpsertSecretRequestV1 = {
                name: requestParameters.name,
                value: requestParameters.value
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.upsertNewSecret(upsertSecretRequestV1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SecretApi - factory interface
 * @export
 */
export const SecretApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SecretApiFp(configuration)
    return {
        /**
         * 
         * @summary Gets all secrets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllSecrets(options?: AxiosRequestConfig): AxiosPromise<SecretsV1> {
            return localVarFp.getAllSecrets(options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new secret or updates an existing secret if one with the provided name already exists. The name and creation date of the created or updated secret is returned.
         * @summary Upserts a secret
         * @param {SecretApiUpsertNewSecretRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        upsertNewSecret(requestParameters: SecretApiUpsertNewSecretRequest, options?: AxiosRequestConfig): AxiosPromise<SecretV1> {
            return localVarFp.upsertNewSecret(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for upsertNewSecret operation in SecretApi.
 * @export
 * @interface SecretApiUpsertNewSecretRequest
 */
export type SecretApiUpsertNewSecretRequest = {
    
} & UpsertSecretRequestV1

/**
 * SecretApiGenerated - object-oriented interface
 * @export
 * @class SecretApiGenerated
 * @extends {BaseAPI}
 */
export class SecretApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Gets all secrets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecretApiGenerated
     */
    public getAllSecrets(options?: AxiosRequestConfig) {
        return SecretApiFp(this.configuration).getAllSecrets(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new secret or updates an existing secret if one with the provided name already exists. The name and creation date of the created or updated secret is returned.
     * @summary Upserts a secret
     * @param {SecretApiUpsertNewSecretRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecretApiGenerated
     */
    public upsertNewSecret(requestParameters: SecretApiUpsertNewSecretRequest, options?: AxiosRequestConfig) {
        return SecretApiFp(this.configuration).upsertNewSecret(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}