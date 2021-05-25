import React from "react";
import "./Checkbox.css"


const Checkbox = () => {
    return (
        <>
            <form>
                <label className="container mt-5 mb-5">
                    <input type="checkbox"></input><br></br>
                    <span className="checkmark-box"></span>
                </label>
                <label className="container">
                    <input type="checkbox"></input><br></br>
                    <span className="checkmark-box"></span>
                </label>
            </form>
        </>
    )
}

export default Checkbox;