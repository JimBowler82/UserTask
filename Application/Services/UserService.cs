using System;
using System.Linq.Expressions;
using Application.Core;
using Domain;
using Microsoft.EntityFrameworkCore;
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
        string? birthDate
    )
    {


        var query = _context.Users
            .Where(u =>
                (string.IsNullOrEmpty(search) ||
                    (u.First_name != null && u.First_name.ToLower().Contains(search.ToLower())) ||
                    (u.Last_name != null && u.Last_name.ToLower().Contains(search.ToLower())) ||
                    (u.Email != null && u.Email.ToLower().Contains(search.ToLower())) ||
                    (u.Comments != null && u.Comments.ToLower().Contains(search.ToLower())) ||
                    (u.Title != null && u.Title.ToLower().Contains(search.ToLower()))) &&
                (!registrationDate.HasValue || (u.Registration_dttm.HasValue && u.Registration_dttm.Value.Date == registrationDate.Value.Date)) &&
                (string.IsNullOrEmpty(gender) || (u.Gender != null && u.Gender.ToLower() == gender.ToLower())) &&
                (string.IsNullOrEmpty(country) || (u.Country != null && u.Country.ToLower() == country.ToLower())) &&
                (!minSalary.HasValue || (u.Salary.HasValue && (decimal)u.Salary.Value >= minSalary.Value)) &&
                (!maxSalary.HasValue || (u.Salary.HasValue && (decimal)u.Salary.Value <= maxSalary.Value)) &&
                (string.IsNullOrEmpty(birthDate) || (u.Birthdate != null && u.Birthdate == birthDate)))
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
