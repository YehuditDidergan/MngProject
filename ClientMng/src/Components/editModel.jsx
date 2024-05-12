import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import RoleStore from '../mobx/RoleStore';
import { Button } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

function EditModel({ emp, setEmp }) {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {RoleStore.roles.map((role, index) => {
          // Check if the role is already in empRole
          const isRoleSelected = emp.empRole.some(item => item.roleId === role.id);

          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
              <h5>{role.name}</h5>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input
                  type="radio"
                  id={`true-${index}`}
                  name={`isManagement-${index}`}
                  value={true}
                  checked={isRoleSelected && emp.empRole.find(item => item.roleId === role.id)?.isManagement === true}
                  onChange={(e) => {
                    const updatedEmpRole = [...emp.empRole];
                    const existingRoleIndex = emp.empRole.findIndex(item => item.roleId === role.id);
                    if (existingRoleIndex !== -1) {
                      updatedEmpRole[existingRoleIndex] = { ...emp.empRole[existingRoleIndex], isManagement: true };
                    } else {
                      updatedEmpRole.push({ roleId: role.id, isManagement: true, startRole: null });
                    }
                    setEmp({ ...emp, empRole: updatedEmpRole });
                  }}
                />
                <label htmlFor={`true-${index}`}>ניהולי</label>

                <input
                  type="radio"
                  id={`false-${index}`}
                  name={`isManagement-${index}`}
                  value={false}
                  checked={isRoleSelected && emp.empRole.find(item => item.roleId === role.id)?.isManagement === false}
                  onChange={(e) => {
                    const updatedEmpRole = [...emp.empRole];
                    const existingRoleIndex = emp.empRole.findIndex(item => item.roleId === role.id);
                    if (existingRoleIndex !== -1) {
                      updatedEmpRole[existingRoleIndex] = { ...emp.empRole[existingRoleIndex], isManagement: false };
                    } else {
                      updatedEmpRole.push({ roleId: role.id, isManagement: false, startRole: null });
                    }
                    setEmp({ ...emp, empRole: updatedEmpRole });
                  }}
                />
                <label htmlFor={`false-${index}`}>לא ניהולי</label>
              </div>

              <DatePicker
                className='form-control'
                dateFormat="dd/MM/yyyy"
                selected={isRoleSelected ? emp.empRole.find(item => item.roleId === role.id)?.startRole : null}
                onChange={(date) => {
                  const updatedEmpRole = [...emp.empRole];
                  const existingRoleIndex = emp.empRole.findIndex(item => item.roleId === role.id);
                  if (existingRoleIndex !== -1) {
                    updatedEmpRole[existingRoleIndex] = { ...emp.empRole[existingRoleIndex], startRole: date };
                    setEmp({ ...emp, empRole: updatedEmpRole });
                  }
                }}
              />
              {isRoleSelected &&
                <button style={{ border: 'none' }} onClick={() => {
                  const updatedEmpRole = emp.empRole.filter(item => item.roleId !== role.id);
                  setEmp({ ...emp, empRole: updatedEmpRole });
                }}>🗑</button>}
            </div>
          );
        })}

      </div>
    </>
  );
}

export default EditModel;
