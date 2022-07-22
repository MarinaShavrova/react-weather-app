
import videoBackground from '../Video/video/autumn.mp4'

const Video = () =>{

    return (
         <video className='video-background' autoPlay loop muted>
            <source src={videoBackground} type="video/mp4" />
        </video>
    )
}

export default Video;