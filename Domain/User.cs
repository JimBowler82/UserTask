using System;

namespace Domain;

public class User
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public string? Gender { get; set; }
    public string? Country { get; set; }
    public DateTime? BirthDate { get; set; }
    public DateTime? RegistrationDate { get; set; }
    public double? Salary { get; set; }
    public string? Title { get; set; }
    public string? Comments { get; set; }
}
