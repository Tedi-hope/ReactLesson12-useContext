import React, {useContext} from "react";
import { employeeContext } from "./App";


function Child(){

    const employeeValue=useContext(employeeContext);

    return(
      <div>
        <h1>Employee Details</h1>
        {employeeValue.length > 0 ? (
        <ul>
          {employeeValue.map((emp, index) => (
            <li key={index}>
              <p>Name: {emp.ename} </p>
              <p><i>ID: {emp.eid}</i></p>
              <p><b>Salary: {emp.esalary}</b></p>
              <p>Address: {emp.address}</p>
              <p>Position: {emp.position}</p>
              <p>Specialization: {emp.specialization}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No employee details available.</p>
      )}
      </div>

    );
}

export default Child