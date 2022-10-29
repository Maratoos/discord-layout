import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import "../../../css/Header.css"

export const Header = ({ setActive, state }) => {

  const handleClick = () => {
    setActive(state === false ? true : false)
  }
  return (
    <div className='header'>
      <div className="header__left">
        <TagIcon />
        <p>Помощь</p>
      </div>
      <div className="header__right">
        <BookmarksIcon className='header__image'/>
        <NotificationsIcon className='header__image'/>
        <PushPinIcon className='header__image'/>
        <PeopleAltIcon onClick={handleClick} className={`header__image${state ? "-active" : ""}`} />
        <input
          className='header-input'
          placeholder='Поиск'
          type="text" />
        <InboxIcon className='header__image' />
        <HelpIcon className='header__image' />
      </div>
    </div>
  )
}

// className={`chat-${state ? "active" : ""}`}