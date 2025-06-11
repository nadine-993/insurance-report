using API.Controllers;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API;

public class BuggyController(DataContext context) : BaseApiController
{
   [Authorize]
    [HttpGet("auth")] //userside error not authorized
    public ActionResult<string> GetAuth()
    {
        return "secret text";
    }

    [HttpGet("not-found")]
    public ActionResult<AppUser> GetNotFound()
    {
        var thing = context.Users.Find(-1);
        if (thing == null) return NotFound();
        return thing;
    }


    [HttpGet("server-error")]
    public ActionResult<AppUser> GetServerError()
    {
        var thing = context.Users.Find(-1) ?? throw new Exception("A bad thing has happened"); //try to find a usr with -1
       
        return thing;
    }


    [HttpGet("bad-request")] //if try to put an already existed username
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("This was not a good request");
    }


   
    
}