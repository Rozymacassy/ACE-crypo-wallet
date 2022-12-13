
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Wallet.css";
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


  return (
    <div className="wallet">
      <div>
        <div className="wallet-container">
          <Sidebar />
          <div className="main-container">
            <div className="top-container">
              <div className="top">
                <div className="total">
                  <p>Total Balance</p>
                  <h2>NGN 500,000,000</h2>
                </div>
                <div className="fiat-btn">
                  <Link to="/page/DepositFiat">
                    <button>Deposit Fiat</button>
                  </Link>
                </div>
              </div>

              <div className="purchase-row">
                <div className="crypto-purchase">
                  <img src="../images/buy.png" alt="crypyo" className="w-100" />
                  <Link to="/page/BuyCrypto">
                    <p>Buy Ace Token</p>
                  </Link>
                </div>
                <div className="crypto-purchase">
                  <img
                    src="../images/sell.png"
                    alt="crypyo"
                    className="w-100"
                  />
                  <Link to="/page/SellCrypto">
                    <p>Sell Ace Token</p>
                  </Link>
                </div>
                <div className="crypto-purchase">
                  <img
                    src="../images/loan.png"
                    alt="crypyo"
                    className="w-100"
                  />
                  <Link to="/page/BuyCrypto">
                    <p>Loan Ace Token</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="Assets-record">
              <div className="Assets-record-header">
                <p>ASSETS</p>
                <div className="Assets-record-toggle">
                  <button>TOKENS</button>
                  <button>NFTs</button>
                </div>
              </div>
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
    </div>
  );
};
export default Wallet;
