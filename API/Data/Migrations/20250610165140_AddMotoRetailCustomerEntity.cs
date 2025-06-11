using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddMotoRetailCustomerEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DrivingLicense",
                table: "MotoCustomers");

            migrationBuilder.DropColumn(
                name: "EmiratesID",
                table: "MotoCustomers");

            migrationBuilder.DropColumn(
                name: "VCC",
                table: "MotoCustomers");

            migrationBuilder.AddColumn<string>(
                name: "DrivingLicensePath",
                table: "MotoCustomers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmiratesIDPath",
                table: "MotoCustomers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VCCPath",
                table: "MotoCustomers",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DrivingLicensePath",
                table: "MotoCustomers");

            migrationBuilder.DropColumn(
                name: "EmiratesIDPath",
                table: "MotoCustomers");

            migrationBuilder.DropColumn(
                name: "VCCPath",
                table: "MotoCustomers");

            migrationBuilder.AddColumn<string>(
                name: "DrivingLicense",
                table: "MotoCustomers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EmiratesID",
                table: "MotoCustomers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VCC",
                table: "MotoCustomers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
