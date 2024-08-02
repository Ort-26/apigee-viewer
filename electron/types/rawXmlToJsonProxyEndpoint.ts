export interface RawProxyEndpoint {
    $: GeneratedType
    Description: string[]
    FaultRules: FaultRule[]
    PreFlow: PreFlow[]
    PostFlow: PostFlow[]
    Flows: Flow[]
    HTTPProxyConnection: HttpproxyConnection[]
    RouteRule: RouteRule[]
  }
  
  export interface GeneratedType {
    name: string
  }
  
  export interface FaultRule {
    FaultRule: FaultRule2[]
  }
  
  export interface FaultRule2 {
    $: GeneratedType2
    Condition: string[]
    Step: Step[]
  }
  
  export interface GeneratedType2 {
    name: string
  }
  
  export interface Step {
    Condition: string[]
    Name: string[]
  }
  
  export interface PreFlow {
    $: GeneratedType3
    Request: Request[]
    Response: string[]
  }
  
  export interface GeneratedType3 {
    name: string
  }
  
  export interface Request {
    Step: Step2[]
  }
  
  export interface Step2 {
    Name: string[]
  }
  
  export interface PostFlow {
    $: GeneratedType4
    Request: string[]
    Response: Response[]
  }
  
  export interface GeneratedType4 {
    name: string
  }
  
  export interface Response {
    Step: Step3[]
  }
  
  export interface Step3 {
    Name: string[]
    Condition: string[]
  }
  
  export interface Flow {
    Flow: Flow2[]
  }
  
  export interface Flow2 {
    $: GeneratedType5
    Description: string[]
    Request: any[]
    Response: any[]
    Condition?: string[]
  }
  
  export interface GeneratedType5 {
    name: string
  }
  
  export interface HttpproxyConnection {
    BasePath: string[]
    Properties: string[]
    VirtualHost: string[]
  }
  
  export interface RouteRule {
    $: GeneratedType6
    TargetEndpoint: string[]
  }
  
  export interface GeneratedType6 {
    name: string
  }
  