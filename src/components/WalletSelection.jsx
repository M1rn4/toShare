import ItemWallet from "./ItemWallet"
import metaMask from "../assets/img/icons-wallet/metaMask.svg"



export default function WalletSelection() {


    return (

       <div className="flex flex-col items-center justify-center bg-complementary w-[568px] h-[524px] rounded-[16px] ">
            <h2 className="text-h5 font-medium text-white">Connect your Wallet</h2>
            <p className="text-button-medium text-white">If you don’t have a wallet, you can select a provider and createone now. <p className="text-accent">Learn more</p> </p>

            <div className="flex flex-col justify-start items-start w-[417px] h-[56px]">
                <ItemWallet icon={metaMask} name={"MetaMask"} />
                <ItemWallet icon={metaMask} name={"MetaMask"} />
                <ItemWallet icon={metaMask} name={"MetaMask"} />
                <ItemWallet icon={metaMask} name={"MetaMask"} />
            </div>
       </div>
    )
}