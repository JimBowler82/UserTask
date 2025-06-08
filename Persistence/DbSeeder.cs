using System;
using Domain;
using Parquet;
using Parquet.Serialization;

namespace Persistence;

public class DbSeeder
{
    public static async Task SeedData(AppDbContext context)
    {
        if (context.Users.Any()) return;

        string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        string filePath = Path.Combine(baseDirectory, "Data", "userdata.parquet");

        if (!File.Exists(filePath))
        {
            throw new FileNotFoundException("Parquet file not found.", filePath);
        }

        using FileStream fs = File.OpenRead(filePath);
        using var reader = await ParquetReader.CreateAsync(fs);
        int rowGroupCount = reader.RowGroupCount;

        ParquetSerializerOptions options = new()
        {
            PropertyNameCaseInsensitive = true,
        };

        using var transaction = await context.Database.BeginTransactionAsync();

        for (int rowGroupIndex = 0; rowGroupIndex < rowGroupCount; rowGroupIndex++)
        {
            IList<User> users = await ParquetSerializer.DeserializeAsync<User>(filePath, rowGroupIndex, options);

            context.Users.AddRange(users);
            await context.SaveChangesAsync();
        }

        await transaction.CommitAsync();
    }
}
