// public string message { get; set; }
// public string ruleId { get; set; }
// public int severity { get; set; }
// public string nodeType { get; set; }
// public int? line { get; set; }
// public int? column { get; set; }
export interface IApigeelintMsg {
    message: string
    ruleId: string
    severity: number
    nodeType: string
    line: number | undefined
    column: number | undefined
}

// public string filePath { get; set; }
// public int errorCount { get; set; }
// public int warningCount { get; set; }
// public int fixableErrorCount { get; set; }
// public int fixableWarningCount { get; set; }
// public List<Message> messages { get; set; }
export interface IApigeelintRes {
    filePath: string
    errorCount: number
    warningCount: number
    fixableErrorCount: number
    fixableWarningCount: number
    messages: IApigeelintMsg[]
}