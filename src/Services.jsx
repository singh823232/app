import React from 'react'
import Card from './Card';
import SData from './SData';
// import web from "./Component/image/i1.jpg";


const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center" > Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto  mb-5">
                        <div className="row gy-4">
                            {
                                SData.map((val, ind) => {   // database se ye access kar sakte hai abb ye kaise kar sakte hai ek uspe banana hai 
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;