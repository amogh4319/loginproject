const UserList=(props)=>{
    return(
        <ul>
             {props.users.map((user)=>(
                <li key={user.id}>
                    {user.name} ({user.age} years old) {user.collegeName}
                </li>
                ))}
        </ul>
       
    )
}
export default UserList;