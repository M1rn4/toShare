import { IoClose } from "react-icons/io5";


export default function ContainerModal({onClose,children}) {
    return (
       <div className="flex flex-col gap-4 items-center p-8 md:p-16 bg-complementary [75vw]   rounded-[16px] text-center relative">
            <button className="absolute top-4 right-4" onClick={onClose}>
            <IoClose size={20}  className=" 
            absolute top-0 right-4 cursor-pointer
            " />
            </button>
           {children}
       </div>
    )
}