import React from 'react';
import {Button} from 'antd';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';


const ExcelExport = ({id, filename, buttonText}: { id: string, filename: string, buttonText: string }) => {
    const handleExport = () => {
        const table = document.getElementById(id);
        if (table) {
            const ws = XLSX.utils.table_to_sheet(table);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            const wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'array'});
            saveAs(new Blob([wbout], {type: 'application/octet-stream'}), filename);
        }
    };

    return (
        <div>
            <Button onClick={handleExport} style={{margin: "10px 0"}}>
                {buttonText}
            </Button>
        </div>
    );
};

export default ExcelExport;