export interface IApigeePolitic {
    type: "mediation" | "security"
    name: string
}

export interface IApigeeSteps {
    preflow: IApigeePolitic[]
    conditionalFlow: IApigeePolitic[]
    postflow: IApigeePolitic[]
}

export interface IApiProxyUniqueStruct {
    request: {
        proxyEndpoint: IApigeeSteps,
        targetEndpoint: IApigeeSteps
    }
    response: {
        proxyEndpoint: IApigeeSteps,
        targetEndpoint: IApigeeSteps
    }
}

export interface IApiProxyStruct {
    name: string
    struct: IApiProxyUniqueStruct
}
/*
{
	"ProxyEndpoint": {
		"Description": "",
		"FaultRules": "",
		"PreFlow": {
			"Request": {
				"Step": [
					{
						"Name": "check-quota"
					},
					{
						"Name": "add-cors",
						"Condition": "request.verb == \"OPTIONS\""
					}
				]
			},
			"Response": "",
			"_name": "PreFlow"
		},
		"PostFlow": {
			"Request": "",
			"Response": "",
			"_name": "PostFlow"
		},
		"Flows": "",
		"HTTPProxyConnection": {
			"BasePath": "/v0/hello",
			"Properties": "",
			"VirtualHost": [
				"default",
				"secure"
			]
		},
		"RouteRule": [
			{
				"Condition": "request.verb == \"OPTIONS\"",
				"_name": "preflight"
			},
			{
				"TargetEndpoint": "default",
				"_name": "default"
			}
		],
		"_name": "default"
	}
}
*/