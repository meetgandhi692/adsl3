import React, { useState } from "react";
import Axios from "axios";

const options = [
  "classroom",
  "department",
  "course",
  "instructor",
  "section",
  "teaches",
  "student",
  "takes",
  "advisor",
  "time_slot",
  "prereq",
];

function Dropdown(props) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(window.location.href==='http://localhost:3000/read'){
      await Axios.get("http://localhost:3002/read",
        { headers: { "table": selected } }
      ).then((response) => {
        props.onChange(selected,response.data);
      })
    }else if(window.location.href==='http://localhost:3000/insert'){
      props.onChange(selected)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="dropdown">
        <label>
          <span className="tlabel">Pick a table:</span>
          <select value={selected} onChange={handleChange}>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <span className="tlabel">
          <input type="submit" value="Submit" />
        </span>
      </form>
    </>
  );
}

export default Dropdown;
