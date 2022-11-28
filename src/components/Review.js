import React from "react";
import "./Review.css";

const Review = () => {
    return (
        <div className="review-container">
            <div className="review-box">

                <p className="reviewerComment">Ace is a platform i will recommend
                    anyday, it's reliable, safe, fast and it is easy to use.

                </p>
                <div className="review-img">
                    <img src="images/lady2 1.png" alt="reviewer" className='reviewer' />
                    <div className="review-para">
                        <p><strong>Reviwer</strong></p>
                        <p className="stud">Student</p>
                    </div>

                </div>
            </div>

            <div className="review-box">

                <p className="reviewerComment">Ace is a platform i will recommend
                    anyday, it's reliable, safe, fast and it is easy to use.

                </p>
                <div className="review-img">
                    <img src="images/male potrait 1.png" alt="reviewer" className='reviewer' />
                    <div className="review-para">
                        <p><strong>Reviwer</strong></p>
                        <p className="stud">Crypto Trader</p>
                    </div>

                </div>
            </div>

            <div className="review-box">

                <p className="reviewerComment">Ace is a platform i will recommend
                    anyday, it's reliable, safe, fast and it is easy to use.

                </p>
                <div className="review-img">
                    <img src="images/lady 3.png" alt="reviewer" className='reviewer' />
                    <div className="review-para">
                        <p><strong>Reviwer</strong></p>
                        <p className="stud">Stylist</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Review;