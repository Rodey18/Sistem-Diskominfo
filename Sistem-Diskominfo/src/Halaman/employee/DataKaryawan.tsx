import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridActionsCellItem,
} from "@mui/x-data-grid";

interface RowData {
  id: number;
  no: string;
  username: string;
  nip: string;
  name: string;
  role: string;
  dateCreated: Date;
  lastLogin: Date;
}

const DataKaryawan: React.FC = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  useEffect(() => {
    // Load data from local storage on component mount
    const savedRows = localStorage.getItem("rows");
    if (savedRows) {
      setRows(JSON.parse(savedRows));
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever rows change
    localStorage.setItem("rows", JSON.stringify(rows));
  }, [rows]);

  const handleEdit = (id: number) => {
    const updatedRows = rows.map((row: RowData) =>
      row.id === id ? { ...row, _edit: true } : row
    );
    setRows(updatedRows);
  };

  const handleSaveEdit = (id: number) => {
    const updatedRows = rows.map((row: RowData) =>
      row.id === id ? { ...row, _edit: false } : row
    );
    setRows(updatedRows);

    // Update local storage with the updated data
    localStorage.setItem("rows", JSON.stringify(updatedRows));

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const handleDelete = (id: number) => {
    const updatedRows = rows.filter((row: RowData) => row.id !== id);
    setRows(updatedRows);

    // Update local storage with the updated data
    localStorage.setItem("rows", JSON.stringify(updatedRows));
  };

  const handleAdd = () => {
    const newId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;
    const newRow: RowData = {
      id: newId,
      no: "",
      username: "",
      nip: "",
      name: "",
      role: "",
      dateCreated: new Date(),
      lastLogin: new Date(),
    };
    const updatedRows = [...rows, newRow];
    setRows(updatedRows);

    // Update local storage with the updated data
    localStorage.setItem("rows", JSON.stringify(updatedRows));
  };

  const handleCellEdit = (params: any) => {
    const { id, field, value } = params;

    // Validasi untuk field "Name" agar hanya menerima huruf
    if (field === "name" && isNaN(value)) {
      setRows((prevRows: any) =>
        prevRows.map((row: any) =>
          row.id === id ? { ...row, [field]: value } : row
        )
      );
    }
  };

  const columns: GridColDef[] = [
    { field: "no", headerName: "No", width: 50 },
    {
      field: "username",
      headerName: "Username",
      type: "number",
      width: 100,
      editable: true,
    },
    { field: "nip", headerName: "NIP", width: 100, editable: true },
    { field: "name", headerName: "Name", width: 100, editable: true },
    { field: "role", headerName: "Role", width: 100, editable: true },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      width: 180,
      editable: false, // Tidak dapat diedit
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      type: "dateTime",
      width: 220,
      editable: false, // Tidak dapat diedit
    },
    {
      field: "actions",
      type: "actions",
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEdit(params.id as number)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id as number)}
        />,
        <GridActionsCellItem
          icon={<SaveIcon />}
          label="Save"
          onClick={() => handleSaveEdit(params.id as number)}
        />,
      ],
    },
  ];

  return (
    <div>
      <h2>Data Karyawan</h2>
      <button onClick={handleAdd}>Tambah Data Karyawan</button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onEditCellChangeCommitted={(params: any) => handleCellEdit(params)}
          isCellEditable={() => true}
        />
      </div>
      {saveSuccess && (
        <div className="alert alert-success" role="alert">
          Data berhasil disimpan!
        </div>
      )}
    </div>
  );
};

export default DataKaryawan;

// import React, { useState, useEffect } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import SaveIcon from "@mui/icons-material/Save";
// import {
//   DataGrid,
//   GridColDef,
//   GridRowsProp,
//   GridActionsCellItem,
// } from "@mui/x-data-grid";

// interface RowData {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
//   dateCreated: Date;
//   lastLogin: Date;
// }

// const DataKaryawan: React.FC = () => {
//   const [rows, setRows] = useState<GridRowsProp>([]);
//   const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

//   useEffect(() => {
//     // Simpan data ke penyimpanan lokal atau server di sini
//     localStorage.setItem("rows", JSON.stringify(rows));
//   }, [rows]);

//   const handleEdit = (id: number) => {
//     const updatedRows = rows.map((row) =>
//       row.id === id ? { ...row, _edit: true } : row
//     );
//     setRows(updatedRows);
//   };

//   const handleSaveEdit = (id: number) => {
//     const updatedRows = rows.map((row) =>
//       row.id === id ? { ...row, _edit: false } : row
//     );
//     setRows(updatedRows);
//     setSaveSuccess(true);
//     setTimeout(() => {
//       setSaveSuccess(false);
//     }, 3000);
//   };

//   const handleDelete = (id: number) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//   };

//   const handleAdd = () => {
//     const newId = rows.length + 1;
//     const newRow = {
//       id: newId,
//       no: "",
//       username: "",
//       nip: "",
//       name: "",
//       role: "",
//       dateCreated: new Date(),
//       lastLogin: new Date(),
//     };
//     setRows([...rows, newRow]);
//   };

//   const handleCellEdit = (params: any) => {
//     const { id, field, value } = params;
//     setRows((prevRows: any) =>
//       prevRows.map((row: any) =>
//         row.id === id ? { ...row, [field]: value } : row
//       )
//     );
//   };

//   const columns: GridColDef[] = [
//     { field: "no", headerName: "No", width: 50 },
//     { field: "usename", headerName: "Username", width: 100, editable: true },
//     { field: "nip", headerName: "NIP", width: 100, editable: true },
//     { field: "name", headerName: "Name", width: 100, editable: true },
//     { field: "role", headerName: "Role", width: 100, editable: true },
//     {
//       field: "dateCreated",
//       headerName: "Date Created",
//       type: "date",
//       width: 180,
//       editable: true,
//     },
//     {
//       field: "lastLogin",
//       headerName: "Last Login",
//       type: "dateTime",
//       width: 220,
//       editable: true,
//     },
//     {
//       field: "actions",
//       type: "actions",
//       width: 200,
//       getActions: (params) => [
//         <GridActionsCellItem
//           icon={<SaveIcon />}
//           label="Save"
//           onClick={() => handleSaveEdit(params.id as number)}
//         />,
//         <GridActionsCellItem
//           icon={<EditIcon />}
//           label="Edit"
//           onClick={() => handleEdit(params.id as number)}
//         />,
//         <GridActionsCellItem
//           icon={<DeleteIcon />}
//           label="Delete"
//           onClick={() => handleDelete(params.id as number)}
//         />,
//       ],
//     },
//   ];

//   return (
//     <div>
//       <h2>Data Karyawan</h2>
//       <button onClick={handleAdd}>Tambah Data Karyawan</button>
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           onEditCellChangeCommitted={(params) => handleCellEdit(params)}
//           isCellEditable={() => true}
//         />
//       </div>
//       {saveSuccess && (
//         <div className="alert alert-success" role="alert">
//           Data berhasil disimpan!
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataKaryawan;
