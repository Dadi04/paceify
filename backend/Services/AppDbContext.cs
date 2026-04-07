using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services {
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}