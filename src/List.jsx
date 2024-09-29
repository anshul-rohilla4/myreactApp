function List(){
    const fruits=[
                {id:1,name:"apple" , calories:95,},
                {id:2,name:"dragon fruit" , calories:45,},
                {id:3,name:"coal" , calories:105,},
                {id:4,name:"banana" , calories:156,}
            ];

    // fruits.sort((a,b)=> a.name.localeCompare(b.name));//sort alphabetically
    fruits.sort((a,b)=> b.name.localeCompare(a.name));//sort reverse alphabetically
    fruits.sort((a,b)=> a.calories-b.calories);//sort numerical calories


    const lowCalFruits=fruits.filter(fruit=>fruit.calories<100);//filter out those having calories>100

    const highCalFruits=fruits.filter(fruit=>fruit.calories>=100);//filter out those having calories<100


    // const listItems=fruits.map(fruit => <li key={fruit.id}>
    //                                             {fruit.name}:&nbsp;
    //                                             <b>{fruit.calories}</b>
                                                
    //                                             </li>);
    
    
    const listItems=lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                    {lowCalFruit.name}:&nbsp;
                                                    <b>{lowCalFruit.calories} </b>
                                                    </li>);
    
    
    return(<ol>{listItems}</ol>);
}

export default List