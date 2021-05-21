import React from "react";
import "./Checkbox.css"


const Checkbox = () => {
    return (
        <>
            <form>
                <label className="container mt-5"><br></br>
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>
                <label className="container"><br></br>
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                </label>
            </form>
        </>
    )
}

export default Checkbox;