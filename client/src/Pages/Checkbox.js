import React from "react";
import "./Checkbox.css"


const Checkbox = () => {
    return (
        <>
            <form>
                <label className="container mt-5"><br></br>
                    <input type="checkbox"></input>
                    <span className="checkmark-box"></span>
                </label>
                <label className="container"><br></br>
                    <input type="checkbox"></input>
                    <span className="checkmark-box"></span>
                </label>
            </form>
        </>
    )
}

export default Checkbox;