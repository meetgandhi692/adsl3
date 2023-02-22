const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Route to get all posts
app.get("/read", (req, res) => {
    const table = req.headers.table;
    db.query(`SELECT * FROM ${table}`, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.send(result);
    });
})

app.post("/insert", (req, res) => {
    // console.log(req)
    const table = req.body.table;
    if (table == "department") {
        values = [req.body.dept_name, req.body.building, req.body.budget];
    } else if (table == "classroom") {
        values = [req.body.building, req.body.room_number, req.body.capacity];
    } else if (table == "course") {
        values = [
            req.body.course_id,
            req.body.title,
            req.body.dept_name,
            req.body.credits,
        ];
    } else if (table == "instructor") {
        values = [req.body.ID, req.body.name, req.body.dept_name, req.body.salary];
    } else if (table == "section") {
        values = [
            req.body.course_id,
            req.body.sec_id,
            req.body.semester,
            req.body.year,
            req.body.building,
            req.body.room_number,
            req.body.time_slot_id,
        ];
    } else if (table == "teaches") {
        values = [
            req.body.ID,
            req.body.course_id,
            req.body.sec_id,
            req.body.semester,
            req.body.year,
        ];
    } else if (table == "student") {
        values = [
            req.body.ID,
            req.body.name,
            req.body.dept_name,
            req.body.tot_cred,
        ];
    } else if (table == "takes") {
        values = [
            req.body.ID,
            req.body.course_id,
            req.body.sec_id,
            req.body.semester,
            req.body.year,
            req.body.grade,
        ];
    } else if (table == "advisor") {
        values = [req.body.s_ID, req.body.i_ID];
    } else if (table == "time_slot") {
        values = [
            req.body.time_slot_id,
            req.body.day,
            req.body.start_time,
            req.body.end_time,
        ];
    } else if (table == "prereq") {
        values = [req.body.course_id, req.body.prereq_id];
    }

    db.query(`Insert into ${table} values(?)`, [values], (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.delete("/api/delete", (req, res) => { });


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
