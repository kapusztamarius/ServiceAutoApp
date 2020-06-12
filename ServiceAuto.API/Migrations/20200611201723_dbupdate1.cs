using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceAuto.API.Migrations
{
    public partial class dbupdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ComandaCurenta",
                table: "Users",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ComandaCurenta",
                table: "Users");
        }
    }
}
