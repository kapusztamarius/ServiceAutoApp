using Microsoft.EntityFrameworkCore;
using ServiceAuto.API.Models;

namespace ServiceAuto.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<Comanda> Comenzi { get; set; }

        public DbSet<User> Users { get; set; }
    }
}