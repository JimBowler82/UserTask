using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddIndexesToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_User_Birthdate",
                table: "Users",
                column: "Birthdate");

            migrationBuilder.CreateIndex(
                name: "IX_User_Comments",
                table: "Users",
                column: "Comments");

            migrationBuilder.CreateIndex(
                name: "IX_User_Country",
                table: "Users",
                column: "Country");

            migrationBuilder.CreateIndex(
                name: "IX_User_Email",
                table: "Users",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_User_First_name",
                table: "Users",
                column: "First_name");

            migrationBuilder.CreateIndex(
                name: "IX_User_Gender",
                table: "Users",
                column: "Gender");

            migrationBuilder.CreateIndex(
                name: "IX_User_Last_name",
                table: "Users",
                column: "Last_name");

            migrationBuilder.CreateIndex(
                name: "IX_User_Registration_dttm",
                table: "Users",
                column: "Registration_dttm");

            migrationBuilder.CreateIndex(
                name: "IX_User_Salary",
                table: "Users",
                column: "Salary");

            migrationBuilder.CreateIndex(
                name: "IX_User_Title",
                table: "Users",
                column: "Title");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_User_Birthdate",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Comments",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Country",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Email",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_First_name",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Gender",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Last_name",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Registration_dttm",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Salary",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_User_Title",
                table: "Users");
        }
    }
}
