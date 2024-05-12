import React, { useState } from 'react';
import AddRole from './AddRole';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EmployeeStore from '../mobx/EmployeeStore';
import RoleStore from '../mobx/RoleStore';
import { Modal, Button, Popover } from 'react-bootstrap';
import EditModel from './editModel';

function EditEmp({ employeeId, onSave, onCancel }) {

    const [show, setShow] = useState(true);//בשביל המודל

    const [emp, setEmp] = useState((employeeId !== -1) ?
        {
            ...EmployeeStore.employees.find(e => e.id === employeeId),
            empRole: EmployeeStore.employees.find(e => e.id === employeeId).empRole.slice()
        } :
        {
            id: EmployeeStore.id++,
            firstName: "",
            lastName: "",
            tz: "",
            startDate: null,
            birthDate: null,
            isMale: false,
            status: true,
            empRole: []
        }
    );

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

    return (
        <div>
            <Modal show={show} onHide={onCancel}>
                <Modal.Header >
                    {employeeId !== -1 ? <Modal.Title>עריכת עובד</Modal.Title> : <Modal.Title>הוספת עובד</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <label>שם פרטי</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                name="firstName"
                                value={employeeId !== -1 ? emp.firstName : null}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={{ marginRight: '20px', textAlign: 'center' }}>
                            <label>שם משפחה</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                name="lastName"
                                value={employeeId !== -1 ? emp.lastName : null}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div style={{ marginRight: '20px', textAlign: 'center' }}>
                            <label>ת"ז:</label>
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                name="tz"
                                value={employeeId !== -1 ? emp.tz : null}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px' }}>
                        <div style={{ marginRight: '20px', textAlign: 'center' }}>
                            <label>תאריך לידה</label>
                            <br />
                            <DatePicker
                                className="form-control"
                                selected={emp.birthDate}
                                onChange={handleBirthDateChange}
                                dateFormat="dd/MM/yyyy"
                                startDate={employeeId !== -1 ? emp.birthDate : null}
                            />
                        </div>
                        <div style={{ marginRight: '20px', textAlign: 'center' }}>
                            <label>תאריך תחילת עבודה</label>
                            <br />
                            <DatePicker
                                className="form-control"
                                selected={emp.startDate}
                                onChange={handleStartDateChange}
                                dateFormat="dd/MM/yyyy"
                                startDate={employeeId !== -1 ? emp.startDate : null}
                            />
                        </div>
                        <div style={{ marginRight: '20px', textAlign: 'center' }}>
                            <label>מין</label>
                            <br />
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
                        </div>
                    </div>

                    <hr />
                    <EditModel
                        emp={emp}
                        setEmp={setEmp}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCancel}>
                        ביטול
                    </Button>
                    <Button variant="primary" onClick={() => onSave(emp)}>
                        שמור
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default EditEmp;