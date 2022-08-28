import React from 'react'
import "./Device.css"
import Galaxyf from "../Device/Galaxyf.jpg"
import Texnika from "../Device/Texnika.webp"




function Device() {
    return (
        <div className='Device'>
            <h3>Mobil Qurilmalar</h3>
            <div className='justify'>
                <span>Galaxy Z Fold4</span>
                <span>Galaxy Z Flip4</span>
                <span> Galaxy Unpacked Highlight</span>
                <span> Galaxy Watch5 | Watch5 Pro</span>
                <span> Galaxy Buds2 Pro</span>
            </div>
            <img className='img1' src={Texnika} alt="" />
            <h1 className='s22'>Galaxy S22 | S22+</h1>
            <li className='batafsil' href="#">Batafsil</li>
        </div>
    )
}

export default Device