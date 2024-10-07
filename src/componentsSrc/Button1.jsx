function Button1(){
    const name="llama";
    let count=0;
    const handleClick=()=>console.log("oooh");

    const handleClick2=(name)=>console.log(`${name}! stop clicking me`);

    const handleClick3=(name)=>{
        if(count<3){
            count++;
            console.log(`${name}! you clicked me ${count} time/s.`);
            createParagraph(`${name}! you clicked me ${count} time/s.`)
        }else if(count<6){
            count++;
            console.log(`${name} ,bro stop clicking me.`);
            createParagraph(`${name} ,bro stop clicking me.`)
        }
    };

    const handleClick4= (e) =>e.target.textContent="ohhh";  

    function createParagraph(text){
        const newParagraph=document.createElement(`p`);
        newParagraph.textContent=text;
        newParagraph.id="message";
        newParagraph.className="message";
        document.body.appendChild(newParagraph);
    }


    // return(<button onClick={handleClick}>Click me 😼</button>);

    // return(<button onClick={()=>handleClick2(name)}>Click me 😼</button>);

    return(
        <>
        {/* <button onClick={()=>handleClick3(name)}>Click me 😼</button> */}
        
        <button onDoubleClick={(e)=>handleClick4(e) } className="Button1">Click Me</button>
        
        </>

    )

}

export default Button1