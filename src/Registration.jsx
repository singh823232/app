import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';










const Registration = () => {

    const history = useHistory();

    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
        email: "",
        phone: "",
        age: ""
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserRegistration({ ...userRegistration, [name]: value })
        // setUserRegistration({
        //     firstname: name.value,
        // })
    }

    // const user1 = { ...userRegistration };
    // console.log(user1);

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     alert("submission success");
    // }

    const handleSubmit = (e) => {
        // setLoading(true);
        // setIsError(false);localhost:8000/register

        const user = { ...userRegistration };
        axios.post('https://sattu-app.herokuapp.com/register', user)
            .then(res => {
                console.log(res);
                alert(`${res.data}`);
                if (res.data === "Registration successfull") {
                    history.push("/resetpass");
                }
            })
            .catch(err => {
                alert("please verify email or mobile number");
                console.log(err)
            })


        // if (userRegistration.password === userRegistration.confirmpassword) {

        // }
        // else {
        //     alert("password are not matched");
        // }

        // console.log(user);
        e.preventDefault();
    }


    return (
        <>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <NavLink to="/login" type="submit" name="" >Login</NavLink>
                        {/* <input type="submit" name="" value="Login" /> */}
                        <br />
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" >
                            <div className="tab-pane  show active"  >
                                <h3 className="register-heading">Register Here!</h3>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="row register-form">
                                        <div className="col-md-6 " >
                                            <div className="form-group">
                                                <input autoComplete="off" type="text" className="form-control" placeholder="First Name *" value={userRegistration.firstname} onChange={handleInput} name="firstname" />
                                            </div>
                                            <div className="form-group">
                                                <input autoComplete="off" type="text" className="form-control" placeholder="Last Name *" value={userRegistration.lastname} onChange={handleInput} name="lastname" />
                                            </div>
                                            <div className="form-group">
                                                <input autoComplete="off" type="password" className="form-control" placeholder="Password *" value={userRegistration.password} onChange={handleInput} name="password" />
                                            </div>
                                            <div className="form-group">
                                                <input autoComplete="off" type="password" className="form-control" placeholder="Confirm Password *" value={userRegistration.confirmpassword} onChange={handleInput} name="confirmpassword" />
                                            </div>

                                        </div>
                                        <div className="col-md-6 ">
                                            <div className="form-group">
                                                <input autoComplete="off" type="email" className="form-control" placeholder="Your Email *" value={userRegistration.email} onChange={handleInput} name="email" />
                                            </div>
                                            <div className="form-group">
                                                <input autoComplete="off" type="text" minLength="10" maxLength="10" className="form-control" placeholder="Your Phone *" value={userRegistration.phone} onChange={handleInput} name="phone" />
                                            </div>
                                            <div className="form-group">
                                                <input autoComplete="off" type="text" className="form-control" placeholder="Age *" value={userRegistration.age} onChange={handleInput} name="age" />
                                            </div>
                                            {/* <div className="form-group">
                                                <input autoComplete="off" type="text" className="form-control" placeholder="Address *" value={userRegistration.dateofbirth} name="address" />
                                            </div> */}
                                            <input type="submit" className="btnRegister" value="Register" />
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

export default Registration






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