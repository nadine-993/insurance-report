using System;
using System.Net;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace API;

public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger,
IHostEnvironment env)
{
    public async Task InvokeAsync(HttpContext context)
   {
     try
    {
        await next(context);
    }
    catch (Exception ex)
    {
        logger.LogError(ex , ex.Message) ;
        context.Response.ContentType="application/json";
        context.Response.StatusCode=(int)HttpStatusCode.InternalServerError;
        var repsonse=env.IsDevelopment()
        ? new ApiException (context.Response.StatusCode, ex.Message, ex.StackTrace)
        : new ApiException(context.Response.StatusCode, ex.Message, "Internae server error");
  var options=new JsonSerializerOptions
  {
    PropertyNamingPolicy= JsonNamingPolicy.CamelCase
  };
  var json=JsonSerializer.Serialize(repsonse, options);
  await context.Response.WriteAsync(json);
   }
   }
}