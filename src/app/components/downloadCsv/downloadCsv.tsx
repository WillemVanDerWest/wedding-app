import React from 'react';
interface props {
    data?: Array<IRsvpUsers>,
    fileName: string
}

interface IRsvpUsers{
    name? : string,
    surname? : string,
    date? : Date,
    attending? : boolean,
    email? : string,
    allergens? : string
}

export const DownloadCSV = ({ data, fileName } : props) => {
  const convertToCSV = (objArray: Array<IRsvpUsers>) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (const index in array[i]) {
        if (line !== '') line += ',';

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  const downloadCSV = () => {
    const csvData = new Blob([convertToCSV(data || [])], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = `${fileName}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='bg-slate-500 text-white hover:bg-slate-400 px-3 py-1' onClick={downloadCSV}>Download CSV</button>
  );
}

export default DownloadCSV;