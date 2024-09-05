import { createPortal } from 'react-dom';

export default function Modal({children, onClose}) {
  return createPortal(
    <>
      <div
        className='fixed w-full h-[100vh] bg-n-very-dark-blue bg-opacity-75 z-30'
        onClick={onClose}
      />
      <dialog
        className="fixed h-[100vh] w-[50%] z-40 bg-n-dark-grey mx-[50%] rounded-l-md animate-drawer-open"
        onClose={onClose}
        open
      >
        {children}
      </dialog>
    </>,
    document.getElementById('modal')
  );
}