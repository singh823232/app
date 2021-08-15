import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import Otpverify from './Otpverify';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Registration from './Registration';



const Resetpass = () => {
    const history = useHistory()

    const [userOTP, setUserOTP] = useState({
        email: "",
        // password: "",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserOTP({ ...userOTP, [name]: value })
    }

    const handleSubmit = (event) => {
        const user = { ...userOTP }
        axios.post('http:localhost:8000/resetpass', user)
            .then(res => {
                alert("OTP sended to your email");
                history.push("/otpverify")
                console.log(res);
                // return <Route exact path="/otpverify" component={Otpverify} />

            })
            .catch(err => {
                alert("Invalid email");
                console.log(err);
            })
        event.preventDefault();
    }


    return (
        <>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Reset Password</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <NavLink to="/registration" type="submit" name="" >Register</NavLink>
                        {/* <input type="submit" name="" value="Register" to="registration" /> */}
                        <br />
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" >
                            <div className="tab-pane  show active"  >
                                <h3 className="register-heading">Enter email here!</h3>
                                <form action="/otpverify" onSubmit={handleSubmit}>
                                    <div className="row register-form ">
                                        <div className="col-md-6 mx-auto" >
                                            <div className="form-group">
                                                <input autoComplete="off" type="email" className="form-control" placeholder="Email *" value={userOTP.email} onChange={handleInput} name="email" />
                                            </div>
                                            <input type="submit" className="btnRegister" value="Send OTP" />
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

export default Resetpass;






// practice

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function PostRequestHooks() {
//     const [articleId, setArticleId] = useState(null);

//     useEffect(() => {
//         // POST request using axios inside useEffect React hook
//         const article = { title: 'React Hooks POST Request Example' };
//         axios.post('https://reqres.in/api/articles', article)
//             .then(response => setArticleId(response.data.id));

//     // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);

//     return (
//         <div className="card text-center m-3">
//             <h5 className="card-header">POST Request with React Hooks</h5>
//             <div className="card-body">
//                 Returned Id: {articleId}
//             </div>
//         </div>
//     );
// }

// export { PostRequestHooks };