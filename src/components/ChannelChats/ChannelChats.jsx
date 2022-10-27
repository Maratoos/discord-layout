import React from 'react'
import { ChatTitle } from './ChatTitle/ChatTitle';
import { AllChats } from './AllChats/AllChats';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../../css/ChannelChats.css"

const textChats = ["Описание", "Помощь", "Senior's", "Не по работе", "Видосики"]

const voiceChats = ["Scrum", "Junior'ы", "Не по работе", "Музыка"]

export const ChannelChats = () => {
  return (
    <div className='channel__chats'>
      <div className="channel__chats-top">
        <p className='title'>Fntastic/Electron</p>
        <KeyboardArrowDownIcon className='top_arrow' />
      </div>
      <div className="channel__chats-middle">
        <div className="chats-text-voice" >
          <ChatTitle title="ТЕКСТОВЫЕ КАНАЛЫ" />
          <AllChats chats={textChats} isTag={true} />
        </div>
        <div className="chats-text-voice">
          <ChatTitle title="ГОЛОСОВЫЕ КАНАЛЫ" />
          <AllChats chats={voiceChats} isTag={false} />
        </div>
      </div>
      <div className="channel__chats-bottom">
        <div className="account">
          <div className="account-image">
            <img src="" alt="" />
          </div>
          <div className="account-data">
            <p>sdfsdfsd</p>
            <h4>#9334</h4>
          </div>
        </div>
        <div className="settings">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}
