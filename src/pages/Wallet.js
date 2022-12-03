import { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20abi from "../Erc20Abi.json";
import TxList from "../Txlist";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Wallet.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

// import Nav from '../components/Nav';





const Wallet = () => {
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [error, setError] = useState("");
  const [walletAdress, setWalletAddress] = useState("");
  const [contractInfo, setContractInfo] = useState({
    address: "",
    tokenName: "",
    tokenSymbol: "",
    totalSupply: "",
  });
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-",
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
    if (contractInfo.address !== "") {
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
            amount: String(amount),
          },
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
      totalSupply,
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
      balance: String(balance),
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
    <div className=" container grid grid-cols-1 gap-2 md:grid-cols-2">
   <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="homeNav">
      <Container>
        <Navbar.Brand href="#home" className="logobox"><img src="../images/ace-logo.svg" alt="logo" className="logo" />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav" className="list">
          <Nav className="me-auto">
          </Nav>

          <Nav >
            <LinkContainer to="/"> 
          <Nav.Link className="listitems">Home</Nav.Link>
           </LinkContainer> 
            <Nav.Link className="listitems">About</Nav.Link>
            <Nav.Link className="listitems">Features</Nav.Link>
            <Nav.Link className="listitems">FAQ</Nav.Link>
            <Nav.Link href="#documentation" className="listitems">Documentation</Nav.Link>
            <LinkContainer to="/page/connect"> 
            <Button variant="primary" size="md">My Crypto</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
      <div>
        <form className="m-4 " onSubmit={handleSubmit}>
          <div className="credit-card w-75 lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl">
            <main className="mt-4 rounded-top box p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">
                ACE WALLET
              </h1>
              <div className="">
                <h1 className="cont-add">
                  Erc20 contract address:
                  0xc3c79EEe9530754bc3A2d2C9F1A8Cf139C5de28C
                </h1>
                <div className="my-3">
                  <input
                    type="text"
                    name="addr"
                    className="input input-bordered block w-full focus:ring focus:outline-none"
                    placeholder="ERC20 contract address"
                  />
                </div>
              </div>
            </main>
            <footer className="box  p-4 ">
              <button
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full">
                Get token info
              </button>
            </footer>
            <div className="box  px-4">
              <div className="  overflow-x-auto">
                <table className=" table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Symbol</th>
                      <th>Total supply</th>
                    </tr>
                  </thead>
                  <tbody className="box ">
                    <tr>
                      <th>{contractInfo.tokenName}</th>
                      <td>{contractInfo.tokenSymbol}</td>
                      <td>{String(contractInfo.totalSupply)}</td>
                      <td>{contractInfo.deployedAt}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box p-4">
              <button
                onClick={getMyBalance}
                type="submit"
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full">
                Get token balance
              </button>
            </div>
            <div className="box rounded-bottom px-4">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{balanceInfo.address}</th>
                      <td>{balanceInfo.balance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
        <div className=" m-4 credit-card w-75 lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl ">
          <div className="box rounded mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Buy Ace token
            </h1>

            <form onSubmit={handleTransfer}>
              <div className="price">
                <input
                  type="text"
                  name="amout"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Enter amount in Naira"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="recipient"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Recipient address"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="amount"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Token to transfer"
                />
              </div>
              <footer className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full">
                  Transfer
                </button>
              </footer>
            </form>

            <div className="price">
              <input
                type="text"
                name="amout"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Enter amount in Recieve"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                name="recipient"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Recipient address"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                name="amount"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Amount to recieve"
              />
            </div>
            <footer className="p-4">
              <button
                onClick={connectWallet}
                className="btn btn-primary submit-button focus:ring focus:outline-none w-full">
                Recieve Ace Token from an external address
              </button>
            </footer>
          </div>
        </div>
      </div>
      <div>
        <div className="m-4 credit-card w-75 lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl ">
          <div className=" box rounded mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Recent transactions
            </h1>
            <p>
              <TxList txs={txs} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wallet;
