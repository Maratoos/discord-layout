import React from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TagIcon from '@mui/icons-material/Tag';
import "../../../../css/AllChats.css"

export const AllChats = ({ chats, isTag }) => {
    return (
        <div className="chats__all">
            {chats.map(item => (
                <div key={`${item + Math.random()}`} className="chats__all-item">
                    {isTag ? <TagIcon className='tag' /> : <VolumeUpIcon className='tag' />}
                    <p className='chatname'>{item}</p>
                </div>
            ))}
        </div>
    )
}
