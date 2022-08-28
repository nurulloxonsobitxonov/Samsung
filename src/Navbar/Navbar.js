import React from 'react'
import logo from "../images/logo.jpg"
import "./Navbar.css"
import { BsSearch } from "react-icons/bs"




const Navbar = () => {



    return (
        <div className='navbar'>

            <img src={logo} width="120px" alt="" />
            <div className='spans_team'>
                <li className='li_1'>Mobil qurilmalar</li>
                <li className='li_team_2'>Tv va Audio</li>
                <li className='li_team_3'>Uy uchun</li>
                <li className='li_team_4'>IT</li>
            </div>
            <ul className='lis'>
                <li>Explore</li>
                <li>Aksiyalar</li>
                <BsSearch className='i1' />
            </ul>
        </div >
    )
}

export default Navbar