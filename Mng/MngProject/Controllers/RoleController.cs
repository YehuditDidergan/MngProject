using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Mng.Core;
using Mng.Core.DTO;
using Mng.Core.Services;
using Mng.Services;


namespace Mng.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IRoleService _roleService;
        private readonly IMapper _mapper;
        public RoleController(IRoleService roleService, IMapper mapper)
        {
            _roleService = roleService;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var role = await _roleService.GetAll();
            return Ok(_mapper.Map<IEnumerable<RoleDTO>>(role));
        }

    }
}
