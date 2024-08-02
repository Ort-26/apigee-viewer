import { AnalizeProxyPathRes } from "../../../../electron/mainFunctions/analizeApiProxy";

interface Props {
    data: AnalizeProxyPathRes | undefined;
}
  
export const ResultsTableComponent: React.FC<Props> = ({ data }) => {
    if (data === undefined || data.results === undefined) return undefined;
    const filteredData = data.results.filter(x => x.messages.length > 0)
    return (
    <>
    <h1>Resumen</h1>
    <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Archivos analizados</th>
            <th scope="col">Archivos a revisar</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data.results.length}</td>
                <td>{filteredData.length}</td>
            </tr>
        </tbody>
    </table>

    <hr />
    
    <h1>Resultados del analisis</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">File Path</th>
            <th scope="col">Error Count</th>
            <th scope="col">Warning Count</th>
            <th scope="col">Fixable Error Count</th>
            <th scope="col">Fixable Warning Count</th>
            <th scope="col">Messages</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((result, index) => (
            <tr key={index}>
              <td>{result.filePath}</td>
              <td>{result.errorCount}</td>
              <td>{result.warningCount}</td>
              <td>{result.fixableErrorCount}</td>
              <td>{result.fixableWarningCount}</td>
              <td>
                <ul>
                  {result.messages.map((message, index) => (
                    <li key={index}>
                      <strong>Message:</strong> {message.message}
                      <br />
                      <strong>Rule ID:</strong> {message.ruleId}
                      <br />
                      <strong>Severity:</strong> {message.severity}
                      <br />
                      <strong>Node Type:</strong> {message.nodeType}
                      <br />
                      <strong>Line:</strong> {message.line}
                      <br />
                      <strong>Column:</strong> {message.column}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  };
  