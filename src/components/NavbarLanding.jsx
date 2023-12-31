import logo from '../assets/img/logo.svg';
import { MAX_WIDTH, STYLES_ANCHOR_NAVBAR, TEXT_ANCHOR_NAVBAR_SIZE_RESPONSIVE } from '../constants';




export default function Navbar() {

  return (
    <div className={`navbar justify-between w-[1280px] h-[122px] p-10 max-w-[${MAX_WIDTH}] z-10`}>
        <div className="">
        <img src={logo} />
      </div>
      <div>
        <ul className={`grid grid-cols-3 gap-[30px] ${TEXT_ANCHOR_NAVBAR_SIZE_RESPONSIVE}`}>
            <li className={`${STYLES_ANCHOR_NAVBAR}`}>
              Home
            </li>
            <li className={`${STYLES_ANCHOR_NAVBAR}`}>
              About
            </li>
            <li className={`${STYLES_ANCHOR_NAVBAR}`}>
              Contact us
            </li>
        </ul>
      </div>
    </div>
  )
}