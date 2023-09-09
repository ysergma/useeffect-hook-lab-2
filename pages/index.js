import { useEffect, useState } from 'react'
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data,setData]=useState("")
  const [username,setUsername]=("")
  const fetchData = async (username)=>{
    const response = await fetch(`https://api.github.com/users/${username}`)
    const newData = await response.json()
    setData(newData)
  }
  useEffect(()=>{fetchData()},[username])

  return (
    
    <div className="card">
      <Form fetchData={fetchData} data={data} username={username} setUsername={setUsername}/>

    </div>
  );
}
