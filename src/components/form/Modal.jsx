import ReactModal from "react-modal"

export default function Modal({isOpen, children}) {
    return (
      <ReactModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        className="flex flex-col gap-8 items-center  p-16 pt-4 z-10"
        overlayClassName="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
      >
        {children}
      </ReactModal>
    )
}