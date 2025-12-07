import type React from 'react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { ModalContext } from './ModalContext';

import styles from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
  width: number;
  visible: boolean;
  lightBackdrop?: boolean;
  hideModal: () => void;
  noFadeIn?: boolean;
};

function Modal({
  children,
  width,
  visible,
  lightBackdrop,
  hideModal,
  noFadeIn,
}: ModalProps) {
  const [modalClosing, setModalClosing] = useState(false);

  const closeModal = () => {
    setModalClosing(true);
  };

  useEffect(() => {
    if (modalClosing) {
      const timeoutId = setTimeout(() => {
        hideModal();
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [modalClosing, hideModal]);

  if (!visible) {
    return null;
  }

  const backdropClassName = `${styles.modalBackdrop}${
    modalClosing ? ` ${styles.modalBackdropFadeOut}` : ''
  }${lightBackdrop ? ` ${styles.modalBackdropLight}` : ''}${
    noFadeIn ? ` ${styles.modalNoFadeIn}` : ''
  }`;

  const containerClassName = `${styles.modalContainer}${
    modalClosing ? ` ${styles.modalContainerFadeOut}` : ''
  }${noFadeIn ? ` ${styles.modalNoFadeIn}` : ''}`;

  return (
    <ModalContext.Provider value={{ hideModal: closeModal }}>
      <div className={backdropClassName} onClick={closeModal}>
        <div
          className={containerClassName}
          style={{ width: `${width}px` }}
          onClick={onModalClick}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

function onModalClick(event: React.MouseEvent<HTMLDivElement>) {
  event.stopPropagation();
}

export default Modal;


