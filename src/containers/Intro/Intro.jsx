import React, { useRef, useState } from 'react'

// style
import './Intro.css'

// icons
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants'
import { MdVideoCameraFront } from 'react-icons/md'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo); // off-on

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className='app__video'>
      <video 
      src={meal}
      ref={vidRef}
      typeof="video/mp4"
      loop
      controls={false}
      muted
      ></video>

      <div className="app__video-overlay flex__center">
        <div
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}>
        {
          playVideo ? (
            <BsPauseFill color='#fff' size={30}/>
          ) : (
            <BsFillPlayFill color='#fff' size={30}/>
          )
        }
        </div>
      </div>

    </div>
  )
}

export default Intro