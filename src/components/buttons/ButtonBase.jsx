import { STYLES_BUTTON_BASE } from "../../constants"

export default function ButtonBase({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${STYLES_BUTTON_BASE}`}
      {...props}
    >
      {children}
    </button>
  )
}