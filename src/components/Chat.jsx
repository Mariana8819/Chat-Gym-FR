import React from 'react'
import Cam from '../img/campng.png'
import Puntos from '../img/puntospng.png'
import Usuario from '../img/usuariopng.png'
import { Messages } from './Messages'
import { Input } from './Input'

export const Chat = () => {
  return (
    <div className='chat'>
       <div className='chatInfo'>
          <span>Jane</span>
          <div className='chatIcons'>
          <img src={Cam} alt=''/>
          <img src={Usuario} alt=''/>
          <img src= {Puntos} alt=''/>
          </div>
          
        </div>
        <Messages/>
        <Input/>
      </div>
  )
}
