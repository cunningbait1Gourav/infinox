import react from "react";

const Tweet=({data,name,image,link})=>(
    <div className='tweet'>
    <h1>{name}</h1>
    <hr></hr>
    <p>{data}</p>
    <a href={link}>This is the link to the tweet</a>
    <img src={image} width="200px" height="200px" className="tweet-img"></img>
  </div>
)

export default Tweet;