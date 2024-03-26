import React from 'react'
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({
  onClose
}: ModalProps) => {
  return (
    <div className='flex items-center justify-center flex-col h-[70%] w-full z-10'>
      <CheckCircle className='w-20 h-20' color='#b69f6b' />
      <p className='flex items-center justify-center text-xl h-20'>Se ha confirmado su asistencia con exito!</p>
      <Button
        onClick={() => onClose()}
      >OK</Button>
    </div>
  )
}

export default Modal
