import React from 'react'
import "./Main.css"
import { BsBootstrap, BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"
import video from "../assets/video.mp4"
import the_second from "../Main/the_second.webp"




const Main = () => {




    return (
        <div className='Main'>

            <div className='video_div'>

                <video height={"300px"} src={video} autoPlay loop muted />
                <h1 className='Fold4'>
                    <span> Galaxy</span>  Z Fold4 | Z Flip4
                </h1>
                <span className='plain'>
                    Batafsil
                </span>
                <span className='before'>
                    Oldindan buyurtma
                </span>

                <BsChevronLeft className='chevron_left' />
                <BsChevronRight className='chevron_right' />
            </div>
            {/* <BsBootstrap /> */}
        </div>
    )
}

export default Main