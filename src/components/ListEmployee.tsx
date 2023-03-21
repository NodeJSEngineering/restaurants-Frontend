import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { loadProducts } from "../reducers/cafe-thunk";
import { useAppDispatch } from "../store/store";

function EmployeeGrid() {
  const InitialRowData = [
    {
      EmployeeId: "Marcelo",
      EmailAddress: "Stanton",
      Name: "Mytle_Rogahn@examplName.com",
      PhoneNumber: "Marcelo",
      CafeName: "Stanton",
      DaysWorked: 1,
    },
    {
      EmployeeId: "Marcelo",
      EmailAddress: "Stanton",
      Name: "Mytle_Rogahn@examplName.com",
      PhoneNumber: "Marcelo",
      CafeName: "Stanton",
      DaysWorked: 1,
    },
    {
      EmployeeId: "Marcelo",
      EmailAddress: "Stanton",
      Name: "Mytle_Rogahn@examplName.com",
      PhoneNumber: "Marcelo",
      CafeName: "Stanton",
      DaysWorked: 1,
    },
  ];

  const columnDefs = [
    { field: "EmployeeId" },
    // Using dot notation to access nested property
    { field: "EmailAddress" },
    { field: "Name" },
    { field: "PhoneNumber" },
    { field: "CafeName" },
    { field: "DaysWorked" },
  ];
  return (
    <div>
      <button>Add new Employee</button>
      <div
        className="ag-theme-alpine"
        style={{ height: 400, width: 600, margin: 100 }}
      >
        <AgGridReact
          rowData={InitialRowData}
          columnDefs={columnDefs}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default EmployeeGrid;
