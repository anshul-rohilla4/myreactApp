import React, {useState} from 'react';

function Counter(){
    const[count,setCount]=useState(0);

    const incrementcount=()=>{
        //using updater function
        setCount(c=>c+1);

        //setCount(count+1);
    }
    const decrementCount=()=>{
        //using updater function
        setCount(c=>c-1);

        //setCount(count-1);

    }
    const resetcount=()=>{
        setCount(0);
    }

    return (
        <div className='counterContainer'>
            <p className='countDisplay'>{count}</p>
            <button className='counterContainerButton' onClick={decrementCount}>Decrease</button>
            <button className='counterContainerButton'  onClick={resetcount}>Reset</button>
            <button className='counterContainerButton'  onClick={incrementcount}>Increase</button>
        </div>
    )


}

export default Counter;