import React, { useState, createContext, useEffect } from "react";
import Child from "./Child.jsx";

export const employeeContext = createContext();

function App() {
  const [employee, setEmployee] = useState([]);

  // Initialize employee data using `useEffect` to avoid calling `setEmployee` directly in render
  useEffect(() => {
    const empDetails = [
      {
        ename: "Dave",
        eid: 101,
        esalary: 20000,
        address: "Addis Ababa",
        position: "Front End Developer",
        specialization: "React Library",
      },

      {
        ename: "Tom",
        eid: 102,
        esalary: 30000,
        address: "California",
        position: "Back End Developer",
        specialization: "Mongo And Mysql",
      },
    ];

    setEmployee(empDetails);
  }, []); // empty dependency array ensures this runs only once

  return (
    <div>
      <employeeContext.Provider value={employee}>
        <Child />
      </employeeContext.Provider>
    </div>
  );
}

export default App;