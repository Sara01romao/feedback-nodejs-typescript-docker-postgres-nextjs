"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function Modal({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  function openModal(content: ReactNode) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modalContent && (
        <div className="fixed inset-0 z-50 place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle" onClick={closeModal}>
          <div className="relative w-full max-w-[500px] mx-auto  rounded-lg bg-white p-6 py-10 shadow-lg">
            <div className="flex items-start justify-end absolute right-2 top-2">
              <button type="button" className="cursor-pointer rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Erro no ModalProvider");
  return ctx;
}