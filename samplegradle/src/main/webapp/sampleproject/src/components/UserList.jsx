import React from "react";


function User({user,onRemove,setInput}){
    return<>
        {user.website !== false ? 
        <li>
            <b onClick={()=>setInput(user.id)} >{user.username}</b> : {user.email}
            <button onClick={()=> onRemove(user.id)}>삭제</button>
        </li>
        :<p>삭제</p>}
        
    </>
}

export default function UserList({users,onRemove,setInput}){
    return <>
        {users.length > 0 ? 
            users.map(user=> 
                <User key ={user.id} user={user} onRemove={onRemove} setInput={setInput}/>
            )
         : <p>no Data</p>}
    </>
}