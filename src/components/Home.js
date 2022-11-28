import React from 'react'
import Review from './Review';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className='home'   >
          
            <div className='content' >
                <div className='left'>
                    <h2 className='header'>Buy Crypto with your Fiat without KYC verification</h2>
                    <div className='textbox'>
                        <p className='welcometext'>Sign up, get seed phrase and viola!... You are ready to buy, sell and take crypto loans. All it takes is an internet connection and your device.</p>
                    </div>
                     <Link to="/Welcome">
                    <button className='getStartedBtn'>
                       Get Started
                     </button>
                     </Link>
                </div>
                <div className='right'>

                    <img src='images/coins.svg' alt='main poster' className='coinsImage' />

                </div>
            </div>


            <div className="stepsContainer">

                <div className="simpleSteps">
                    <div className="steps">
                        <h2 className="simple">How it works in simple steps</h2>
                        <div className="paragraph">
                            <p className="paragraphSteps">Create and Verify your account</p>

                            <p className="paragraphSteps">Get a new wallet or import an existing one</p>

                            <p className="paragraphSteps">Buy, send, recieve, lend and borrow seamlessly</p>
                        </div>
                    </div>

                    <div className="steps-img">
                        <img src="images/steps-img.svg" alt="secure" className='secureImage' />
                    </div>
                </div>
            </div>

            <div className="review">
                <h2>Trusted by the best</h2>
                <Review />

            </div>

            <div className="documentation" id='documentation' >
                <h3 className="more">Need to know more?</h3>
                <button className="doc-btn">Documentation ➡ </button>
            </div>

            <div>
                <Footer />

            </div>

          



        </div>
    )
}
