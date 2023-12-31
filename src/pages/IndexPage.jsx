import Particles from "@tsparticles/react";
import { IoIosPlayCircle } from "react-icons/io";
import { LuWallet2 } from "react-icons/lu";
import Navbar from "../components/NavbarLanding.jsx";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";
import { STYLES_BUTTON_OVERLINE } from "../constants/index.js";
import { useParticles } from "../hooks/useParticles.jsx";



export default function IndexPage() {
  const { init, options } = useParticles();


  return (
    <>
    <div className="h-screen">
      <div className="flex justify-center">       
        <Navbar />
      </div>

      <div className="flex flex-col h-3/4 items-center justify-center  gap-[4rem] text-white">
        <h2 className="text-h2 font-bold z-10">Imagine...</h2>
        <div className="w-2/4  z-50">
          <p className="line-clamp-4 font-regular text-body2 break-words tracking-[0.25px] leading-[30px] text-center whitespace-normal">
            Welcome to our all-in-one platform designed to simplify the
            management and payments between freelancers and service clients. 
            We have created an intuitive and efficient ecosystem that offers an
            exceptional experience for both clients and independent professionals.
          </p>
        </div>
        <div className="relative grid grid-cols-2 justify-items-center gap-[5rem]">
          <ButtonIcon icon={<LuWallet2 size={20} />} text="Connect Wallet" className="w-max pl-4 pr-4 z-10" />
          <ButtonIcon icon={<IoIosPlayCircle size={20} />} text="Try Demo" className={`${STYLES_BUTTON_OVERLINE} w-11/12 z-10`} />
          <div className="absolute flex -gap-10 -top-[11rem]">
            <div className=" circle-right rounded-full ">
            </div>
            <div className=" circle-center rounded-full">
            </div>
            <div className=" circle-left rounded-full">
            </div>
          </div>
        </div>
      </div>


    </div>
    {
      init && (
          <Particles className="-z-50" id="tsparticles" options={options} />
      )
    }
    </>
  )

}
