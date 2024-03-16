import React from 'react'
import { NavBar } from './NavBar'
import { SearchBar } from './SearchBar'
import { Chats } from './Chats'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavBar/>
      <SearchBar/>
      <Chats/>
      </div>
  )
}
