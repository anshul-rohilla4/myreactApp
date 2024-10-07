import PropTypes from 'prop-types';
function List(props){
    

    // fruits.sort((a,b)=> a.name.localeCompare(b.name));//sort alphabetically
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));//sort reverse alphabetically
    // fruits.sort((a,b)=> a.calories-b.calories);//sort numerical calories


    // const lowCalFruits=fruits.filter(fruit=>fruit.calories<100);//filter out those having calories>100

    // const highCalFruits=fruits.filter(fruit=>fruit.calories>=100);//filter out those having calories<100


    
    const itemList=props.items;
    const category=props.category;

    const listItems=itemList.map(items => <li key={items.id}>
                                            {items.name}:&nbsp;
                                            <b>{items.calories}</b>
                                        </li>);
    

    // const listItems=itemList.map(itemslowCalFruit => <li key={items.id}>
    //                                                 {items.name}:&nbsp;
    //                                                 <b>{items.calories} </b>
    //                                                 </li>);
    
    


    return(<>
            <h3 className="listCategory">{category}</h3>
            <ol className="listItems">{listItems}</ol>
        </>);           
}

List.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            category:PropTypes.string,
                                            calories:PropTypes.number,
                                            })),
}

List.defaultProps={
    category:"Category",
    items:[],
}



export default List