import React from 'react'
import DsLogo from '../../assets/discordLogo.png'
import capybaraImg from '../../assets/capybaraImg.png'
import skullImg from '../../assets/skullImg.jpg'
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import "../../../css/ChannelMenu.css"

const channelItems = [
  {
    path: DsLogo,
    alt: "discord",
    isMaterial: false,
  },
  {
    path: capybaraImg,
    alt: "capybara",
    isMaterial: false
  },
  {
    path: skullImg,
    alt: "skull",
    isMaterial: false
  },
  {
    path: AddIcon,
    alt: "plus",
    isMaterial: true
  },
  {
    path: ExploreIcon,
    alt: "compass",
    isMaterial: true
  },
  {
    path: VerticalAlignBottomIcon,
    alt: "download",
    isMaterial: true
  }
]

export const ChannelMenu = () => {
  return (
    <nav className='channel__menu'>
      <div className="channel__menu-items">
        {channelItems.map(item => (
          <div key={item.path + item.alt} className="channel__menu-items-item">
            {item.isMaterial
              ?
              <div className="channel-logo-material" >
                <item.path className="material-icon" />
              </div>
              :
              <img className='channel-logo' src={item.path} alt={item.alt} />}
          </div>
        ))}
      </div>
    </nav>
  )
}
