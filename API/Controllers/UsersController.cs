using System;
using System.Linq.Expressions;
using Application.Core;
using Application.Services;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class UsersController : BaseApiController
{
    private readonly AppDbContext _context;
    public readonly UserService _userService;

    public UsersController(AppDbContext context, UserService userService)
    {
        _userService = userService;
        _context = context;

    }


    [HttpGet]
    public async Task<ActionResult<PagedList<User>>> Get(
        [FromQuery] int page,
        [FromQuery] int pageSize,
        [FromQuery] string? search,
        [FromQuery] string? sortColumn = null,
        [FromQuery] string? sortOrder = null,
        [FromQuery] DateTime? registrationDate = null,
        [FromQuery] string? gender = null,
        [FromQuery] string? country = null,
        [FromQuery] decimal? minSalary = null,
        [FromQuery] decimal? maxSalary = null,
        [FromQuery] string? birthDate = null)
    {

        var users = await _userService.GetUsersAsync(
            page, pageSize, search, sortColumn, sortOrder, registrationDate, gender, country, minSalary, maxSalary, birthDate);

        return Ok(users);
    }



    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetById(int id)
    {
        var user = await _userService.GetUserByIdAsync(id);
        if (user == null) return NotFound();
        return Ok(user);
    }
}
