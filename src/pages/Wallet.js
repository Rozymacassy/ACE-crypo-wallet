import { useState, useEffect } from "react";
import { ethers } from "ethers";
import erc20abi from "../Erc20Abi.json";
import TxList from "../Txlist";
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

// import Nav from '../components/Nav';

const Wallet = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

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

    <div className=" wallet">

      <div className="container  wallet-container">
        <Sidebar />
        <div className="main-container">
          <div className="top-container">
            <div className=" row top">
              <div className=" col-md-9 total">
                <p>Total Balance</p>
                <h2>NGN 500,000,000</h2>
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
                    Buy Ace Token
                  </Button>
                </Link>
              </div>
              <div className=" crypto-purchase">
                <img
                  src="../images/Sell1.png"
                  alt="crypyo"
                  className="w-50"
                />
                <Link to="/page/BuyCrypto">
                  <Button variant="outline-primary" size="sm" className="px-2  token rounded-4">
                    Sell Ace Token
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
              <div className="Assets-record-toggle">
                <Button variant="outline-secondary " size="md" className="p-0 pe-4 rounded-4">
                  <Button variant="primary" size="md" className="px-4 rounded-4">
                    Token
                  </Button>
                  NFT
                </Button>
              </div>
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
