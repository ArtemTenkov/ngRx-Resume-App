using System.Threading.Tasks;
using System.Web.Http;
using App;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public async Task<IActionResult> GetAccountInfo(string email)
        {
            var user = new AccountService().GetAccountInfo(email);

            if (user != null)
                return Ok(user);

            return NotFound();
        }
    }
}