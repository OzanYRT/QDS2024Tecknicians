using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using Microsoft.EntityFrameworkCore;

namespace webapicall.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Scholarship> Scholarships => Set<Scholarship>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Scholarship>().HasData(LoadScholarships());
    }

    public static List<Scholarship> LoadScholarships() {
    var scholarships = new List<Scholarship>();
    using (var reader = new StreamReader(Path.Combine("wwwroot", "scholarships_data.csv"))) {
        using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
        scholarships = csv.GetRecords<Scholarship>().ToList();
    }
    return scholarships;
    }

}
