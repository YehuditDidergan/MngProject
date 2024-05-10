import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EmployeeStore from '../mobx/EmployeeStore';
import RoleStore from '../mobx/RoleStore'; 

function DeleteModel({employeeId}) {
    const [idOfRole, setIdOfRole] = useState(-1)
    const [idOfER, setIdOfER] = useState(-1)

    const employee = EmployeeStore.employees.find(e => e.id === employeeId)
    const [emp, setEmp] = useState((employeeId !== -1) ?
        {
            id: employeeId, firstName: employee.firstName, lastName: employee.lastName,
            tz: employee.tz, startDate: employee.startDate, birthDate: employee.birthDate,
            isMale: employee.isMale, status: employee.status, empRoleId: employee.empRoleId
        } :
        {
            id: EmployeeStore.id++, firstName: "", lastName: "",
            tz: "", startDate: null, birthDate: null, isMale: false, status: true, empRoleId: null
        }
    )
    const [employeeRole, setEmployeeRole] = useState({ id: null, roleId: null, empId: emp,id, isManagment: null, startRole: null })

  return (
    <>
      
    </>
  );
}

export default DeleteModel;