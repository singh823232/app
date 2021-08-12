import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import Registration from './Registration';



const Login = () => {
    const history = useHistory()

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserLogin({ ...userLogin, [name]: value })
    }

    const handleSubmit = (event) => {
        const user = { ...userLogin }
        axios.post('http://localhost:8000/login', user)
            .then(res => {
                alert(`${res.data}`);
                if (res.data === "Login successfull") {
                    history.push("/")
                }
            })
            .catch(err => {
                alert("Login Failed");
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
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <NavLink to="/registration" type="submit" name="" >Register</NavLink>
                        <br />
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" >
                            <div className="tab-pane  show active"  >
                                <h3 className="register-heading">Login here!</h3>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="row register-form">
                                        <div className="col-md-6 " >
                                            <div className="form-group">
                                                <input autoComplete="off" type="email" className="form-control" placeholder="Email *" value={userLogin.email} onChange={handleInput} name="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input autoComplete="off" type="password" className="form-control" placeholder="Password *" value={userLogin.password} onChange={handleInput} name="password" />
                                            </div>
                                            <div className="form-group">
                                                <NavLink to="/resetpass" >Reset password</NavLink>
                                            </div>
                                            <input type="submit" className="btnRegister" value="Login" />
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

export default Login;






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