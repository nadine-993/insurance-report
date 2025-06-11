using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


public class MotoCustomerController(DataContext context) : BaseApiController
{
   [HttpPost("createprofile")]
public async Task<ActionResult<MotoRetailCustomer>> CreateProfile([FromForm] MotoCustomerDto dto)
{
    // File save path (e.g., wwwroot/uploads)
    var uploadDir = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

    if (!Directory.Exists(uploadDir))
        Directory.CreateDirectory(uploadDir);

    // Save each file and store filename or path
    string SaveFile(IFormFile file)
    {
        var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
        var fullPath = Path.Combine(uploadDir, fileName);

        using (var stream = new FileStream(fullPath, FileMode.Create))
        {
            file.CopyTo(stream);
        }

        return "/uploads/" + fileName; // This is the web path
    }

    var customer = new MotoRetailCustomer
    {
        Name = dto.Name,
        LastName = dto.LastName,
        Email = dto.Email,
        MobileNumber = dto.MobileNumber,
        CarModel = dto.CarModel,
        VehiclePlatenumber = dto.VehiclePlatenumber,
        DrivingLicensePath = SaveFile(dto.DrivingLicense),
        VCCPath = SaveFile(dto.VCC),
        EmiratesIDPath = SaveFile(dto.EmiratesID)
    };

    context.MotoCustomers.Add(customer);
    await context.SaveChangesAsync();

    return Ok(customer);
}


    [HttpGet]
    public async Task<ActionResult<IEnumerable<MotoRetailCustomer>>> GetProfile()
    {

        var customers = await context.MotoCustomers.ToListAsync();
        return customers;
    }




[HttpGet("{id}")]
    public async Task<ActionResult<MotoRetailCustomer>> GetProfile(int id)
    {
        var customer = await context.MotoCustomers.FindAsync(id);
        return customer == null ? NotFound() : Ok(customer);
    }

}