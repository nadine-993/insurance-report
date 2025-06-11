using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;


public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<AppUser> Users { get; set; } // Users is the table name , it takes the object AppUser and insert it into the Users table
    public DbSet<MotoRetailCustomer> MotoCustomers { get; set; }

}
