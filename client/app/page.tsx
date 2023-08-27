'use client'
import ChatArea from "./components/chat/ChatArea"
import Dropzone from "./components/dropzone/Dropzone"
import React, { useState } from 'react';


export default function Home() {
  const [fileUploaded, setFileUploaded] = useState(false);
  
  const handleFileUpload = () => {
    setFileUploaded(true);
  };

  return (
    <div className='container'>
        {!fileUploaded ? 
          (<Dropzone onFileUpload={handleFileUpload}/>) : 
          (<ChatArea initialMessages={[]} />)
        }
    </div>
  )
}
