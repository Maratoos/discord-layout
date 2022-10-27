import React from 'react'
import { ChannelChats } from '../../components/ChannelChats/ChannelChats'
import { ChannelMenu } from '../../components/ChannelMenu/ChannelMenu'
import "./style.css"

export const Home = () => {
  return (
    <div className='home'>
      <ChannelMenu />
      <ChannelChats />
    </div>
  )
}
