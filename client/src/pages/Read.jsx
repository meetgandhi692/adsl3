import React from 'react'
import Dropdown from '../components/Dropdown'
import { useState } from 'react'
import './view.css'
import SingleObject from '../components/SingleObject'
// import axios from 'axios'

function Read() {
    const [table, setTable] = useState('')
    const [list, setList] = useState([])
    const getTable = (name, listt) => {
        setTable(name)
        setList(listt)
        // console.log(`Coming from Dropdown ${name}`)
        // console.log(listt)
    }
    return (
        <div>
            <Dropdown onChange={getTable} />
            {getTableData(table, list)}
        </div>
    )
}

const getTableData = (table, list) => {
    if (table === "classroom") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Building</th>
                        <th>Room Number</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"classroom"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "department") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Department Name</th>
                        <th>Building</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"department"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "course") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Title</th>
                        <th>Department Name</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"course"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "instructor") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Instructor ID</th>
                        <th>Name</th>
                        <th>Department Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"instructor"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "section") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Section ID</th>
                        <th>Semester</th>
                        <th>Year</th>
                        <th>Building</th>
                        <th>Room Number</th>
                        <th>Time Slot ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"section"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "teaches") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Instructor ID</th>
                        <th>Course ID</th>
                        <th>Section ID</th>
                        <th>Semester</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"teaches"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "student") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Department Name</th>
                        <th>Total Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"student"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "takes") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Course ID</th>
                        <th>Section ID</th>
                        <th>Semester</th>
                        <th>Year</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"takes"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "advisor") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Instructor ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"advisor"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "time_slot") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Slot ID</th>
                        <th>Day</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"time_slot"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
    if (table === "prereq") {
        return (
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Prerequisite Course ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(val => {
                            return <SingleObject obj={val} table={"prereq"} />
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Read