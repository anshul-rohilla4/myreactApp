import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>NAME:{props.name}</p>
            <p>AGE:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"} </p> {/*if true then Yes else No */} 
        
        

        </div>
    )
}

Student.prototype={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,

}

Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}

export default Student