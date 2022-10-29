import React from 'react'
import online from "../../assets/blankGreen.png"
import disturb from "../../assets/blankRed.png"

export const SortedUsers = ({ list }) => {
    return (
        <>
            {list.map(user => (
                <div key={user.name + Math.random()} className='user'>
                    <img className='avatar' src={user.avatar} alt="" />
                    <img className='status' src={user.status === "online" ? online : disturb} alt="" />
                    <p>{user.name}</p>
                </div>
            ))}
        </>
    )
}
