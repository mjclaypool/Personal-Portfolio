import { createPortal } from 'react-dom';

export default function Modal({children, onClose}) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog className="modal" onClose={onClose} open>
        {children}
      </dialog>
    </>,
    document.getElementById('modal')
  );
}