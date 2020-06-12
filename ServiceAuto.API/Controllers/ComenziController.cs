using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceAuto.API.Data;
using ServiceAuto.API.Models;

namespace WebApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ComenziController : ControllerBase
    {
        private readonly DataContext _context;

        public ComenziController(DataContext context)
        {
            _context = context;

        }

        // GET api/values
        [HttpGet("comenzi-todo")]
        public async Task<IActionResult> GetComenziTodo()
        {
            var comenzi = await _context.Comenzi.Where(x => x.Completata != 1).ToListAsync();
            return Ok(comenzi);
        }

        // GET api/values
        [HttpGet("comenzi-done")]
        public async Task<IActionResult> GetComenziDone()
        {
            var comenzi = await _context.Comenzi.Where(x => x.Completata == 1).ToListAsync();
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
        public async void Post([FromBody] Comanda value)
        {
            var comanda = new Comanda();

             comanda.NumarMasina = value.NumarMasina;
             comanda.NumeClient = value.NumeClient;
             comanda.NumarTelefon = value.NumarTelefon;
             comanda.Descriere = value.Descriere;
             comanda.Reclamatie = value.Reclamatie;

             _context.Comenzi.Add(comanda);

             await _context.SaveChangesAsync();

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult>  Put(int id, [FromBody] Comanda value)
        {
             var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.Id == id);
             comanda.NumarMasina = value.NumarMasina;
             comanda.NumeClient = value.NumeClient;
             comanda.NumarTelefon = value.NumarTelefon;
             comanda.Descriere = value.Descriere;
             comanda.Reclamatie = value.Reclamatie;
             comanda.Completata = value.Completata;

             await _context.SaveChangesAsync();

            return Ok(comanda);
        }

            // PUT api/values/5
        [HttpPut("incheie/{id}")]
        public async Task<IActionResult>  CompleteOreder(int id, [FromBody] int value)
        {
             var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.Id == id);
             comanda.Completata = 1;

             var user = await _context.Users.FirstOrDefaultAsync(x => x.WorkingPlace == value);
             user.ComandaCurenta = 0;

             await _context.SaveChangesAsync();

            return Ok(comanda);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {
            var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.Id == id);

            _context.Remove(comanda);

             await _context.SaveChangesAsync();
        }

         // PUT api/values/5
        [HttpPut("user/{id}")]
        public async Task<IActionResult>  TakeOrder(int id, [FromBody] int value)
        {
             var user = await _context.Users.FirstOrDefaultAsync(x => x.WorkingPlace == value);

             if (user.ComandaCurenta != 0) {
                 return BadRequest(new ArgumentException("Aveti deja o comanda in lucru."));//throw new ArgumentException("Aveti deja o comanda in lucru.");
             }

             var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.Id == id);
             comanda.PostLucru = value;
        
             user.ComandaCurenta = id;

             await _context.SaveChangesAsync();

             return Ok(comanda);
        }

          // GET api/values/5
        [HttpGet("user/{id}")]
        public async Task<IActionResult> GetComandaByUserId(int id)
        {
            var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.PostLucru == id && x.Completata == 0);

            return Ok(comanda);
        }

         // PUT api/values/5
        [HttpPut("reopen/{id}")]
        public async Task<IActionResult>  ReOpenOrder(int id)
        {
             var comanda = await _context.Comenzi.FirstOrDefaultAsync(x => x.Id == id);
             comanda.Completata = 0;
             comanda.PostLucru = 0;
        
             await _context.SaveChangesAsync();

             return Ok(comanda);
        }
    }
}
