import React, { Component } from 'react';
import './Administrador.css';
import { Table } from 'antd';
import {Icon} from 'antd';

const columns = [
    { title: '#Pedido',
        dataIndex: 'id',
        key: 'id' },
    { title: 'Total',
        dataIndex: 'total',
        key: 'total' },
    { title: 'Fecha Pedido',
        dataIndex: 'date',
        key: 'date' },
    { title: 'Fecha Entrega',
        dataIndex: 'arrive',
        key: 'arrive' },
    { title: 'Status',
        dataIndex: 'status',
        key: 'x', render: () => <Icon type="pushpin" /> },

];
const data = [
    { key: 1, id: 'John Brown', arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'Juan López entregará tu pedido, puedes comunicarte con el al 55 555 55 55' },
    { key: 2, id: 'John Brown', arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
    { key: 3, id: 'John Brown', arrive:'20 Marzo', total: '$50.00', date: 32, status: 'New York No. 1 Lake Park', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
];


class AdminPedidos extends Component {
    render() {
        return (
            <div style={{ width:'90%', flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>

            <div className="pedidos">
                <h2>Mis pedidos</h2>
                <br/>
                <div className="box_pedidos">
                    <div className="pedido">
                        <h3>Cervecería Allende S.A. de C.V.</h3>
                        <p>Ventas del mes: </p>
                        <p>Adeudo: </p>

                    </div>
                    <br/>
                    <div className="table">
                        <Table
                            columns={columns}
                            expandedRowRender={record => <p style={{ margin: 0,  width:"100%" }}>{record.description}</p>}
                            dataSource={data}
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default AdminPedidos;
