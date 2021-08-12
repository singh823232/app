import React from 'react'
import Common from './Common';
import Homesvg from "./Component/image/home.svg";


const Home = () => {
    return (
        <Common heading="This is Home page " button="Get started" path="/contact" img={Homesvg} />
    )
}

export default Home;