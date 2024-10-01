import React,{useState} from 'react'

function MyComponent(){
    const [name , setName] =useState("Guest");

    const updateName=()=>{
        // name="anshul";
        // console.log(name);
    
        setName("anshul");
    
    }

    const [age,setAge] =useState(0);

    const incrementAge=()=>{
        setAge(age+1);
    }
    const decrementAge=()=>{
        if(age>1){
            setAge(age-1);
        }
    }

    const [employed,setEmployed]=useState(false);

    const updateEmployee=()=>{
        setEmployed(!employed);
    }

    return (<div className='MyComponentDiv'>
        
        <button onClick={updateName} className='MyComponentButton'>Set Name</button>
        <h3>Name: {name}</h3>


        <button onClick={incrementAge} className='MyComponentButton'>Increment Age</button>
        <button onClick={decrementAge} className='MyComponentButton'>Decrement Age</button>
        <h3>Age: {age}</h3>


        <button onClick={updateEmployee} className='MyComponentButton'>Toggele Employee status</button>
        <h3>Employed: {employed.toString()}</h3>


    </div>)
}

export default MyComponent;