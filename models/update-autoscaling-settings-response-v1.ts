/*
Baseten management API

REST API for management of Baseten resources

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UpdateAutoscalingSettingsStatusV1 } from './update-autoscaling-settings-status-v1';

/**
 * The response to a request to update autoscaling settings.
 * @export
 * @interface UpdateAutoscalingSettingsResponseV1
 */
export interface UpdateAutoscalingSettingsResponseV1 {
    /**
     * Status of the request to update autoscaling settings
     * @type {UpdateAutoscalingSettingsStatusV1}
     * @memberof UpdateAutoscalingSettingsResponseV1
     */
    'status': UpdateAutoscalingSettingsStatusV1;
    /**
     * A message describing the status of the request to update autoscaling settings
     * @type {string}
     * @memberof UpdateAutoscalingSettingsResponseV1
     */
    'message': string;
}

