using Mng.Core;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mng.Api.Models
{
    public class EmployeeRolesModel
    {
        public bool IsManagement { get; set; }
        public DateTime StartRole { get; set; }
        public int RoleId { get; set; }
        //public int EmployeeId { get; set; }//???
    }
}
