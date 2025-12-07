import { createContext, useContext } from 'react';

type ModalContextType = {
  hideModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  hideModal: () => {},
});

export const useModal = () => useContext(ModalContext);


