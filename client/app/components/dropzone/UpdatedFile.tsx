import { FileWithPreview } from './FileWithPreview';
import Image from 'next/image';
import pdfImage from '@/assets/pdfimage.png';
import txtImage from '@/assets/txtImage.png';  
import { XMarkIcon } from '@heroicons/react/24/outline';

interface UploadedFileProps {
    file: FileWithPreview;
    onRemove: (name: string) => void;
}
  
const UploadedFile = ({ file, onRemove }: UploadedFileProps) => (
    <li className='relative h-32 rounded-md shadow-lg'>
      <Image
        src={file.type === 'application/pdf' ? pdfImage : txtImage}
        alt={file.name}
        width={100}
        height={100}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        className='h-full w-full object-contain rounded-md'
      />
      <button
        type='button'
        className='w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors'
        onClick={() => onRemove(file.name)}
      >
        <XMarkIcon className='w-5 h-5 fill-white hover:fill-secondary-400 transition-colors' />
      </button>
      <p className='mt-2 text-neutral-500 text-[12px] font-medium'>{file.name}</p>
    </li>
  );

  export default UploadedFile