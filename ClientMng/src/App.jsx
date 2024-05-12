import './App.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import EmployeeTable from './Components/EmployeeTable';
import EditModel from './Components/editModel';


function App() {
  return (
    <>
      {/* <MyRoute /> */}
      <div className='container'>
        {/* <EditModel/> */}
        <EmployeeTable />
      </div>
      </>
  )
}
export default App
