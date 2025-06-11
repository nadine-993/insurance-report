using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class MotoRetailCustomer
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string LastName { get; set; }
    public required string  Email { get; set; }
    public required string  MobileNumber { get; set; }
    public required string  CarModel { get; set; }
    public required string  VehiclePlatenumber { get; set; }
      public string? DrivingLicensePath { get; set; }
    public string? VCCPath { get; set; }
    public string? EmiratesIDPath { get; set; }


}