import React from 'react'
import Common from './Common';
import about from "./Component/image/about.svg";


const Contact = () => {
    return (
        <Common heading="Something know about our service " button="Our Services" path="/services" img={about} />
    )
}

export default Contact;