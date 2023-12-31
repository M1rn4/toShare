import logo from '../assets/img/logo.svg';
import { MAX_WIDTH, STYLES_ANCHOR_NAVBAR, TEXT_ANCHOR_NAVBAR_SIZE_RESPONSIVE } from '../constants';




export default function Navbar() {

  return (
    <div className={`navbar justify-between w-[1280px] h-[122px] pt-10 pb-10 max-w-[${MAX_WIDTH}] z-10`}>
        <div className="">
        <img src={logo} />
      </div>

      <div className="dropdown-end md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
          <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-secondary3 rounded-[8px]  w-[65vw] boxShadow-level-1 text-body3 font-regular text-white space-y-2">
            <li><a className='active:bg-white '>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className='hidden md:flex'>
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