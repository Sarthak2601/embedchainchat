'use client'
import { CardBody, Input, Textarea, Card } from '@nextui-org/react';
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className='mt-auto bottom-0 left-0 w-full bg-white py-4 rounded-lg'>
        <div className="flex items-center justify-between">
            <Textarea 
                        className="flex-grow border border-gray-300 rounded-lg w-full outline-none items-center"
                        placeholder="Type your query here" 
                        minRows={1}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
            <button 
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg" 
                onClick={handleSendMessage}
            > Send </button>
        </div>
    </div>
  );
};

export default ChatInput;
