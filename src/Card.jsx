import profilePic from './assets/profilePic.jpg'

function Card(){
    return(
        <div className="card">
            <img  className='card-image' alt="profile picture" src={profilePic} />  
            <h2 className='card-title'>ANSHUL</h2>
            <p className='card-text'>I am a Student and am learing REACT</p>
        </div>
    )

}

export default Card