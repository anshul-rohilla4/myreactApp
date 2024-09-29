import PropTypes from 'prop-types';

function UserGreeting(props){

    const welcomeMessage=<h2 className="welcome-message">Welcome {props.username}</h2>

    const logInPromt=<h2 className="login-prompt">Please LogIn to Continue</h2>;

    
    return(props.isLoggedIn
        ?welcomeMessage
        :logInPromt);
}

UserGreeting.prototype={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",

}


export default UserGreeting