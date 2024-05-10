import './App.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import EmployeeTable from './Components/EmployeeTable';


function App() {
  return (
    <>
      {/* <MyRoute /> */}
      <div className='container'>
        
        <EmployeeTable />
      </div>
      </>
  )
}
export default App
