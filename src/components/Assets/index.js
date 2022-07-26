
const Video = ({type}) =>{

    return (    
         <video className="video-background" src={type} type="video/mp4" autoPlay loop muted />
         )
}

export default Video;