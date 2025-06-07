using System;
using Domain;

namespace Persistence;

public class DbSeeder
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Users.Any()) return;

        var users = new List<User>();

        context.Users.AddRange(users);
        await context.SaveChangesAsync();
    }
}
