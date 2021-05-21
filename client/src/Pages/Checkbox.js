import React from "react";
import "./Checkbox.css"


const Checkbox = () => {
    return (
        <>
            <label className="container mt-5"><br></br>
                <input type="checkbox" name="checkbox1"></input>
                <span className="checkmark"></span>
            </label>

            <label className="container"><br></br>
                <input type="checkbox" name="checkbox2"></input>
                <span className="checkmark"></span>
            </label>
        </>
    )
}

export default Checkbox;