import React, {useState } from "react";
import "./Signup.css";
import {nameCheck,passwordLengthCheck,caseSensitiveCheck,numberCheck,spaceCheck,repeatedLettersCheck,repeatedNumbersCheck,specialCharacterCheck } from "../utilities/utilities"


const Signup = () => {
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [result, setResult] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if(!passwordLengthCheck(password)){
            valid = false
        }
        if(!caseSensitiveCheck(password)){
            valid = false
        }
        if(!numberCheck(password)){
            valid = false
        }
        if(!spaceCheck(password)){
            valid = false
        }
        if(!repeatedLettersCheck(password)){
            valid = false
        }
        if(!repeatedNumbersCheck(password)){
            valid = false
        }
        if(!specialCharacterCheck(password)){
            valid = false
        }
        if(!nameCheck(password,firstName,lastName)){
            valid = false
        }

        
        if(valid === false){
            setResult("Sign Up failed! Check console for reason!")
        }else{
            setResult("Sign Up Passed")
        }
    };

    return (
        <>
            <div className="row signup-container">
                <aside className="col-sm-4"></aside>
                <div className="col-sm-4">
                    <div className="card">
                        <article className="card-body">
                            <h3 className="text-center">Sign Up</h3>
                            <div>{result}</div>
                            <form>
                                <div></div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input onChange={event => setFirstName(event.target.value.trim())} name="firstName" className="form-control" placeholder="First Name" type="text" value={firstName}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input onChange={event => setLastName(event.target.value.trim())} name="lastName" className="form-control" placeholder="Last Name" type="text" value={lastName}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input onChange={event => setPassword(event.target.value.trim())} name="password" className="form-control" placeholder="**********" type="password" value={password}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button disabled={!(firstName && lastName && password)} onClick={handleFormSubmit} type="submit" className="btn btn-primary btn-block"> Register </button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
                <aside className="col-sm-4"></aside>
            </div>
        </>
    )
}

export default Signup;