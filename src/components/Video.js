import './Video.css';



function Video ({title,time,views,channel,verified}){


return(

    <>
    <div className="container">
   <div className="pic">
   <img src="https://picsum.photos/id/78/300/200" alt="Random-img" />
   </div>

  <div class="channel" >{channel} { verified && "verified"} </div>
   
   

    <div class="dark" >{ title }</div>
   
    <div class="views">
        {views} views <span>.</span> {time}
    </div>

    </div>

    </>
)

}
    


export default Video ;