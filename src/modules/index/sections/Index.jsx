
import Particles from "@tsparticles/react";
import { IoIosPlayCircle } from "react-icons/io";
import { LuWallet2 } from "react-icons/lu";
import Navbar from "../../../components/NavbarLanding.jsx";
import ButtonIcon from "../../../components/buttons/ButtonIcon.jsx";
import { STYLES_BUTTON_OVERLINE } from "../../../constants/index.js";
import useModal from "../../../hooks/useModal.jsx";
import { useParticles } from "../../../hooks/useParticles.jsx";
import ModalWalletSelection from "../components/WalletSelection.jsx";

const walletConfig = metamaskWallet();

export default function Index() {

  const { init, options } = useParticles();

  const {  modalIsOpen,
    openModal,
    closeModal, } = useModal();

  async function handleConnectMetamask() {
    try {
      const wallet = await connect(
        walletConfig, // pass the wallet config object
      );

      console.log("connected to", wallet);
    } catch (e) {
      console.error("failed to connect", e);
    }
  }
  const walletActions = {
    "MetaMask": async () => {
      
      await handleConnectMetamask();
    },
    "CoinWallet": () => {
      console.log("CoinWallet");
    },
    "WalletConnect": () => {
      console.log("WalletConnect");
    },
    "Ledger": () => {
      console.log("Ledger");
    },
    "Phantom": () => {
      console.log("Phantom");
    },
  
  };

  return (
    <>
    <div className="min-h-screen md:h-screen ml-5 mr-5">
      <div className="flex justify-center   z-50">       
        <Navbar />
      </div>

      <div className="flex flex-col h-3/4 items-center justify-center gap-[4rem] text-white">
        <h2 className="text-h2 font-bold z-1">Imagine...</h2>
        <div className="max-w-[1000px]  z-1">
          <p className="line-clamp-7 md:line-clamp-4 font-regular text-body2 break-words tracking-[0.25px] leading-[30px] text-center whitespace-normal">
            Welcome to our all-in-one platform designed to simplify the
            management and payments between freelancers and service clients. 
            We have created an intuitive and efficient ecosystem that offers an
            exceptional experience for both clients and independent professionals.
          </p>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[1rem] md:gap-[5rem] w-full md:w-max  md:w-4/4">
          <ButtonIcon onClick={openModal} icon={<LuWallet2 size={20} />} text="Connect Wallet" className="w-full md:w-max  pl-4 pr-4 z-10" />
          <ButtonIcon icon={<IoIosPlayCircle size={20} />} text="Try Demo" className={`${STYLES_BUTTON_OVERLINE} w-full md:w-11/12 z-10`} />

          <div className="absolute flex -gap-10 md:-top-[11rem] w-full md:w-max">
            <div className="w-[100vh] h-[35vh] md:w-[20vw]  md:h-[18vw]  circle-right rounded-full">
            </div>
            <div className="w-[100vh] h-[35vh]  md:w-[20vw]  md:h-[18vw] circle-center rounded-full">
            </div>
            <div className="w-[100vh] h-[35vh]  md:w-[20vw]  md:h-[18vw] circle-left rounded-full">
            </div>
          </div>
        </div>
      </div>
      <ModalWalletSelection isOpen={modalIsOpen} onClose={closeModal} walletActions={walletActions} />
    </div>
    {
      init && (
          <Particles className="absolute -z-50" id="tsparticles" options={options} />
      )
    }
    </>
  )

}
