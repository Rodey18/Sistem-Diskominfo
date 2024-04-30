import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";
import * as XLSX from "xlsx";

export default class VisitorChart extends PureComponent {
  state = {
    data: [],
  };

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      this.setState({
        data: data.map(([month, visitors]) => ({ month, visitors })),
      });
    };
    reader.readAsBinaryString(file);
  };

  render() {
    const { data } = this.state;
    const cardinal = curveCardinal.tension(0.2);

    return (
      <div>
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={this.handleFileUpload}
        />
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
              />
              <Area
                type={cardinal}
                dataKey="visitors"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    );
  }
}

// import React, { Component, ChangeEvent } from "react";
// import CanvasJSReact from "@canvasjs/react-charts";
// import * as XLSX from "xlsx";

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// interface DataPoint {
//   x: Date;
//   y: number;
// }

// interface ExcelVisitorsState {
//   data: DataPoint[];
// }

// class ExcelVisitors extends Component<{}, ExcelVisitorsState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]; // Mengambil file yang diunggah
//     if (!file) return;
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       if (!e.target) return;
//       const data = e.target.result as string; // Mendapatkan hasil baca dari file
//       // Proses data di sini, menggunakan pustaka XLSX untuk membaca file Excel
//       const processedData = this.processExcelData(data);
//       this.setState({ data: processedData });
//     };

//     // Membaca file sebagai Binary String
//     reader.readAsBinaryString(file);
//   };

//   processExcelData = (data: string): DataPoint[] => {
//     // Menggunakan pustaka XLSX untuk membaca file Excel
//     const workbook = XLSX.read(data, { type: "binary" });
//     const sheetName = workbook.SheetNames[0]; // Mengambil nama sheet pertama
//     const sheet = workbook.Sheets[sheetName];
//     // Mengonversi data Excel menjadi array objek JavaScript
//     const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//     // Mengonversi array objek menjadi format DataPoint yang sesuai
//     const processedData: DataPoint[] = jsonData
//       .slice(1) // Menghilangkan header
//       .map((row: any) => ({
//         x: new Date(row[0]), // Kolom pertama sebagai tanggal
//         y: row[1], // Kolom kedua sebagai nilai
//       }));
//     return processedData;
//   };

//   render() {
//     const { data } = this.state;

//     // Gunakan data ini untuk mengonfigurasi grafik
//     const options = {
//       animationEnabled: true,
//       title: {
//         text: "Catatan Sedekah Subuh", // Judul grafik
//       },
//       data: [
//         {
//           type: "line",
//           dataPoints: data, // Menggunakan data dari file Excel
//         },
//       ],
//     };

//     return (
//       <div>
//         <input type="file" onChange={this.handleFileUpload} />
//         <CanvasJSChart options={options} />
//       </div>
//     );
//   }
// }

// export default ExcelVisitors;
