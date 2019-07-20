using System.Threading.Tasks;
using App;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginModel)
        {
            var authenticationResponse = new UserService().Authenticate(loginModel.Email, loginModel.Password);
            if (authenticationResponse!= null)
                return Ok(new { authenticationResponse.Token });

            return BadRequest(new { ErrorMessage = "Invalid user name or password" });
        }
    }
}