import React ,{useEffect, useState} from 'react'

function UserInfo() {

    const [user, setUser] = useState({});
    const [userId,setUserId] = useState(1);

    const userChange = (event)=>{
        setUserId(event.target.value);
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then((response) => response.json())
        .then((data) => {
         setUser(data);
      });

      return()=>{
        console.log('cleanup...')
      }
    },[userId])
  return (
    <div className='user'>
    <h1>User Info</h1>
    <br />
    <input type='text' value={userId} onChange={userChange} />
    <br />
    Name:{user.name}<br />
    Email : {user.email}
    
    </div>
  )
}

export default UserInfo