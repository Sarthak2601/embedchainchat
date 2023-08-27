'use client'
import { FileWithPreview } from './FileWithPreview';
import UploadedFile from './UpdatedFile';
import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import { uploadFiles } from '@/app/service/FileUpload'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Title from '../Title';

interface DropzoneProps {
  className?: string;
  onFileUpload: () => void;
}

const Dropzone = ({ className: customClassName, onFileUpload }: DropzoneProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) =>
        previousFiles.concat(
          acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))
        )
      );
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
        'application/pdf': ['.pdf'],
        'text/plain': ['.txt']
    },
  });

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!files.length) return;
    
    const formData = new FormData();
    files.forEach((file) => formData.append('file', file));

    await uploadFiles(formData).then((success: Boolean) => {
      if (success) onFileUpload(); 
    })
  };

  return (
    <div>
      <Title title="Let's start by uploading our data source(s)"/>
      <form onSubmit={handleSubmit}>
        <div {...getRootProps({ className: "p-16 mt-10 border border-neutral-200" })}>
          <input {...getInputProps()} multiple />
          <div className='flex flex-col items-center justify-center gap-4'>
            <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
            {isDragActive ? <p>Drop the files here ...</p> : (
              <div>
                <p>Drag & drop files here, or click to select files</p>
                <em>(Only *.txt and *.pdf)</em>
              </div>
            )}
          </div>
        </div>

        <section className='mt-10'>
          <div className={`flex gap-4 ${files.length > 0 ? 'block' : 'hidden'}`}>
            <button
              type='button'
              onClick={removeAll}
              className='mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors'
            >
              Remove all files
            </button>
            <button
              type='submit'
              className='ml-auto mt-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-purple-400 rounded-md px-3 hover:bg-purple-400 hover:text-white transition-colors'
            >
              Upload to Embedchain!
            </button>
          </div>
          {files.length > 0 && (
            <div>
              <h3 className='title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3'>
                Uploaded File(s)
              </h3>
              <ul className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10'>
                {files.map((file) => (
                  <UploadedFile key={file.name} file={file} onRemove={removeFile} />
                ))}
              </ul>
            </div>
          )}
        </section>
      </form>
    </div>
  );
};

export default Dropzone;
