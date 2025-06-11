using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class MotoCustomerDto
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string LastName { get; set; }
    public required string  Email { get; set; }
    public required string  MobileNumber { get; set; }
    public required string  CarModel { get; set; }
    public required string  VehiclePlatenumber { get; set; }
     public IFormFile? DrivingLicense { get; set; }
    public IFormFile? VCC { get; set; }
    public IFormFile? EmiratesID { get; set; }


}