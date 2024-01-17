import coinbase from "../../../assets/img/icons-wallet/coinWallet.svg"
import ledger from "../../../assets/img/icons-wallet/ledger.svg"
import metaMask from "../../../assets/img/icons-wallet/metaMask.svg"
import phantom from "../../../assets/img/icons-wallet/phantom.svg"
import walletConnect from "../../../assets/img/icons-wallet/walletConnect.svg"
import ContainerModal from "../../../components/ContainerModal"
import ItemWallet from "../../../components/ItemWallet"
import Modal from "../../../components/form/Modal"

const wallets = [
    {
        icon: metaMask,
        name: "MetaMask",
    },
    {
        icon: coinbase,
        name: "CoinWallet",
    },
    {
        icon: walletConnect,
        name: "WalletConnect",
    },
    {
        icon: ledger,
        name: "Ledger",
    },
    {
        icon: phantom,
        name: "Phantom",
    }
]

export default function ModalWalletSelection({isOpen, onClose, walletActions}) {
    return (
       <Modal
         isOpen={isOpen}
       >
            <ContainerModal onClose={onClose}>
                <h2 className="text-h5 font-medium text-white">Connect your Wallet</h2>
                <p className="text-button-medium text-white">If you don’t have a wallet, you can select a provider and createone now. <p className="text-accent">Learn more</p> </p>
                <div className="flex flex-col w-full ">
                    {
                        wallets.map((wallet, index) => (
                            <ItemWallet key={index} icon={wallet.icon} name={wallet.name} onClick={walletActions[wallet.name]}  />
                        ))
                    }
                </div>
        </ContainerModal>
       </Modal>
    )
}