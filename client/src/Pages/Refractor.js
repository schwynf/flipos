
import React from "react";
import "./Refractor.css"
const Refractor = () => {

    return (
        <>
            <div className="container-wrapper text-center">
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label><br></br>
                        <input type="email" name="email" placeholder="Email" ></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label><br></br>
                        <input type="password" name="password" placeholder="**********"></input><br></br>
                    </div>
                    <div className="form-group">
                        <label for="message">Why are you signing up?</label><br></br>
                        <textarea name="message" placeholder="Message"></textarea><br></br>
                    </div>
                    <button className="blue-button">Sign up</button>
                    <button className="orange-button">Cancel</button>
                </form>
            </div>
        </>
    )
}

export default Refractor;