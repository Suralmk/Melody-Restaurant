import React from 'react'
import './intro.css'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {vedio} from '../../constants'
const Intro = () => {
  const [playVideo, setVideo] = React.useState(false)
  const vidRef = React.useRef();

  const handleVideo =() =>{
    setVideo((vedioNow) => !vedioNow);

    if (playVideo){
        vidRef.current.pause()
    } else{
      vidRef.current.play()
    }
  }
  return (
    <div className='app__intro  flex__center'>
      <div className="app__intro-video">
        <video 
            src={vedio}
            ref={vidRef}
            type='video/mp4'
            loop
            controls={false}
        />
        <div className="app__intro-overlay flex__center">
          <div className="app__intro-overlay_circle flex__center"
          onClick={handleVideo}
          >
            {playVideo
            ? <BsPauseFill color="#fff"  font-size="40px"/>
            : < BsFillPlayFill color="#fff" font-size="40px"/> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
