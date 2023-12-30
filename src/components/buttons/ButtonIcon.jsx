import { STYLES_BUTTON_ICON } from "../../constants";
import ButtonBase from "./ButtonBase";

export default function ButtonIcon({ icon, text, onClick, className = "", ...props }) {
  return (
    <ButtonBase className={`${STYLES_BUTTON_ICON} ${className}`} onClick={onClick} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {text && <span className="button-text">{text}</span>}
    </ButtonBase>
  )
}
