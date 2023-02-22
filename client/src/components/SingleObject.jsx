import React from 'react'

function SingleObject(props) {
    const obj = props.obj
    const t = props.table
    if (t === "classroom") {
        return (
            <tr>
                <td>{obj.building}</td>
                <td>{obj.room_number}</td>
                <td>{obj.capacity}</td>
            </tr>
        )
    }else if(t==="department"){
        return (
            <tr>
                <td>{obj.dept_name}</td>
                <td>{obj.building}</td>
                <td>{obj.budget}</td>
            </tr>
        )
    }else if(t==="course"){
        return (
            <tr>
                <td>{obj.course_id}</td>
                <td>{obj.title}</td>
                <td>{obj.dept_name}</td>
                <td>{obj.credits}</td>
            </tr>
        )
    }else if(t==="instructor"){
        return (
            <tr>
                <td>{obj.ID}</td>
                <td>{obj.name}</td>
                <td>{obj.dept_name}</td>
                <td>{obj.salary}</td>
            </tr>
        )
    }else if(t==="section"){
        return (
            <tr>
                <td>{obj.course_id}</td>
                <td>{obj.sec_id}</td>
                <td>{obj.semester}</td>
                <td>{obj.year}</td>
                <td>{obj.building}</td>
                <td>{obj.room_number}</td>
                <td>{obj.time_slot_id}</td>
            </tr>
        )
    }else if(t==="teaches"){
        return (
            <tr>
                <td>{obj.ID}</td>
                <td>{obj.course_id}</td>
                <td>{obj.sec_id}</td>
                <td>{obj.semester}</td>
                <td>{obj.year}</td>
            </tr>
        )
    }else if(t==="student"){
        return (
            <tr>
                <td>{obj.ID}</td>
                <td>{obj.name}</td>
                <td>{obj.dept_name}</td>
                <td>{obj.tot_cred}</td>
            </tr>
        )
    }else if(t==="takes"){
        return (
            <tr>
                <td>{obj.ID}</td>
                <td>{obj.course_id}</td>
                <td>{obj.sec_id}</td>
                <td>{obj.semester}</td>
                <td>{obj.year}</td>
                <td>{obj.grade}</td>
            </tr>
        )
    }else if(t==="advisor"){
        return (
            <tr>
                <td>{obj.s_ID}</td>
                <td>{obj.i_ID}</td>
            </tr>
        )
    }else if(t==="time_slot"){
        return (
            <tr>
                <td>{obj.time_slot_id}</td>
                <td>{obj.day}</td>
                <td>{obj.start_time}</td>
                <td>{obj.end_time}</td>
            </tr>
        )
    }else if(t==="prereq"){
        return (
            <tr>
                <td>{obj.course_id}</td>
                <td>{obj.prereq_id}</td>
            </tr>
        )
    }
}

export default SingleObject