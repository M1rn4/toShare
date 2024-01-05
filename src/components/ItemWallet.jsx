


export default function ItemWallet({icon, name}) {
    
    return (
        <div className="inline-flex gap-3 items-start">
            <img className=" pt-[8px] pb-[8px] pr-[16px] pl-[16px]" src={icon} />
            <p className="text-white text-body3 ">{name}</p>
        </div>
    )
}
