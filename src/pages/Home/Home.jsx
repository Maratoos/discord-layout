import React, { useState } from 'react'
import { ChannelChats } from '../../components/ChannelChats/ChannelChats'
import { Header } from '../../components/Header/Header';
import { ChatUsers } from '../../components/ChatUsers/ChatUsers';
import userImg from "../../assets/userImg.jpg"
import "../../../css/Home.css"

export const Home = () => {
  const [chatUsersActive, setChatUsersActive] = useState(false)
  return (
    <div className="home">
      <ChannelChats />
      <div className='home__chat-users-header'>
        <Header setActive={setChatUsersActive} state={chatUsersActive} />
        <div className="home__chat-users">
          <div className="chat">
            <div className='chat__description'>
              <h2>Добро пожаловать на сервер</h2>
              <h1>Fntastic/Electron</h1>
              <span>Это начало истории этого сервера</span>
            </div>
            <div className="chat__messages">
              <div className="message">
                <img src={userImg} alt="avatar" />
                <div className="message-desc">
                  <div className="user-name-date">
                    <p className='name'>Марат</p>
                    <p className='date'>27.10.2022</p>
                  </div>
                  <p className='message-fill'>Hello team</p>
                </div>
              </div>
            </div>
            <form className='chat__bottom'>
              <input
                placeholder="Написать сообщение"
                type="text"
              />
            </form>
          </div>
          {chatUsersActive && <ChatUsers />}
        </div>
      </div>
    </div>
  )
}