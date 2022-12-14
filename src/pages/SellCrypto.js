import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/SellCrypto.css"
import { ethers } from "ethers";
import erc20abi from "../Erc20Abi.json";
import { Link } from "react-router-dom";
import TxList from "../Txlist";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SellCrypto = () => {
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [error, setError] = useState();
  const [walletaddress, setWalletAddress] = useState("")


  const [contractInfo, setContractInfo] = useState({
    address: "-",
    tokenName: "-",
    tokenSymbol: "-",
    totalSupply: "-"
  });
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-"
  });

  async function requestAccount() {
    console.log("requesting account");
    if (window.ethereum) {
      console.log("detected");
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.log("Error gettin wallet");
    }
  }
  async function connectWallet() {
    if (window.ethereum !== "undefined") {
      await requestAccount();
    }
  }

  useEffect(() => {
    if (contractInfo.address !== "-") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const erc20 = new ethers.Contract(
        contractInfo.address,
        erc20abi,
        provider
      );

      erc20.on("Transfer", (from, to, amount, event) => {
        console.log({ from, to, amount, event });

        setTxs((currentTxs) => [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount)
          }
        ]);
      });
      setContractListened(erc20);

      return () => {
        contractListened.removeAllListeners();
      };
    }
  }, [contractInfo.address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider);

    const tokenName = await erc20.name();
    const tokenSymbol = await erc20.symbol();
    const totalSupply = await erc20.totalSupply();

    setContractInfo({
      address: data.get("addr"),
      tokenName,
      tokenSymbol,
      totalSupply
    });
  };

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.balanceOf(signerAddress);

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance)
    });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
    await erc20.transfer(data.get("recipient"), data.get("amount"));
  };

  return (



    <div className="CryptoPurchase">
      <Sidebar />

      <div className="Purchase-container">
        <div className="buyandsell">
          <div className="blankdiv">

          </div>

          <div className="purchase">
            <Link to="/page/BuyCrypto"><button className="mx-3">Transfer</button></Link>
            <Link to="/page/SellCrypto"><button>Receive</button></Link>
          </div>

        </div>
        <form className="m-4" onSubmit={handleSubmit}>
          <div className="addr">
            <main className="mt-4 p-4">

              <div className="">
                <h2 style={{ textAlign: "center", fontWeight: "700" }}>Let's Start with your Ace Wallet Information</h2>
                <div className="my-3">
                  <input
                    type="text"
                    name="addr"
                    className="input input-bordered block w-full focus:ring focus:outline-none"
                    value="0xD8753d6caDED2336b70D152Cd82A1dA5Eb74085B"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </main>

            <div className="p-4">
              <button
                onClick={getMyBalance}
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
              >
                Get my balance for my wallet address
              </button>
            </div>
            <div className="px-4">
              <div className="overflow-x-auto">
                <div className="tokenInfo">
                  <div className="tokenname">
                    <label>Wallet Address</label>
                    <h5>{balanceInfo.address}</h5>
                  </div>
                  <div className="tokenname mx-3">
                    <label >Wallet Balance</label>
                    <h5>{balanceInfo.balance}</h5>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="salesform">

          <Form className="w-75 m-2">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Wallet Address</Form.Label>
              <Form.Control type="text" placeholder="Enter wallet Address" />
              <Form.Text className="text-muted">
                The wallet Address of your contract
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Token Price</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Token value</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" size="md">
              Connect to external wallet
            </Button>
          </Form>
        </div>
      </div>
    </div>


  );
};

export default SellCrypto;
