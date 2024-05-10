import React, { useState, useEffect } from 'react';
import EditEmp from './EditEmployee'
import DeleteModal from './deleteModal';
import Download from './download';
import EmployeeStore from '../mobx/EmployeeStore';
import { Button } from 'react-bootstrap';
import { format } from 'date-fns';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function EmployeeTable() {

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
 
  // useEffect(() => {
  //   EmployeeStore.getAllEmployees();
  // }, []);
 
  const deleteEmployee = () => {
    EmployeeStore.removeEmployee(selectedEmployeeId)
    setShowDeleteModal(false)
    setSelectedEmployeeId(null)
  };

  return (
    <div>
      <h1>טבלת עובדים</h1>
      <input
        className="form-control"
        type="text"
        placeholder="חיפוש"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ textAlign: 'right' }} >
        <Button variant="primary" onClick={() => setShowDownloadModal(true)}>
          הורדה
        </Button>

        <Button
          variant="primary" onClick={() => setShowAddModal(true)}>
          <i className="fas fa-plus-circle mr-2"></i>הוספה
        </Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>מחיקה</th>
            <th>עריכה</th>
            <th>שם פרטי</th>
            <th>שם משפחה</th>
            <th>ת"ז</th>
            <th>תאריך תחילת עבודה</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeStore.employees
            .filter(employee =>
              employee.firstName.includes(searchTerm) ||
              employee.lastName.includes(searchTerm) ||
              employee.tz.includes(searchTerm) ||
              employee.startDate.toString().includes(searchTerm)
            )
            .map((employee) => ((employee.status) &&
              <tr key={employee.id}>
                <td>
                  <span onClick={() => { setShowDeleteModal(true); setSelectedEmployeeId(employee.id) }}>🗑️</span>
                </td>
                <td>
                  <span onClick={() => { setShowEditModal(true); setSelectedEmployeeId(employee.id) }}>🖊</span>
                </td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.tz}</td>
                {/* יש לבטל את התנאי לאחר שאעשה ולידציה .toLocaleDateString().format(date, 'dd/MM/yyyy HH:mm:ss') */}
                <td>{format(new Date(employee.startDate), 'dd/MM/yyyy')}</td>

              </tr>
            )
            )}
        </tbody>
      </table>

      {showAddModal &&
        <EditEmp
          employeeId={-1}
          onSave={(updatedEmployees) => {
            EmployeeStore.addEmployee(updatedEmployees)
            setShowAddModal(false)
          }}
          onCancel={() => setShowAddModal(false)}
        />
      }

      {showEditModal &&
        <EditEmp
          employeeId={selectedEmployeeId}
          onSave={(updatedEmployees) => {
            EmployeeStore.putEmployeeById(selectedEmployeeId, updatedEmployees)
            setShowEditModal(false); setSelectedEmployeeId(null)
          }}
          onCancel={() => { setShowEditModal(false); setSelectedEmployeeId(null) }}
        />
      }

      {showDeleteModal &&
        <DeleteModal
          onSave={deleteEmployee}
          onCancel={() => { setShowDeleteModal(false); setSelectedEmployeeId(null) }}
        />
      }

      {showDownloadModal &&
        <Download
          onCancel={() => setShowDownloadModal(false)}
        />

      }
    </div>
  );
}
export default EmployeeTable;
