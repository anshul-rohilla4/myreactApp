import React,{useState} from 'react';


function MyComponent2(){

    const [name,setName]=useState("Guest");

    function handleNameChange(event) {
        setName(event.target.value)

    }

    const[quantity,setQuantity]=useState(1);

    function handleQuantityValue(event){
        setQuantity(event.target.value);
    }

    const[comment,setComment]=useState();

    function writeComment(event){
        setComment("")
        setComment(event.target.value);
    }

    const [card,setCard]=useState("--");

    function selectCard(event){
        setCard(event.target.value);
    }


    const[shipping,setShippingMethod]=useState(" -- ");

    function selectShippingMethod(event){
        setShippingMethod(event.target.value);
    }



    return(
        <>
            <div className='updateNameChange'>
            <input type='text'  onChange={handleNameChange} placeholder='userName'/>
            <p>Name : {name}</p>
            </div>

            <input type='number' value={quantity} onChange={handleQuantityValue}/>
            <p>Quantity : {quantity}</p>

            Comment:&nbsp;&nbsp; 
            <input type='text' value={comment} onChange={writeComment} placeholder='this is a comment box'/>
            
            <br/>
            <br/>
            <select value={card} onChange={selectCard}>
                <option value="">Select a Card to pay</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Am Ex">American Express</option>
            </select>
            <p>Card selected : {card}</p>

            <br/>
            <br/>
            <p>Select a shipping type</p>

            <label>
                <input type='radio' value="Default"
                    checked={shipping === "Default"}
                    onChange={selectShippingMethod}
                    />
                Default
            </label>
            <br/>
            <label>
                <input type='radio' value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={selectShippingMethod}
                    />
                Pick Up
            </label>
            <br/>
            <label>
                <input type='radio' value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={selectShippingMethod}
                    />
                Delivery
            </label>
            <br/>
            <label>
                <input type='radio' value="Prepaid"
                    checked={shipping === "Prepaid"}
                    onChange={selectShippingMethod}
                    />
                Prepaid
            </label>
            <br/>
            <p>Selected :{shipping}</p>
            

            


        </>
    );
}

export default MyComponent2;