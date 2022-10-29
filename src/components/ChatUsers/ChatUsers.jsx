import React from 'react'
import "../../../css/ChatUsers.css"
import userImg from "../../assets/userImg.jpg"
import defaultAvatar from "../../assets/defaultAvatar.png"
import { SortedUsers } from './SortedUsers'

const allUsers = [
  {
    name: "Марат",
    avatar: userImg,
    role: "Frontend",
    status: "online"
  },
  {
    name: "ЛеХА",
    avatar: defaultAvatar,
    role: "Backend",
    status: "offline"
  },
  {
    name: "Алекс",
    avatar: defaultAvatar,
    role: "Frontend",
    status: "offline"
  },
  {
    name: "Майлс",
    avatar: defaultAvatar,
    role: "Frontend",
    status: "online"
  },
  {
    name: "Лизка",
    avatar: defaultAvatar,
    role: "Backend",
    status: "disturb"
  },
  {
    name: "Майкл",
    avatar: defaultAvatar,
    role: "Team Lead",
    status: "online"
  },
  {
    name: "John",
    avatar: defaultAvatar,
    role: "QA",
    status: "online"
  },
  {
    name: "Tanos",
    avatar: defaultAvatar,
    role: "QA",
    status: "disturb"
  },
  {
    name: "Оксана",
    avatar: defaultAvatar,
    role: "HR",
    status: "disturb"
  },
]

const teamLead = allUsers.filter((user) => user.role.includes("Team Lead"))
const hr = allUsers.filter((user) => user.role.includes("HR"))
const qa = allUsers.filter((user) => user.role.includes("QA"))
const front = allUsers.filter((user) => user.role.includes("Frontend"))
const back = allUsers.filter((user) => user.role.includes("Backend"))

export const ChatUsers = () => {
  return (
    <div className='users'>
      <p className='users__tag'>Team Lead - {teamLead.length}</p>
      <SortedUsers list={teamLead} />
      <p className='users__tag'>HR - {hr.length}</p>
      <SortedUsers list={hr} />
      <p className='users__tag'>QA - {qa.length}</p>
      <SortedUsers list={qa} />
      <p className='users__tag'>Frontend - {front.length}</p>
      <SortedUsers list={front} />
      <p className='users__tag'>Backend - {back.length}</p>
      <SortedUsers list={back} />
    </div>
  )
}