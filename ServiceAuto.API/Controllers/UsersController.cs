using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using ServiceAuto.API.Models;
using ServiceAuto.API.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {

        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userParam)
        {
            // var user = await _context.Users.Authenticate(userParam.Username, userParam.Password);

            var user = await Task.Run(() => _context.Users.SingleOrDefault(x => x.Username == userParam.Username && x.Password == userParam.Password));

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return Ok();
        }

        // private async Task<User> getUserByUserNameAsync(string username)
        // {
            

        //     return _context.Users.FirstOrDefault(x => x.Username == username);
        // }
    }
}