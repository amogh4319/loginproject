import React,{useState} from 'react';
import LoginPage from './components/LoginPage';
import './App.css';
import UserList from './components/UserList';



function App() {
  const [usersList,setUsersList]=useState([])
  
const addUserHandler=(uName,uAge,uCollege)=>{
  setUsersList((prevUserList)=>{
    return [...prevUserList,{name:uName,age:uAge,collegeName:uCollege,id:Math.random().toString()}]
  })
}


  return (
    <React.Fragment>
      <h1>Login Project</h1>
      
      <LoginPage onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
      
    </React.Fragment>
  );
}

export default App;
