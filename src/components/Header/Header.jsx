import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import "../../../css/Header.css"

export const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <TagIcon />
        <p>Помощь</p>
      </div>
      <div className="header__right">
        <BookmarksIcon />
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <input
          className='header-input'
          placeholder='Поиск'
          type="text" />
        <InboxIcon />
        <HelpIcon />
      </div>
    </div>
  )
}
