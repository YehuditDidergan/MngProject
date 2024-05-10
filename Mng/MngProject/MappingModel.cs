using AutoMapper;
using Mng.Api.Models;
using Mng.Core;
using Mng.Core.Entities;
using Mng.Core.Models;

namespace Mng.Api
{
    public class MappingModel:Profile
    {
        public MappingModel() {
            CreateMap<EmployeeModel, Employee>().ReverseMap();
            CreateMap<EmployeeRolesModel, EmployeeRoles>().ReverseMap();
        }
    }
}
