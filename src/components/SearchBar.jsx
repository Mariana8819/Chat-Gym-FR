import React from 'react'

export const SearchBar = () => {
  return (
    <div className='searchBar'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src='https://i.pinimg.com/236x/90/4e/f0/904ef0ba9aa61ac93df75ee9040fc189.jpg' alt='' />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
      </div>
  )
}
