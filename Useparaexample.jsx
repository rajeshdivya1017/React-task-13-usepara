import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Useparaexample() {
  const[user,setUser]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUser(data));
  },[])
  return (
    <div>
      <h1>USER NAME LIST</h1>
      <ul>
        {user.map((user)=>(
          <li key ={user.id}>
           <Link to={`/Blog/${user.id}`}>
            {user.id}.{user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
