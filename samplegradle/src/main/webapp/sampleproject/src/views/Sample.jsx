import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import UserList from "../components/UserList";

export default function Sample(){

    const [users,setUsers] = useState([])

    const userInput = {
        id : '',
        username : '',
        email : ''
    }

    const nexdId = useRef(10);

    const [inputs, setInputs] = useState(userInput)

    const {username, email, id} = inputs

    const config = {"Content-Type": 'application/json'};

    const axiosCall = 
        async function fetchData(){
            const axiosCall =  await axios.get('https://jsonplaceholder.typicode.com/users')
            const result = axiosCall.data
            setUsers(result) 
        }

    const onRemove = (id)=>{
        setUsers([...users.map(user => user.id === id?{...user,website:false}:user)])
        console.log(users)
    }

    const submitData = ()=>{
        axios.post('http://localhost:8080/api/dataSubmitJsonList',users,config)
        .then(res => {
            return res.data
        })
        .then(data => {
            setUsers(data)
        })
    }

    const submitDataUpdate = ()=>{
        axios.post('http://localhost:8080/api/dataSubmitJsonListUpdate',users,config)
        .then(res => {
            serviceCall()
        })
    }
    
    const serviceCall = () =>{
        axios.get('http://localhost:8080/api/sampleSelectAll')
        .then(res => {
            return res.data
        }).then(data =>{
            console.log(data)
            setUsers(data.sampleList)
        } )
    }

    const setInput = (id)=> {
        const user = users.find(user=> user.id === id)
        setInputs(user)
    }

    const onChange = (e)=>{
        const {name,value} = e.target
        setInputs({
            ...inputs
            ,[name]:value
        })
    }

    const onUpdate = (id)=>{
        setUsers(
            users.map(user=> user.id === id ? {...user,username:username,email:email}:user)
        )
        setInputs(userInput)
    }

    const onCreate = () =>{
        const user = {
            username,
            email,
            id:nexdId.current
        }

        setUsers([...users,user])

        setInputs(userInput)

        nexdId.current += 1 
    }

    return <>
        <h1>
            Sample Page
        </h1>
        <p>username : <input type="text" name="username" value={username} onChange={onChange}/></p>
        <p>email : <input type="text" name="email" value={email} onChange={onChange} size="30"/></p>
        <button onClick={onCreate}>등록</button>
        <button onClick={()=>onUpdate(id)}>수정</button>
        <UserList users = {users} onRemove={onRemove} setInput={setInput}/>
        <button onClick={axiosCall}>데이터호출</button>
        <button onClick={serviceCall}>서비스호출</button>
        <button onClick={submitData}>데이터전달</button>
        <button onClick={submitDataUpdate}>데이터수정</button>
    </>
}