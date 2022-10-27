import React, { useState } from 'react'
import "../../../../css/ChatTitle.css"
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const ChatTitle = ({ title }) => {
    const [arrowActive, setArrowActive] = useState(false)

    const handleClick = () => {
        setArrowActive(!arrowActive ? true : false)
    }

    return (
        <div className="chats-text-voice-title">
            <div onClick={handleClick} className="chats-text-voice-title-side">
                <KeyboardArrowDownIcon className={`side_arrow${arrowActive ? "_active" : ""}`} />
                <p>{title}</p>
            </div>
            <AddIcon className='side_add' />
        </div>
    )
}
