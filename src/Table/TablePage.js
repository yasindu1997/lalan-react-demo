import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function TablePage() {

    const [id, setId] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [userName, setUserName] = useState('');
    const [data, setData] = useState([]);

    const clearData = () => {
        setId("");
        setFName("");
        setLName("");
        setUserName("");
    }

    const addData = () => {
        const row = { id: id, fName: fName, lName: lName, userName: userName };
        setData(current => [...current, row]);
        clearData();
    }

    return (
        <div>
            <div style={{ width: '50%', marginLeft: '5%', marginTop: '5%' }}>
                <Form.Control type="email" placeholder="Enter Id" style={{ marginBottom: '10px' }} value={id} onChange={(e) => { setId(e.target.value) }} />
                <Form.Control type="email" placeholder="Enter First Name" style={{ marginBottom: '10px' }} value={fName} onChange={(e) => { setFName(e.target.value) }} />
                <Form.Control type="email" placeholder="Enter Last Name" style={{ marginBottom: '10px' }} value={lName} onChange={(e) => { setLName(e.target.value) }} />
                <Form.Control type="email" placeholder="Enter Username" style={{ marginBottom: '20px' }} value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                <Button variant="success" onClick={() => { addData() }} style={{ marginBottom: '20px' }}>Add To Table</Button>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => {
                            return (
                                <tr>
                                    <td>{d.id}</td>
                                    <td>{d.fName}</td>
                                    <td>{d.lName}</td>
                                    <td>{d.userName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
