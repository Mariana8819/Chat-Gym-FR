import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Gym</span>
      <div className='user'>
        <img src='https://th.bing.com/th/id/OIP.PKVU5ifMUaXTMziHMJXAcQHaNK?w=184&h=328&c=7&r=0&o=5&cb=11&pid=1.7' alt=''/>
        <span>Pablo</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
      </div>
  )
}
