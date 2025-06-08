using System;
using System.Linq.Expressions;
using Application.Core;
using Domain;
using Persistence;

namespace Application.Services;

public class UserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;

    }

    public async Task<PagedList<User>> GetUsersAsync(
        int page,
        int pageSize,
        string? search,
        string? sortColumn,
        string? sortOrder,
        DateTime? registrationDate,
        string? gender,
        string? country,
        decimal? minSalary,
        decimal? maxSalary,
        DateTime? birthDate
    )
    {
        DateTime? parsedBirthDate = null;
        if (birthDate.HasValue)
        {
            parsedBirthDate = birthDate.Value.Date;
        }

        var query = _context.Users
            .Where(u =>
                (string.IsNullOrEmpty(search) ||
                    (u.First_name != null && u.First_name.Contains(search)) ||
                    (u.Last_name != null && u.Last_name.Contains(search)) ||
                    (u.Email != null && u.Email.Contains(search)) ||
                    (u.Comments != null && u.Comments.Contains(search)) ||
                    (u.Title != null && u.Title.Contains(search))) &&
                (!registrationDate.HasValue || (u.Registration_dttm.HasValue && u.Registration_dttm.Value.Date == registrationDate.Value.Date)) &&
                (string.IsNullOrEmpty(gender) || u.Gender == gender) &&
                (string.IsNullOrEmpty(country) || u.Country == country) &&
                (!minSalary.HasValue || (u.Salary.HasValue && (decimal)u.Salary.Value >= minSalary.Value)) &&
                (!maxSalary.HasValue || (u.Salary.HasValue && (decimal)u.Salary.Value <= maxSalary.Value)) &&
                (!parsedBirthDate.HasValue || (u.Birthdate != null && DateTime.Parse(u.Birthdate).Date == parsedBirthDate.Value)))
            .AsQueryable();

        if (sortOrder?.ToLower() == "desc")
        {
            query = query.OrderByDescending(GetSortProperty(sortColumn));
        }
        else
        {
            query = query.OrderBy(GetSortProperty(sortColumn));
        }



        return await PagedList<User>.CreateAsync(query, page, pageSize);
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    private static Expression<Func<User, object>> GetSortProperty(string? sortColumn)
    {
        return sortColumn?.ToLower() switch
        {
            "first_name" => u => u.First_name ?? string.Empty,
            "last_name" => u => u.Last_name ?? string.Empty,
            "email" => u => u.Email ?? string.Empty,
            "comments" => u => u.Comments ?? string.Empty,
            "title" => u => u.Title ?? string.Empty,
            _ => u => u.Id ?? 0 // Default sort by Id if no valid column is provided
        };

    }

}
