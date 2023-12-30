import logo from '../assets/img/logo.svg';
import { MAX_WIDTH } from '../constants';


export default function Navbar() {

  return (
    <div className={`navbar justify-between w-[1280px] h-[122px] p-10 max-w-[${MAX_WIDTH}]`}>
        <div className="">
        <img src={logo} />
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-[30px] md:text-md lg:text-lg   text-white  font-normal">
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Contact us
            </li>
        </ul>
      </div>
    </div>
  )
}