import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Wallet.css";
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar"
import { ethers } from "ethers";
import erc20abi from "../Erc20Abi.json";
import TxList from "../Txlist";
import Form from 'react-bootstrap/Form';


// import Nav from '../components/Nav';

const Wallet = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("ACE", 159, 200000002899799999900),
    createData("DAI", 237,1234502899799999900),
    createData("USDC", 262, 44004567799999900),
    createData("BNB", 305, 257684002899799999900),
    createData("HEX", 356, 678992899799999900),
  ];
  const [txs, setTxs] = useState([]);
  const [contractListened, setContractListened] = useState();
  const [error, setError] = useState();


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

// async function requestAccount() {
//   console.log("requesting account");
//   if (window.ethereum) {
//     console.log("detected");
//   }
//   try {
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     console.log(accounts);
//     setWalletAddress(accounts[0]);
//   } catch (error) {
//     console.log("Error gettin wallet");
//   }
// }
// async function connectWallet() {
//   if (window.ethereum !== "undefined") { 
//     await requestAccount();
//   }
// }
// const handlepayment=(e) =>{
//   e.preventDefault()
//   setPayment(payment)
// }
// const handleAddress=(e) =>{
//   e.preventDefault()
//   setAddress(address)
// }
// const handleAce=(e) =>{
//   e.preventDefault()
//   setAce(ace)
// }

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
useEffect(()=>{
  handleSubmit()
getMyBalance()
},[getMyBalance,handleSubmit])


  return (

    <div className=" wallet">

      <div className="container  wallet-container">
        <Sidebar />
        <div className="main-container">
          <div className="top-container">
            <div className=" row top">
            <form className="m-4" onSubmit={handleSubmit}>
        <div className="">
          <main className="mt-4 p-4">
           
            <div className="">
              <h2 style={{textAlign:"center", fontWeight:"700"}}>Let's Start with your Ace Wallet Information</h2>
              <div className="my-3">
                <input
                  type="text"
                  name="addr"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  value="0xD8753d6caDED2336b70D152Cd82A1dA5Eb74085B"
                  style={{display:"none"}}
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
                <div className="tokenname"> 
                  <label>Wallet Balance</label>
                  <h5>{balanceInfo.balance}</h5>
                </div>
          
              </div>
              
              
            </div>
          </div>
        </div>
      </form>
              <div className=" col-md-9 total">
                <p>Total Balance</p>
                <h2>{balanceInfo.balance}</h2>
              </div>
              <div className="col-md-3 fiat-btn">
                <Link to="/page/DepositFiat">
                  <Button variant="primary" size="sm" className="px-4 rounded-4">
                    Deposit Fiat
                  </Button>
                </Link>
              </div>
            </div>

            <div className=" purchase-row">

              <div className=" crypto-purchase">
                <img src="../images/Buy1.png" alt="crypyo" className="w-50" />
                <Link to="/page/BuyCrypto">
                  <Button variant="outline-primary" size="sm" className="px-2 token rounded-4">
                    TransFer Ace Token
                  </Button>
                </Link>
              </div>
              <div className=" crypto-purchase">
                <img
                  src="../images/Sell1.png"
                  alt="crypyo"
                  className="w-50"
                />
                <Link to="/page/SellCrypto">
                  <Button variant="outline-primary" size="sm" className="px-2  token rounded-4">
                    Recieve Ace Token
                  </Button>
                </Link>
              </div>
              <div className=" crypto-purchase">
                <img
                  src="../images/Loan1.png"
                  alt="crypyo"
                  className="w-50"
                />
                <Link to="/page/BuyCrypto">
                  <Button variant="outline-primary" size="sm" className="px-2 token rounded-4">
                    Loan Ace Token
                  </Button>
                </Link>

              </div>
            </div>
          </div>

          <div className="Assets-record">
            <div className="Assets-record-header">
              <p>Assets</p>
              {/* <div className="Assets-record-toggle">
                <Button variant="outline-secondary " size="md" className="p-0 pe-4 rounded-4">
                  <Button variant="primary" size="md" className="px-4 rounded-4">
                    Token
                  </Button>
                  NFT
                </Button>
              </div> */}
            </div>
            {/* <Table className="bg-white" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Token</th>
                  <th>Price</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>DAI</td>
                  <td>$1.00</td>
                  <td>NGN 5000.00</td>

                </tr>
                <tr>
                  <td>2</td>
                  <td>ETH</td>
                  <td>$1.00</td>
                  <td>NGN 5000.00</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ENS</td>
                  <td>$1.00</td>
                  <td>NGN 5000.00</td>
                </tr>
                <tr>

                  <td>4</td>
                  <td>KNCL</td>
                  <td>$1.00</td>
                  <td>NGN 5000.00</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>USDC</td>
                  <td>$1.00</td>
                  <td>NGN 5000.00</td>
                </tr>
              </tbody>
            </Table> */}

            <>
            
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tokens</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Wallet;
