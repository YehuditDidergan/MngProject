import React, { useState } from 'react';
import AddRole from './AddRole';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EmployeeStore from '../mobx/EmployeeStore';
import RoleStore from '../mobx/RoleStore';
import { Modal, Button, Popover } from 'react-bootstrap';

function EditEmp({ employeeId, onSave, onCancel }) {

    const [show, setShow] = useState(true);//בשביל המודל
    const [idOfRole, setIdOfRole] = useState(-1)
    const [idOfER, setIdOfER] = useState(-1)
    //const [showRole, setShowRole] = useState(false)
    //const [roleId, setRoleId] = useState(null)

    const employee = EmployeeStore.employees.find(e => e.id === employeeId)
    // console.log("e", employee.roleId)
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
    // const employeeRoles = RoleStore.employeeRoles
    const [employeeRole, setEmployeeRole] = useState({ id: null, roleId: null, empId: emp, isManagment: null, startRole: null })

    const handleStartRoleChange = (date) => {
        const dateObject = new Date(date); // המרת המחרוזת לאובייקט תאריך

        console.log("dateObject:", dateObject);
        r.startRole = data;
        console.log(r.name, " ", r.startRole)
        setEmployeeRole({ ...employeeRole, startRole: dateObject });

        if (dateObject <= emp.startDate) {

            //setEmployeeRole({ ...role, startRole: dateObject });

            console.log("dateObject:.................." + employeeRole.startRole + "  " + employeeRole.name + employeeRole.id)
        } else {
            console.log(dateObject + " גדול מהתאריך " + emp.startDate);
        }
    };



    const handleStartDateChange = (date) => {
        const dateObject = new Date(date); // המרת המחרוזת לאובייקט תאריך
        setEmp({ ...emp, startDate: dateObject });
    };
    const handleBirthDateChange = (date) => {
        const dateObject = new Date(date); // המרת המחרוזת לאובייקט תאריך
        setEmp({ ...emp, birthDate: dateObject });
    };
    const handleFemaleChange = event => {
        const { name, value } = event.target;
        const isMaleValue = value === "זכר";
        setEmp({ ...emp, [name]: isMaleValue });
    };
    const handleInputChange = event => {
        const { name, value } = event.target;
        setEmp({ ...emp, [name]: value })
    };
    // const setSetIdOfER = (id) => {
    //     setIdOfER(RoleStore.employeeRoles.find(e => e.empId === id).id)
    // }
    // const setSetIdOfRole = (id) => {
    //     setIdOfRole(RoleStore.employeeRoles.find(e => e.empId === id).roleId)
    // }
    // const showRoleToEmp = () => {
    //     if (employeeId !== -1) {
    //         if (RoleStore.employeeRoles.filter(e => e.empId === emp.id).length > 0) {
    //             setSetIdOfER(emp.id);
    //             setIdOfRole(RoleStore.employeeRoles.find(e => e.empId === emp.id).roleId);
    //             // return RoleStore.roles.filter(role => role.id === idOfRole).map(role => (
    //             //     <Button key={role.id} disabled={role.id !== idOfRole}>
    //             //         {role.name}
    //             //     </Button>
    //             // ));
    //         } else {
    //             console.log("אין תפקיד נוכחי");
    //         }
    //     } else {
    //         console.log("הוספת עובד");
    //     }
    // }

    return (
        <div>
            <Modal show={show} onHide={onCancel}>
                <Modal.Header >
                    {employeeId !== -1 ? <Modal.Title>עריכת עובד</Modal.Title> : <Modal.Title>הוספת עובד</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <label>
                        שם פרטי
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={employeeId !== -1 ? emp.firstName : null}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        שם משפחה
                        <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={employeeId !== -1 ? emp.lastName : null}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>תאריך לידה</label>
                    <br />
                    <DatePicker
                        // name="birthDate"
                        className="form-control"
                        selected={emp.birthDate}
                        onChange={handleBirthDateChange}
                        dateFormat="dd/MM/yyyy"
                        startDate={employeeId !== -1 ? emp.birthDate : null}
                    />
                    <label>
                        ת"ז:
                        <input
                            className="form-control"
                            type="text"
                            name="tz"
                            value={employeeId !== -1 ? emp.tz : null}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>תאריך תחילת עבודה</label>
                    <br />
                    <DatePicker
                        className="form-control"
                        selected={emp.startDate}
                        onChange={handleStartDateChange}
                        dateFormat="dd/MM/yyyy"
                        startDate={employeeId !== -1 ? emp.startDate : null}
                    />
                    <label>
                        <label>זכר</label>
                        <input
                            type="radio"
                            name="isMale"
                            defaultChecked={employeeId !== -1 ? emp.isMale : null}
                            onChange={handleInputChange}
                        />
                        <label>נקבה</label>
                        <input
                            type="radio"
                            name="isMale"
                            defaultChecked={employeeId !== -1 ? !emp.isMale : null}
                            onChange={handleFemaleChange}
                        />
                    </label>
                    <br />

                    {/* <Button onClick={showRoleToEmp}>תפקידים</Button>
                    
                    {RoleStore.roles.filter(role => role.id === idOfRole).map(role => (
                        <Button key={role.id} disabled={role.id !== idOfRole}>
                            {role.name}
                        </Button>
                    ))} */}
                    




                    {/* && < Button>{r.name}</Button> */}
                    {/* {employeeId !== -1 ? (
                        RoleStore.employeeRoles.filter(e => e.empId === emp.id).length > 0
                        && setSetIdOfER(emp.id)
                        && setSetIdOfRole(RoleStore.employeeRoles.find(e => e.empId === emp.id).roleId)
                        && console.log(idOfER)
                        && console.log(idOfRole)
                        //RoleStore.roles.filter(r => r.id === RoleStore.employeeRoles.find(e => e.empId === emp.id).roleId && < Button>{r.name}</Button>)

                        //  : console.log("אין תפקיד נוכחי")
                    ) : console.log("הוספת עובד")
                    } */}


                    {/* {employeeId !== -1 ? (
                        <div className="flexContainer">
                            {RoleStore.roles.map(r => (
                                emp.roleId.includes(r.id) ? (
                                    <div key={r.id} className="divForRole">
                                        <Button onClick={() => { setShowRole(true), setRoleId(r.id) }}>{r.name}</Button>
                                        <label>תפקיד מנהלי</label>
                                        <input
                                            type="radio"
                                            name={`isManagement${r.id}`}
                                            defaultChecked={r.isManagement}
                                            onChange={(e) => handleFemaleChange(e)}
                                        />
                                        <label>תאריך תחילת התפקיד</label>
                                        <DatePicker
                                            className="form-control"
                                            dateFormat="dd/MM/yyyy"
                                            startDate={r.startRole}
                                            selected={r.startRole}
                                            onChange={(e) => handleStartRoleChange(e)}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        <Button variant="secondary" key={r.id} onClick={() => { setShowRole(true), setRoleId(r.id) }}>{r.name}</Button>
                                    </div>
                                )
                            ))}
                        </div>
                    ) : (
                        RoleStore.roles.map(r => (
                            <Button variant="secondary" key={r.id} onClick={() => { setShowRole(true), setRoleId(r.id) }}>{r.name}</Button>
                        ))
                    )} */}


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCancel}>
                        ביטול
                    </Button>
                    <Button variant="primary" onClick={() => onSave(emp)}>
                        שמור
                    </Button>
                </Modal.Footer>

                {/* {showRole ? {
                    roleId?

                        :} :} */}




                {/* {showRolerole && 
                <AddRole
                    role={RoleStore.roles.find(r => r.id === roleId)}
                    handleFemale= {handleFemaleChange}
                    handleStartDate={handleStartDateChange}
                />
            }*/}
            </Modal>
        </div >
    );
};

export default EditEmp;