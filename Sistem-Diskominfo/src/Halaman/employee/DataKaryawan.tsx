import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridActionsCellItem,
} from "@mui/x-data-grid";

const DataKaryawan: React.FC = () => {
  const [rows, setRows] = useState<GridRowsProp>([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 25,
      dateCreated: new Date(),
      lastLogin: new Date(),
    },
    // Add more rows here...
  ]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 160, editable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    { field: "age", headerName: "Age", type: "number", editable: true },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      type: "dateTime",
      width: 220,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: () => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
      ],
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onEditCellChangeCommitted={(params) => {
          const updatedRows = rows.map((row) =>
            row.id === params.id
              ? { ...row, [params.field]: params.props.value }
              : row
          );
          setRows(updatedRows);
        }}
      />
    </div>
  );
};

export default DataKaryawan;

// import React, { useState } from "react";
// import { useTable, Column } from "react-table";
// import "./DataKaryawan.css";

// interface FormData {
//   No: string;
//   Username: string;
//   Nip: string;
//   Name: string;
//   Role: string;
// }

// interface EditableColumn extends Column {
//   isEditable?: boolean;
// }

// interface DataKaryawanProps {
//   columns: EditableColumn[];
// }

// const DataKaryawan: React.FC<DataKaryawanProps> = ({ columns }) => {
//   const [data, setData] = useState<FormData[]>([]);
//   const [formData, setFormData] = useState<FormData>({
//     No: "",
//     Username: "",
//     Nip: "",
//     Name: "",
//     Role: "",
//   });
//   const [showInput, setShowInput] = useState(false);

//   const addData = () => {
//     setData([...data, formData]);
//     setFormData({
//       No: "",
//       Username: "",
//       Nip: "",
//       Name: "",
//       Role: "",
//     });
//     setShowInput(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable<FormData>({
//       columns,
//       data,
//     });

//   return (
//     <div>
//       <h2>Data Karyawan</h2>
//       <div className="add-data-form">
//         <button onClick={() => setShowInput(true)}>Tambah Data Karyawan</button>
//       </div>
//       <div className="table-container">
//         <table className="table" {...getTableProps()}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row, rowIndex) => {
//               prepareRow(row);
//               return (
//                 <tr key={`row-${rowIndex}`} {...row.getRowProps()}>
//                   {row.cells.map((cell, cellIndex) => (
//                     <td key={`cell-${cellIndex}`} {...cell.getCellProps()}>
//                       {cell.render("Cell")}
//                     </td>
//                   ))}
//                 </tr>
//               );
//             })}
//             {showInput && (
//               <tr>
//                 {columns.map((column, columnIndex) => (
//                   <td key={`input-${columnIndex}`}>
//                     {column.isEditable ? (
//                       <input
//                         type="text"
//                         name={column.accessor}
//                         value={formData[column.accessor]}
//                         onChange={handleInputChange}
//                       />
//                     ) : (
//                       ""
//                     )}
//                   </td>
//                 ))}
//                 <td>
//                   <button onClick={addData}>Simpan</button>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DataKaryawan;

// import React, { useState } from "react";
// import { useTable, Column } from "react-table";
// import "./DataKaryawan.css";

// interface FormData {
//   No: string;
//   Username: string;
//   Nip: string;
//   Name: string;
//   Role: string;
// }

// interface EditableColumn extends Column {
//   isEditable?: boolean;
// }

// interface DataKaryawanProps {
//   columns: EditableColumn[];
// }

// const DataKaryawan: React.FC<DataKaryawanProps> = ({ columns }) => {
//   const [data, setData] = useState<FormData[]>([]);
//   const [formData, setFormData] = useState<FormData>({
//     No: "",
//     Username: "",
//     Nip: "",
//     Name: "",
//     Role: "",
//   });

//   const addData = () => {
//     setData([...data, formData]);
//     setFormData({
//       No: "",
//       Username: "",
//       Nip: "",
//       Name: "",
//       Role: "",
//     });
//   };

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable<FormData>({
//       columns,
//       data,
//     });

//   return (
//     <div>
//       <h2>Data Karyawan</h2>
//       <button onClick={addData}>Tambah Data Karyawan</button>
//       <div className="table-container">
//         <table className="table" {...getTableProps()}>
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row, rowIndex) => {
//               prepareRow(row);
//               return (
//                 <tr key={`row-${rowIndex}`}>
//                   {row.cells.map((cell, cellIndex) => (
//                     <td
//                       key={`cell-${rowIndex}-${cellIndex}`}
//                       {...cell.getCellProps()}
//                     >
//                       {cell.column.isEditable ? (
//                         <input
//                           type="text"
//                           value={cell.value}
//                           onChange={(
//                             e: React.ChangeEvent<HTMLInputElement>
//                           ) => {
//                             const newValue: string = e.target.value;
//                             // Update data state with the new value
//                             setData((oldData) =>
//                               oldData.map((row, index) =>
//                                 index === rowIndex
//                                   ? {
//                                       ...row,
//                                       [cell.column.id]: newValue,
//                                     }
//                                   : row
//                               )
//                             );
//                           }}
//                         />
//                       ) : (
//                         cell.render("Cell")
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DataKaryawan;
