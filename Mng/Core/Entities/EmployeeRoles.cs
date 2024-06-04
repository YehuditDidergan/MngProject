using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Entities
{
    [Table("EmployeeRoles")]
    public class EmployeeRoles
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Managment status is required")]

        public bool IsManagement { get; set; }
        [Required(ErrorMessage = "Start role is required")]

        public DateTime StartRole { get; set; }

        public int RoleId { get; set; }
        [ForeignKey(nameof(RoleId))]
        public Role Role { get; set; }
        public int EmployeeId { get; set; }
        [ForeignKey(nameof(EmployeeId))]
        public Employee Employee { get; set; }

    }
}
