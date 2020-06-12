using Microsoft.EntityFrameworkCore.Migrations;

namespace ServiceAuto.API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Comenzi",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NumarMasina = table.Column<string>(nullable: false),
                    NumeClient = table.Column<string>(nullable: false),
                    NumarTelefon = table.Column<string>(nullable: false),
                    Descriere = table.Column<string>(nullable: true),
                    PostLucru = table.Column<int>(nullable: false),
                    Completata = table.Column<int>(nullable: false),
                    Reclamatie = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comenzi", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    WorkingPlace = table.Column<int>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comenzi");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
