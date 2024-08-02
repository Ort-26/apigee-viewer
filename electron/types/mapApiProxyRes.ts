export interface IApigeePolitic {
    type: "mediation" | "security"
    name: string
}

export interface IApigeeFlow {
	name: string
	request: IApigeePolitic[]
	response: IApigeePolitic[]
}

export interface IApiProxyFlows {
	PreFlow: IApigeeFlow[],
	PostFlow: IApigeeFlow[],
	ConditionalFlow: IApigeeFlow[]
}

export interface IApiProxyUniqueStruct {
	proxyEndpoint: IApiProxyFlows
	targetEndpoint: IApiProxyFlows
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