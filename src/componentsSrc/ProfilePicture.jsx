function ProfilePicture(){
    const imageUrl='src/assets/profilePic.png'

    const handleClick=(e)=>e.target.style.display="none";{/* disapper on double click*/}

    return(<img onDoubleClick={(e)=>handleClick(e)} src={imageUrl}/>);

}

export default ProfilePicture;