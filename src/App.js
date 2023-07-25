import React,{useState} from 'react';
import LoginPage from './components/LoginPage';
import './App.css';
import UserList from './components/UserList';



function App() {
  const [usersList,setUsersList]=useState([])
  
const addUserHandler=(uName,uAge)=>{
  setUsersList((prevUserList)=>{
    return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
  })
}


  return (
    <React.Fragment className="App">
      <h1>Login Project</h1>
      
      <LoginPage onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
      
    </React.Fragment>
  );
}

export default App;
