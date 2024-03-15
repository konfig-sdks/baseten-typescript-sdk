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
import { DeploymentV1 } from '../models';
// @ts-ignore
import { DeploymentsV1 } from '../models';
// @ts-ignore
import { ModelV1 } from '../models';
// @ts-ignore
import { ModelsV1 } from '../models';
// @ts-ignore
import { PromoteRequestV1 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ModelApi - axios parameter creator
 * @export
 */
export const ModelApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new production deployment from the development deployment, the currently building deployment is returned.
         * @summary Promotes a development deployment to production
         * @param {string} modelId 
         * @param {PromoteRequestV1} promoteRequestV1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployPromote: async (modelId: string, promoteRequestV1: PromoteRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('deployPromote', 'modelId', modelId)
            // verify required parameter 'promoteRequestV1' is not null or undefined
            assertParamExists('deployPromote', 'promoteRequestV1', promoteRequestV1)
            const localVarPath = `/v1/models/{model_id}/deployments/development/promote`
                .replace(`{${"model_id"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-model_id-`)));
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
                requestBody: promoteRequestV1,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/models/{model_id}/deployments/development/promote',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(promoteRequestV1, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Promotes an existing deployment to production and returns the same deployment.
         * @summary Promotes a deployment to production
         * @param {string} modelId 
         * @param {string} deploymentId 
         * @param {PromoteRequestV1} promoteRequestV1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deploymentPromote: async (modelId: string, deploymentId: string, promoteRequestV1: PromoteRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('deploymentPromote', 'modelId', modelId)
            // verify required parameter 'deploymentId' is not null or undefined
            assertParamExists('deploymentPromote', 'deploymentId', deploymentId)
            // verify required parameter 'promoteRequestV1' is not null or undefined
            assertParamExists('deploymentPromote', 'promoteRequestV1', promoteRequestV1)
            const localVarPath = `/v1/models/{model_id}/deployments/{deployment_id}/promote`
                .replace(`{${"model_id"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-model_id-`)))
                .replace(`{${"deployment_id"}}`, encodeURIComponent(String(deploymentId !== undefined ? deploymentId : `-deployment_id-`)));
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
                requestBody: promoteRequestV1,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/models/{model_id}/deployments/{deployment_id}/promote',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(promoteRequestV1, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all deployments of a model
         * @param {string} modelId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllDeployments: async (modelId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('getAllDeployments', 'modelId', modelId)
            const localVarPath = `/v1/models/{model_id}/deployments`
                .replace(`{${"model_id"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-model_id-`)));
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
                pathTemplate: '/v1/models/{model_id}/deployments',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets all models
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllModels: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/models`;
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
                pathTemplate: '/v1/models',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets a model by ID
         * @param {string} modelId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getModelById: async (modelId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelId' is not null or undefined
            assertParamExists('getModelById', 'modelId', modelId)
            const localVarPath = `/v1/models/{model_id}`
                .replace(`{${"model_id"}}`, encodeURIComponent(String(modelId !== undefined ? modelId : `-model_id-`)));
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
                pathTemplate: '/v1/models/{model_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ModelApi - functional programming interface
 * @export
 */
export const ModelApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModelApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new production deployment from the development deployment, the currently building deployment is returned.
         * @summary Promotes a development deployment to production
         * @param {ModelApiDeployPromoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deployPromote(requestParameters: ModelApiDeployPromoteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentV1>> {
            const promoteRequestV1: PromoteRequestV1 = {
                scale_down_previous_production: requestParameters.scale_down_previous_production
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployPromote(requestParameters.modelId, promoteRequestV1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Promotes an existing deployment to production and returns the same deployment.
         * @summary Promotes a deployment to production
         * @param {ModelApiDeploymentPromoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deploymentPromote(requestParameters: ModelApiDeploymentPromoteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentV1>> {
            const promoteRequestV1: PromoteRequestV1 = {
                scale_down_previous_production: requestParameters.scale_down_previous_production
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.deploymentPromote(requestParameters.modelId, requestParameters.deploymentId, promoteRequestV1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all deployments of a model
         * @param {ModelApiGetAllDeploymentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllDeployments(requestParameters: ModelApiGetAllDeploymentsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeploymentsV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllDeployments(requestParameters.modelId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets all models
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllModels(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelsV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllModels(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Gets a model by ID
         * @param {ModelApiGetModelByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getModelById(requestParameters: ModelApiGetModelByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getModelById(requestParameters.modelId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModelApi - factory interface
 * @export
 */
export const ModelApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModelApiFp(configuration)
    return {
        /**
         * Creates a new production deployment from the development deployment, the currently building deployment is returned.
         * @summary Promotes a development deployment to production
         * @param {ModelApiDeployPromoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployPromote(requestParameters: ModelApiDeployPromoteRequest, options?: AxiosRequestConfig): AxiosPromise<DeploymentV1> {
            return localVarFp.deployPromote(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Promotes an existing deployment to production and returns the same deployment.
         * @summary Promotes a deployment to production
         * @param {ModelApiDeploymentPromoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deploymentPromote(requestParameters: ModelApiDeploymentPromoteRequest, options?: AxiosRequestConfig): AxiosPromise<DeploymentV1> {
            return localVarFp.deploymentPromote(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all deployments of a model
         * @param {ModelApiGetAllDeploymentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllDeployments(requestParameters: ModelApiGetAllDeploymentsRequest, options?: AxiosRequestConfig): AxiosPromise<DeploymentsV1> {
            return localVarFp.getAllDeployments(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all models
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllModels(options?: AxiosRequestConfig): AxiosPromise<ModelsV1> {
            return localVarFp.getAllModels(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets a model by ID
         * @param {ModelApiGetModelByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getModelById(requestParameters: ModelApiGetModelByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ModelV1> {
            return localVarFp.getModelById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deployPromote operation in ModelApi.
 * @export
 * @interface ModelApiDeployPromoteRequest
 */
export type ModelApiDeployPromoteRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ModelApiDeployPromote
    */
    readonly modelId: string
    
} & PromoteRequestV1

/**
 * Request parameters for deploymentPromote operation in ModelApi.
 * @export
 * @interface ModelApiDeploymentPromoteRequest
 */
export type ModelApiDeploymentPromoteRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ModelApiDeploymentPromote
    */
    readonly modelId: string
    
    /**
    * 
    * @type {string}
    * @memberof ModelApiDeploymentPromote
    */
    readonly deploymentId: string
    
} & PromoteRequestV1

/**
 * Request parameters for getAllDeployments operation in ModelApi.
 * @export
 * @interface ModelApiGetAllDeploymentsRequest
 */
export type ModelApiGetAllDeploymentsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ModelApiGetAllDeployments
    */
    readonly modelId: string
    
}

/**
 * Request parameters for getModelById operation in ModelApi.
 * @export
 * @interface ModelApiGetModelByIdRequest
 */
export type ModelApiGetModelByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ModelApiGetModelById
    */
    readonly modelId: string
    
}

/**
 * ModelApiGenerated - object-oriented interface
 * @export
 * @class ModelApiGenerated
 * @extends {BaseAPI}
 */
export class ModelApiGenerated extends BaseAPI {
    /**
     * Creates a new production deployment from the development deployment, the currently building deployment is returned.
     * @summary Promotes a development deployment to production
     * @param {ModelApiDeployPromoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelApiGenerated
     */
    public deployPromote(requestParameters: ModelApiDeployPromoteRequest, options?: AxiosRequestConfig) {
        return ModelApiFp(this.configuration).deployPromote(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Promotes an existing deployment to production and returns the same deployment.
     * @summary Promotes a deployment to production
     * @param {ModelApiDeploymentPromoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelApiGenerated
     */
    public deploymentPromote(requestParameters: ModelApiDeploymentPromoteRequest, options?: AxiosRequestConfig) {
        return ModelApiFp(this.configuration).deploymentPromote(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all deployments of a model
     * @param {ModelApiGetAllDeploymentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelApiGenerated
     */
    public getAllDeployments(requestParameters: ModelApiGetAllDeploymentsRequest, options?: AxiosRequestConfig) {
        return ModelApiFp(this.configuration).getAllDeployments(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all models
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelApiGenerated
     */
    public getAllModels(options?: AxiosRequestConfig) {
        return ModelApiFp(this.configuration).getAllModels(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets a model by ID
     * @param {ModelApiGetModelByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelApiGenerated
     */
    public getModelById(requestParameters: ModelApiGetModelByIdRequest, options?: AxiosRequestConfig) {
        return ModelApiFp(this.configuration).getModelById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}