import React from "react";
import ReactDOM from "react-dom";

const Backdrop=(props)=>{
    return <div onClick={props.onConfirm}></div>
}
const Overlay=(props)=>{
    return(
        <div>
            <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button onClick={props.onConfirm}>Okay</button>
                </footer>
        </div>
        

    )
}
const ErrorHandle=(props)=>{
    return(
        <React.Fragment>
           {ReactDOM.createPortal(
           <Backdrop onConfirm={props.onConfirm}/>,
           document.getElementById('backdrop-root')
           )}
           {ReactDOM.createPortal(
            <Overlay 
            title={props.title}
            message={props.message}
            onConfirm={props.onConfirm}/>,
            document.getElementById('overlay-root')
           )}
        </React.Fragment>
    )
}
export default ErrorHandle;