// import e from 'cors';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

const Otpverify = () => {

    const history = useHistory();

    const [resetotp, setOtp] = useState({ otp: "" });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value)
        setOtp({ ...resetotp, [name]: value })
    }

    const handleSubmit = (e) => {
        const otp = { ...resetotp };
        axios.post('https://sattu-app.herokuapp.com/otpverify', otp)
            .then(response => {
                if (response) {
                    console.log(response)
                    alert(response.data);
                    if (response.data === "Verification Succesfull") {
                        history.push("/home");
                    }
                }
                else {
                    alert("verification failed")
                }
            })
            .catch(err => {
                alert("catch ka error")
                console.log(err);
            })

        e.preventDefault()
    }

    return (
        <>
            <div className="container register">
                <div className="row ">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>VERIFY</h3>
                        <p>OTP is valid only for 5 minute!</p>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" >
                            <div className="tab-pane  show active"  >
                                <h3 className="register-heading">Enter Valid OTP!</h3>
                                <form action="/otpverify" onSubmit={handleSubmit}>
                                    <div className="row register-form mx-auto">
                                        <div className="col-md-6 mx-auto" >
                                            <div className="form-group">
                                                <input autoComplete="off" type="number" className="form-control" placeholder="OTP *" onChange={handleInput} value={resetotp.otp} name="otp" />
                                            </div>



                                            <input type="submit" className="btnRegister" value="Verify" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otpverify
