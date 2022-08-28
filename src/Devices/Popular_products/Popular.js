import React from 'react'
import "./Popular.css"
import Ultra from "../Popular_products/Ultra.webp"
import img1 from "../Popular_products/1.webp"
import img2 from "../Popular_products/2.webp"
import img3 from "../Popular_products/3.webp"
import img4 from "../Popular_products/4.webp"


const Popular = () => {
    return (
        <div className='popular'>

            <span className='class'>
                Ommabop mahsulotlar
            </span>
            <div className='small_div'>


                <span>Mobil qurilamalar</span>
                <span>TV va Audio</span>
                <span>Maishiy texnika</span>

            </div>
            <div className='the_biggest'>
                <div className='big'>
                    <img className='ultra' width={"200px"} src={Ultra} alt="" />
                    <span className='smal'>Galaxy S22 Ultra</span>
                    <button className='btn3'>Batafsil</button>
                </div>
                <div className='bigger'>
                    <div className='div2'><li><a href="#">Batafsil</a></li><img src={img1} alt="" /></div>
                    <div className='div3'><span>Yangilik</span> <li><a href="#">Batafsil</a></li><img src={img2} alt="" /></div>
                    <div className='div3'><span>Yangilik</span> <li><a href="#">Batafsil</a></li><img src={img3} alt="" /></div>
                    <div className='div2'><li><a href="#">Batafsil</a></li><img src={img4} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Popular