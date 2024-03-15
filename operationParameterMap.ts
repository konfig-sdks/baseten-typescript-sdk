type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/models/{model_id}/deployments/{deployment_id}/autoscaling_settings-PATCH': {
        parameters: [
            {
                name: 'model_id'
            },
            {
                name: 'deployment_id'
            },
            {
                name: 'min_replica'
            },
            {
                name: 'max_replica'
            },
            {
                name: 'autoscaling_window'
            },
            {
                name: 'scale_down_delay'
            },
            {
                name: 'concurrency_target'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/development/autoscaling_settings-PATCH': {
        parameters: [
            {
                name: 'model_id'
            },
            {
                name: 'min_replica'
            },
            {
                name: 'max_replica'
            },
            {
                name: 'autoscaling_window'
            },
            {
                name: 'scale_down_delay'
            },
            {
                name: 'concurrency_target'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/production/autoscaling_settings-PATCH': {
        parameters: [
            {
                name: 'model_id'
            },
            {
                name: 'min_replica'
            },
            {
                name: 'max_replica'
            },
            {
                name: 'autoscaling_window'
            },
            {
                name: 'scale_down_delay'
            },
            {
                name: 'concurrency_target'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/{deployment_id}-GET': {
        parameters: [
            {
                name: 'model_id'
            },
            {
                name: 'deployment_id'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/development-GET': {
        parameters: [
            {
                name: 'model_id'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/production-GET': {
        parameters: [
            {
                name: 'model_id'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/development/promote-POST': {
        parameters: [
            {
                name: 'model_id'
            },
            {
                name: 'scale_down_previous_production'
            },
        ]
    },
    '/v1/models/{model_id}/deployments/{deployment_id}/promote-POST': {
        parameters: [
            {
                name: 'model_id'
            },
            {
                name: 'deployment_id'
            },
            {
                name: 'scale_down_previous_production'
            },
        ]
    },
    '/v1/models/{model_id}/deployments-GET': {
        parameters: [
            {
                name: 'model_id'
            },
        ]
    },
    '/v1/models-GET': {
        parameters: [
        ]
    },
    '/v1/models/{model_id}-GET': {
        parameters: [
            {
                name: 'model_id'
            },
        ]
    },
    '/v1/secrets-GET': {
        parameters: [
        ]
    },
    '/v1/secrets-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'value'
            },
        ]
    },
}