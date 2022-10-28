import React from 'react'
import { ChatTitle } from './ChatTitle/ChatTitle';
import { AllChats } from './AllChats/AllChats';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import userImg from "../../assets/userImg.jpg"
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
            <img src={userImg} alt="" />
          </div>
          <div className="account-data">
            <p>Марат</p>
            <small>#9334</small>
          </div>
        </div>
        <div className="settings">
          <div className='items'>
            <div className='item'><MicIcon sx={{ fontSize: "22px", marginTop: "3px" }} /></div>
            <div className='item'><HeadphonesIcon sx={{ fontSize: "22px", marginTop: "3px" }} /></div>
            <div className='item'><SettingsIcon sx={{ fontSize: "22px", marginTop: "3px" }} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
