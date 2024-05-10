using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Mng.Core;
using Mng.Core.DTO;
using Mng.Core.Models;
using Mng.Core.Services;
using Mng.Services;
using System.Collections.Generic;


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
            //return Ok(_employeeService.GetAll());
            var emps = await _employeeService.GetAll();
            return Ok(_mapper.Map<IEnumerable<EmployeeDTO>>(emps));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var emp = await _employeeService.GetById(id);
            if (emp == null)
            {
                return NotFound();
            }
            return Ok(_mapper.Map<EmployeeDTO>(emp));
            //return Ok(_mapper.Map<EmployeeDTO>(emp));
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] EmployeeModel employeeModel)
        {
            bool success = await _employeeService.Add(_mapper.Map<Employee>(employeeModel));
            return Ok(success);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] EmployeeModel employeeModel)
        {
            return Ok(await _employeeService.Update(id, _mapper.Map<Employee>(employeeModel)));
        }

        //[HttpDelete("{id}")]
        //public ActionResult Delete(int id)
        //{
        //    var emp = _employeeService.GetById(id);
        //    if(emp is null)
        //        return NotFound();
        //    _employeeService.Delete(id);
        //    return Ok(emp);
        //}
    }
}
