import React,{useState} from "react";
import ErrorHandle from "./ErrorHandle";
const LoginPage=(props)=>{
    const [enteredName,setName]=useState('')
    const [enteredAge,setAge]=useState('')
    const [error,setError]=useState();
    
    const userNameHandler=(event)=>{
        setName(event.target.value);
       
        
    }
    const ageHandler=(event)=>{
        setAge(event.target.value);
        
    }
    const submission=(event)=>{
        event.preventDefault();
        
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:"Invalid input",
                message:"please enter correct name and age"
            })
            return;
        }
        if(enteredAge<1){
            setError({
                title:"invalid age",
                message:"please enter valid age(>0)"
            })
            return;
        }
        props.onAddUser(enteredName,enteredAge);
        setName('');
        setAge('');
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(
        <div>
           {error && <ErrorHandle title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <form onSubmit={submission}>
            <div><label>User Name</label></div>
            <div><input 
            type="text"
            value={enteredName}
            onChange={userNameHandler}
            /></div>
            <div><label>Age</label></div>
            <div><input 
            type="number"
            value={enteredAge}
            onChange={ageHandler}
            /></div>
            <div><button type="submit">Add User</button></div>
            </form>
            
        </div>
    )
}
export default LoginPage;