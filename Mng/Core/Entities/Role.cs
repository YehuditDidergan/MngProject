using Mng.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core
{
    [Table("Role")]
    public class Role
    {
        [Key]
        public int Id { get; set; }
        //[Required(ErrorMessage = "Name is required")]
        //[StringLength(100, ErrorMessage = "Name must be less than 100 characters")]

        public string Name { get; set; }
        public IEnumerable<EmployeeRoles> EmployeeRoles { get; set; }
    }
}
