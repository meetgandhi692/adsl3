import React, { useState } from 'react'
import Dropdown from '../components/Dropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Insert() {
    const [table, setTable] = useState('')
    const getTable = (name) => {
        setTable(name)
        console.log(`Coming from Dropdown ${name}`)
    }

    return (
        <div>
            <Dropdown onChange={getTable} />
            {
                BasicExample(table)
            }
        </div>
    )
}

function BasicExample(table) {
    let [form,setForm]=useState({})
    const setField=(field,value)=>{
        setForm({
            ...form,
            [field]:value
        })
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        console.log(form)
        form={...form,"table":table}
        console.log(form)
        await axios.post("http://localhost:3002/insert",form).then((res)=>{
            console.log(res)
        })
    }
    if(table==="classroom"){
        return (
            <div className='formdiv'>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Building</Form.Label>
                        <Form.Control required placeholder="Enter Building" onChange={e=>setField("building",e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Label>Room Number</Form.Label>
                        <Form.Control required placeholder="Enter Room Number" onChange={e=>setField("room_number",e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control required placeholder="Enter Room Capacity" onChange={e=>setField("capacity",e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }else if(table==="department"){
        return (
            <div className='formdiv'>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" >
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control required placeholder="Enter Dept Name" onChange={e=>setField("dept_name",e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Building</Form.Label>
                        <Form.Control required placeholder="Enter Building" onChange={e=>setField("building",e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Label>Budget</Form.Label>
                        <Form.Control required placeholder="Enter Dept Budget" onChange={e=>setField("budget",e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Insert