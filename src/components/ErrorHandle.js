const ErrorHandle=(props)=>{
    return(
        <div>
            <div onClick={props.onConfirm}>
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
        </div>
    )
}
export default ErrorHandle;