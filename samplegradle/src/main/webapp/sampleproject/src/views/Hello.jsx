import React, { useState } from "react";
import useInputs from "../hook/useInputs";
import axios from "axios";

export default function Hello(){


    const [users, setUsers] = useState([])

    const [{username,email,title},onChange,reset] = useInputs({
        username : ''
        ,email :''
        ,title : ''
    })

    const dataSubmit  = ()=>{

        axios
        // .get('/api/dataSubmit',{params:{username,email,title}})
        .get('http://localhost:8080/api/dataSubmit',{params:{username,email,title}})
        .then(res => {
            console.log(res)
            alert('전송완료')
            reset()
        })
    }

    const dataSubmitJson = ()=>{

        const config = {"Content-Type": 'application/json'};
        const data  = {
            username,
            email,
            title
        }
        
        axios
        // .get('/api/dataSubmit',{params:{username,email,title}})
        .post('http://localhost:8080/api/dataSubmitJson',data,config)
        .then(res => {
            console.log(res)
            alert('전송완료')
            reset()
        })
    }

    return <>
        <h1>Hello React</h1>
        <div>
            <p>username : <input type="text" name = "username" value={username} onChange={onChange}/> </p> 
            <p>email : <input type="text" name="email" value = {email} onChange={onChange}/></p>
            <p>title : <input type="text" name="title" value = {title} onChange={onChange}/></p>

            <button onClick={dataSubmit}>데이터전송</button>
            <button onClick={dataSubmitJson}>Json데이터전송</button>

        </div>
    </>
}