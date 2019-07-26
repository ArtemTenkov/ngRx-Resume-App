using System.Threading.Tasks;
using System.Web.Http;
using App;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public async Task<IActionResult> Get(string userEmail)
        {
            //var messages = new MessageService().GetAllMessages();
            //if (messages != null) return Ok(messages);

            return NotFound();
        }
    }
}