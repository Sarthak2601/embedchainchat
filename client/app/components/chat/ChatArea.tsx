'use client'
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import Message, {MessageProps} from './Message';
import { sendQuery } from '@/app/service/QueryBot';
import Title from '../Title';

interface ChatAreaProps {
  initialMessages: MessageProps[]
}

const ChatArea: React.FC<ChatAreaProps> = ({ initialMessages }) => {
  const [chatMessages, setChatMessages] = useState(initialMessages);

  const handleSendMessage = async (message: string) => {
    const userMessage = {text: message, isBot: false} 
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    try {
        const botResponse = await sendQuery(message); 
        const botMessage = {text: botResponse, isBot: true} 
        setChatMessages(prevMessages => [...prevMessages, botMessage]);
    } catch(error) {
        console.error('Error sending query: ', error); 
    }
  };

  return (
    <div className="flex h-screen flex-col">
        <Title title="Embedchain Chat!"/>
        <div className='flex-grow overflow-y-auto'>
            {chatMessages.map((message, index) => (
                <Message key={index} text={message.text} isBot={message.isBot} />
            ))}
        </div>
        <div className='bg-white py-4'>
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    </div>
  ); 
};

export default ChatArea;
