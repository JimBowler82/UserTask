using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext : DbContext
{

    public DbSet<User> Users { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasIndex(u => u.First_name)
            .HasDatabaseName("IX_User_First_name");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Last_name)
            .HasDatabaseName("IX_User_Last_name");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .HasDatabaseName("IX_User_Email");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Comments)
            .HasDatabaseName("IX_User_Comments");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Title)
            .HasDatabaseName("IX_User_Title");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Registration_dttm)
            .HasDatabaseName("IX_User_Registration_dttm");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Gender)
            .HasDatabaseName("IX_User_Gender");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Country)
            .HasDatabaseName("IX_User_Country");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Salary)
            .HasDatabaseName("IX_User_Salary");

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Birthdate)
            .HasDatabaseName("IX_User_Birthdate");

    }

}
