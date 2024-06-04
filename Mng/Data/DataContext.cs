using Microsoft.EntityFrameworkCore;
using Mng.Core;
using Mng.Core.Entities;
using System.Diagnostics;

namespace Mng.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Employee> employees { get; set; }
        public DbSet<Role> roles { get; set; }
        public DbSet<EmployeeRoles> EmployeeRoles { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=YD");
            //optionsBuilder.LogTo(message => Debug.WriteLine(message));
        }
    }
}
