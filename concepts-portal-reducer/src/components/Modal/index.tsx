import { useState } from 'react';
import styles from './styles.module.scss';

interface IModalProps {
  onClose: () => void;
}

const DURATION_ANIMATION = 500

export const Modal = ({ onClose }: IModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleOnClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, DURATION_ANIMATION)
  }

  return (
    <div className="absolute top-0 right-0 flex flex-col items-center justify-center h-screen w-full">
      <div className={`flex flex-col w-full max-w-lg shadow-md bg-white p-5 ${isClosing ? styles.close : styles.open}`}>
        <header className="relative w-full inline-block min-h-[2rem]">
          <button className="absolute right-0 top-0 p2 text-black" onClick={handleOnClose}>X</button>
        </header>
        <div className="flex-grow text-black">
          Content
        </div>
        <footer className="text-black mt-5">
          Footer
        </footer>
      </div>
    </div>
  )
}