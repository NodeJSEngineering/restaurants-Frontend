import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loadProducts } from "../reducers/cafe-thunk";
import { useAppDispatch, useAppSelector } from "../store/store";

export function EmployeeComponent(props: any) {

  return (
    // {/* <li><Link to={`/about/${name}`}>About</Link></li> */}
    <Link to="/test1">{props.value.length}</Link>
  );
}

function EditCellRenderer(props: any) {
  return (
    <span>
      <button>Edit</button>
    </span>
  );
}

function DeleteCellRenderer(props: any) {
  return (
    <span>
      <button>Delete</button>
    </span>
  );
}
export function CafeGrid() {
  const productData = useAppSelector(
    (state) => state.rootReducer.cafeReducer.products
  );
  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const columnDefs = [
    { field: 'Logo' },

      { field: 'employees', filter: true, sortable:true,     cellRenderer: EmployeeComponent
    },
    { field: "name" },
    { field: "description" },
    { field: "location" },
    {
      field: "Edit",
      cellRenderer: EditCellRenderer,
      // cellRendererParams: {
      //   clicked: function(field) {
      //     alert(`${field} was clicked`);
      //   },
      // },
    },
    { field: "Delete", cellRenderer: DeleteCellRenderer },
  ];
  const onCellClicked = (e: any) => {
    console.log("onCellClicked", e);
  };


  return (
    <div>
      <Link to="/addnewcafe">Add new cafe</Link>
      <div
        className="ag-theme-alpine"
        style={{ height: 400, width: "auto", margin: 100 }}
      >
        <AgGridReact rowData={productData} columnDefs={columnDefs}>
          onCellClicked={onCellClicked}
          frameworkComponents=
          {{
            EmployeeComponent,
            EditCellRenderer,
            DeleteCellRenderer,
          }}
        </AgGridReact>
      </div>
    </div>
  );
}
