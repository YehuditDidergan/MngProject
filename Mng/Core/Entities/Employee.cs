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
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name must be less than 50 characters")]

        public string FirstName { get; set; }
        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name must be less than 50 characters")]

        public string LastName { get; set; }

        [Required(ErrorMessage = "Identity number is required")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "Identity number must be 9 digits")]

        public string TZ { get; set; }
        [Required(ErrorMessage = "Birth date is required")]

        public DateTime BirthDate { get; set; }
        [Required(ErrorMessage = "Gender is required")]

        public bool IsMale { get; set; } //Gender
        [Required(ErrorMessage = "Start date is required")]

        public DateTime StartDate { get; set; }
        [Required(ErrorMessage = "Activation status is required")]

        public bool Status { get; set; }


        public IEnumerable<EmployeeRoles> EmployeeRoles { get; set; }
    }
}
