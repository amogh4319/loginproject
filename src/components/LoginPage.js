import React,{useState}from "react";
import ErrorHandle from "./ErrorHandle";
import Wrapper from "./Wrapper";
import {useRef} from 'react';
const LoginPage=(props)=>{
    const nameInput=useRef();
    const ageInput=useRef();
    const collegeInput=useRef();
    
    const [error,setError]=useState();
    
    
    const submission=(event)=>{
        event.preventDefault();
        const nameUserInput=nameInput.current.value;
        const ageUserInput=ageInput.current.value;
        const collegeUserInput=collegeInput.current.value;
        if(nameUserInput.trim().length===0 || ageUserInput.trim().length===0){
            setError({
                title:"Invalid input",
                message:"please enter correct name and age"
            })
            return;
        }
        if(+ageUserInput<1){
            setError({
                title:"invalid age",
                message:"please enter valid age(>0)"
            })
            return;
        }
        if(collegeUserInput.trim().length===0){
            setError({
                title:"invalid input",
                message:"please enter valid college name"
            })
            return;
        }
        props.onAddUser(nameUserInput,ageUserInput,collegeUserInput);
        nameInput.current.value='';
        ageInput.current.value='';
        collegeInput.current.value='';
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(
        <Wrapper>
           {error && <ErrorHandle title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <form onSubmit={submission}>
            <div><label>User Name</label></div>
            <div><input 
            type="text"
            
            ref={nameInput}
            /></div>
            <div><label>Age</label></div>
            <div><input 
            type="number"
            
            ref={ageInput}
            /></div>

           <div><label>College Name</label></div>
            <div><input 
            type="text"
            
            ref={collegeInput}
            /></div>

            <div><button type="submit">Add User</button></div>

           
            </form>
            
        </Wrapper>
    )
}
export default LoginPage;