import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'




function App() {

  return(
    <>
    <Card/>
    <Button/>

    <Student name="spongBob" age={38} isStudent={true}/>
    <Student/>{/* default props are passed */}
    <Student name="llama"/>{/*name value is passed reat all are assigned default props */}


    <UserGreeting isLoggedIn={false} username="anshul"/>

    <List/>
    </>
      

  )

}

export default App
