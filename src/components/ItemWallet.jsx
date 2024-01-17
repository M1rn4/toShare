export default function ItemWallet({onClick, icon, name}) {
    
    return (
        <button href="#" className="hover:bg-secondary3 cursor-pointer" onClick={onClick}>
            <div className="flex gap-3 justify-start items-center">
                <img className=" pt-[8px] pb-[8px]" src={icon} />
                <p className="text-white text-body3 ">{name}</p>
            </div>
        </button>
    )
}
