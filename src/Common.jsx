import React from 'react'
import { NavLink } from 'react-router-dom';
// import web from "./Component/image/websvg.svg";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center  section-head">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.heading}<span className="brand-name">SatyamSingh</span></h1>
                                    <h2 className="my-3">We are talented developer making websites</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.path} className="btn-get-started"> {props.button} </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.img} className="img-fluid animated" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
