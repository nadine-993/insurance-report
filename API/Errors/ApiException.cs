using Microsoft.AspNetCore.Routing.Patterns;

namespace API;

public class ApiException(int statusCode, string message, string? details)
{
    public int StatsCode { get; set; } = statusCode;
    public string Message { get; set; } = message;
    public string? Details { get; set; } = details;
}