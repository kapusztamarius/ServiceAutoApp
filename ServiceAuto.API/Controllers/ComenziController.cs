using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceAuto.API.Data;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComenziController : ControllerBase
    {
        private readonly DataContext _context;

        public ComenziController(DataContext context)
        {
            _context = context;

        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> GetComenzi()
        {
            var comenzi = await _context.Comenzi.ToListAsync();
            return Ok(comenzi);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetComanda(int id)
        {
            var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(comanda);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
