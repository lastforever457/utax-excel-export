import React from 'react';
import ExcelExport from "./components/ExcelExport";
import {Table} from "antd";

function App() {
    const dataSource = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div>
            <Table
                id="myTable"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
            <ExcelExport id={"myTable"} filename={"myTable"} buttonText={"Excel"}/>
        </div>
    );
}

export default App;