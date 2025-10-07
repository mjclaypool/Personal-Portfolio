import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type modalProps = {
  onClose: () => void,
  children: ReactNode
}

export default function Modal( props: modalProps ) {
  return createPortal(
    <>
      <div
        className='fixed w-full h-[100vh] bg-n-very-dark-blue bg-opacity-75 z-30'
        onClick={props.onClose}
      />
      <dialog
        className="fixed h-[100vh] w-[50%] z-40 bg-n-dark-grey mx-[50%] rounded-l-md animate-drawer-open"
        onClose={props.onClose}
        open
      >
        {props.children}
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}