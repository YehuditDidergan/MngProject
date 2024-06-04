using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Mng.Core;
using Mng.Core.DTO;
using Mng.Core.Models;
using Mng.Core.Services;

namespace Mng.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        private readonly IMapper _mapper;
        public EmployeeController(IEmployeeService employeeService, IMapper mapper)
        {
            _employeeService = employeeService;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var emps = await _employeeService.GetAll();
            return Ok(_mapper.Map<IEnumerable<EmployeeDTO>>(emps));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var emp = await _employeeService.GetById(id);
            if (emp == null)
                return NotFound();
            return Ok(_mapper.Map<EmployeeDTO>(emp));
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] EmployeeModel employeeModel)
        {
            bool success = await _employeeService.Add(_mapper.Map<Employee>(employeeModel));
            if (!success)
                return Conflict("Employee has duplicate roles, or dates are wrong!"); 
            return Ok(success);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] EmployeeModel employeeModel)
        {
            var employee = await _employeeService.GetById(id);
            if (employee is null)
            {
                return NotFound();
            }
            var success = await _employeeService.Update(_mapper.Map(employeeModel, employee));
            if (!success)
                return Conflict("Employee has duplicate roles, or dates are wrong!");
            return Ok(success);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok(await _employeeService.Remove(id));
        }
    }
}
