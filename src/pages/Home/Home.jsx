import React from 'react'
import { ChannelChats } from '../../components/ChannelChats/ChannelChats'
import { Header } from '../../components/Header/Header';
import { ChatUsers } from '../../components/ChatUsers/ChatUsers';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RedeemIcon from '@mui/icons-material/Redeem';
import GifIcon from '@mui/icons-material/Gif';
import "../../../css/Home.css"

export const Home = () => {
  return (
    <div className="home">
      <ChannelChats />
      <div className='home__chat-users-header'>
        <Header />
        <div className="home__chat-users">
          <div className="chat">
            <div className='chat__description'>
              <h2>Добро пожаловать на сервер</h2>
              <h1>Fntastic/Electron</h1>
              <span>Это начало истории этого сервера</span>
            </div>
            <div className="chat__messages">
              message
            </div>
            <div className='chat__bottom'>
              <input placeholder="Написать сообщение" type="text" />
              <div className='input__images'>
                <AddCircleIcon />
                <RedeemIcon />
                <GifIcon />
                <InsertDriveFileIcon />
                <AddReactionIcon />
              </div>
            </div>
          </div>
          <ChatUsers />
        </div>
      </div>
    </div>
  )
}