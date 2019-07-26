using System.Threading.Tasks;
using Api.GraphQl;
using GraphQL;
using GraphQL.Types;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GraphQlController : ControllerBase
    {
        private readonly IDocumentExecuter _documentExecuter;
        private readonly ISchema _schema;

        public GraphQlController()
        {
            _schema = new MessageSchema();
            _documentExecuter = new DocumentExecuter();
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]GraphQLQuery query)
        {
            if (query == null) return NotFound();
            var inputs = query.Variables.ToInputs();
            var executionOptions = new ExecutionOptions
            {
                Query = query.Query,
                Schema =  _schema,
                Inputs = inputs,
                OperationName = query.OperationName
            };

            var result = await _documentExecuter.ExecuteAsync(executionOptions).ConfigureAwait(false);
            if (result.Errors?.Count > 0)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}