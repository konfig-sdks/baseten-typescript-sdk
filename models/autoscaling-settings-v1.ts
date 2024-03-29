/*
Baseten management API

REST API for management of Baseten resources

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Autoscaling settings for a deployment.
 * @export
 * @interface AutoscalingSettingsV1
 */
export interface AutoscalingSettingsV1 {
    /**
     * Minimum number of replicas
     * @type {number}
     * @memberof AutoscalingSettingsV1
     */
    'min_replica': number;
    /**
     * Maximum number of replicas
     * @type {number}
     * @memberof AutoscalingSettingsV1
     */
    'max_replica': number;
    /**
     * Timeframe of traffic considered for autoscaling decisions
     * @type {number}
     * @memberof AutoscalingSettingsV1
     */
    'autoscaling_window': number;
    /**
     * Waiting period before scaling down any active replica
     * @type {number}
     * @memberof AutoscalingSettingsV1
     */
    'scale_down_delay': number;
    /**
     * Number of requests per replica before scaling up
     * @type {number}
     * @memberof AutoscalingSettingsV1
     */
    'concurrency_target': number;
}

