import { useState,useEffect } from 'react'
import UserCard from '../UserCard/UserCard';

export default function Form({fetchData,data,setUsername,username}) {
  return (
    <form onSubmit={(e)=>(e.preventDefault()
      )}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input type="text" className="form-control" placeholder="User Name" value={username} onChange={(e)=>(fetchData(e.target.value))} />
      </div>
      <UserCard data={data}/>
    </form>
  );
}
