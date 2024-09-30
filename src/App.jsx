import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button1 from './Button1.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx' 

function App() {

  const fruits=[
    {id:1,name:"apple" , calories:95,},
    {id:2,name:"dragon fruit" , calories:45,},
    {id:3,name:"coal" , calories:105,},
    {id:4,name:"banana" , calories:156,},
    {id:5,name:"mango" , calories:100}
  ];

  const vegetables=[
    {id:6,name:"tomato" , calories:105,},
    {id:7,name:"calery" , calories:95,},
    {id:8,name:"carrot" , calories:105,},
    {id:9,name:"corn" , calories:95,},
    {id:10,name:"coli" , calories:156,}
  ]

  return(
    <>
    <Card/>
    <Button/>

    <Student name="spongBob" age={38} isStudent={true}/>
    <Student/>{/* default props are passed */}
    <Student name="llama"/>{/*name value is passed reat all are assigned default props */}


    <UserGreeting isLoggedIn={false} username="anshul"/>

    {fruits.length>0 ? <List items={fruits} category="Fruits"/>:null}
    {/* returns only if list is not empty ie. length >0 */}

    {vegetables.length>0 &&<List items={vegetables} category="Vegetables"/>}
    {/* as the second part of the statement will always be true so the return depends on length property only */}
    
    <Button1/>

    <ProfilePicture/>

    <MyComponent/>
    
    
    
    
    </>
      

  )

}

export default App
