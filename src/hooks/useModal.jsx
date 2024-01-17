import { useState } from 'react';

export default function useModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
}

