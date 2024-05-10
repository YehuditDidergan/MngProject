using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Mng.Data.Migrations
{
    public partial class ChangeRole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_employees_EmployeeRoles_EmployeeRolesId",
                table: "employees");

            migrationBuilder.DropForeignKey(
                name: "FK_roles_EmployeeRoles_EmployeeRolesId",
                table: "roles");

            migrationBuilder.DropIndex(
                name: "IX_roles_EmployeeRolesId",
                table: "roles");

            migrationBuilder.DropIndex(
                name: "IX_employees_EmployeeRolesId",
                table: "employees");

            migrationBuilder.DropColumn(
                name: "EmployeeRolesId",
                table: "roles");

            migrationBuilder.DropColumn(
                name: "IsManagement",
                table: "roles");

            migrationBuilder.DropColumn(
                name: "StartRole",
                table: "roles");

            migrationBuilder.DropColumn(
                name: "EmployeeRolesId",
                table: "employees");

            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "EmployeeRoles",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsManagement",
                table: "EmployeeRoles",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "RoleId",
                table: "EmployeeRoles",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartRole",
                table: "EmployeeRoles",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeRoles_EmployeeId",
                table: "EmployeeRoles",
                column: "EmployeeId");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeRoles_RoleId",
                table: "EmployeeRoles",
                column: "RoleId");

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeRoles_employees_EmployeeId",
                table: "EmployeeRoles",
                column: "EmployeeId",
                principalTable: "employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EmployeeRoles_roles_RoleId",
                table: "EmployeeRoles",
                column: "RoleId",
                principalTable: "roles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeRoles_employees_EmployeeId",
                table: "EmployeeRoles");

            migrationBuilder.DropForeignKey(
                name: "FK_EmployeeRoles_roles_RoleId",
                table: "EmployeeRoles");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeRoles_EmployeeId",
                table: "EmployeeRoles");

            migrationBuilder.DropIndex(
                name: "IX_EmployeeRoles_RoleId",
                table: "EmployeeRoles");

            migrationBuilder.DropColumn(
                name: "EmployeeId",
                table: "EmployeeRoles");

            migrationBuilder.DropColumn(
                name: "IsManagement",
                table: "EmployeeRoles");

            migrationBuilder.DropColumn(
                name: "RoleId",
                table: "EmployeeRoles");

            migrationBuilder.DropColumn(
                name: "StartRole",
                table: "EmployeeRoles");

            migrationBuilder.AddColumn<int>(
                name: "EmployeeRolesId",
                table: "roles",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsManagement",
                table: "roles",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartRole",
                table: "roles",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "EmployeeRolesId",
                table: "employees",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_roles_EmployeeRolesId",
                table: "roles",
                column: "EmployeeRolesId");

            migrationBuilder.CreateIndex(
                name: "IX_employees_EmployeeRolesId",
                table: "employees",
                column: "EmployeeRolesId");

            migrationBuilder.AddForeignKey(
                name: "FK_employees_EmployeeRoles_EmployeeRolesId",
                table: "employees",
                column: "EmployeeRolesId",
                principalTable: "EmployeeRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_roles_EmployeeRoles_EmployeeRolesId",
                table: "roles",
                column: "EmployeeRolesId",
                principalTable: "EmployeeRoles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
