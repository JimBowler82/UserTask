using System;
using System.Runtime.CompilerServices;

namespace Domain;

public class User
{
    public int? Id { get; set; }
    public string? First_name { get; set; }
    public string? Last_name { get; set; }
    public string? Email { get; set; }
    public string? Gender { get; set; }
    public string? Ip_address { get; set; }
    public string? Cc { get; set; }
    public string? Country { get; set; }
    public string? Birthdate { get; set; }
    public DateTime? Registration_dttm { get; set; }
    public double? Salary { get; set; }
    public string? Title { get; set; }
    public string? Comments { get; set; }
}
