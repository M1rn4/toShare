import { FaPlus } from "react-icons/fa6";
import Navbar from "../components/NavbarLanding.jsx";
import UserAvatar from "../components/UserAvatar.jsx";
import ButtonBase from "../components/buttons/ButtonBase.jsx";
import ButtonIcon from "../components/buttons/ButtonIcon.jsx";
import { STYLES_BUTTON_OVERLINE, STYLES_BUTTON_OVERLINE_2, STYLES_BUTTON_OVERLINE_3 } from "../constants/index.js";


export default function IndexPage() {

  return (
    <>
      <div className="flex justify-center">       
        <Navbar />
      </div>

      <div className="grid grid-cols-5 gap-5  justify-items-center">
        <ButtonBase className="text-white">Button</ButtonBase>
        <ButtonIcon className="text-white" icon={<FaPlus size={20}  />} text={`Button`} />
        <ButtonIcon icon={<FaPlus size={20}  />} text={`Button`} className={`${STYLES_BUTTON_OVERLINE} text-white`} />
        <ButtonBase className={`${STYLES_BUTTON_OVERLINE}`}>Button</ButtonBase>

        <ButtonBase className="text-white">Button</ButtonBase>
        <ButtonBase className={`${STYLES_BUTTON_OVERLINE_2}`}>Button</ButtonBase>
        <ButtonBase className="bg-white text-secondary">Button</ButtonBase>
        <ButtonBase className={`${STYLES_BUTTON_OVERLINE_3}`}>Button</ButtonBase>

        <UserAvatar />

      </div>
    </>
  )

}