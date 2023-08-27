'use-client'

import { Card, CardBody, CardHeader, Textarea } from '@nextui-org/react';
import React from 'react';

export interface MessageProps {
  text: string;
  isBot: boolean;
}

const Message = ({text, isBot}: MessageProps) => {
    return (
        <div className={isBot ? "bg-gray-200 flex-grow overflow-y-auto my-2 rounded-lg" :"bg-blue-500 flex-grow overflow-y-auto my-2 rounded-lg"}>
            <div className="flex flex-col space-y-2 ">
                <div className={isBot ? "rounded-lg p-2 flex items-center whitespace-normal break-words" :" text-white rounded-lg p-2 flex items-center whitespace-normal"}>
                    <Card className='whitespace-normal break-words'>
                        <CardBody>
                            <span>{isBot ? <b>Bot: </b>: <b>You: </b>}{text}</span>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    ); 
}

export default Message;
