import React from 'react'
import { ChatBotIcon } from './Icons'

const ChatBot = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <ChatBotIcon></ChatBotIcon>
        </div>
    </div>
    )
}

export default ChatBot