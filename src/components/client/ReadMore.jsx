import React, { useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import { DownOutlined } from '@ant-design/icons';
import "./Readmore.css";
import IconText from './Common/IconText';

const ReadMore = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div className="read-more-container">
            <div>

                <IconText
                    icon={<IoInformationCircle />}
                    text={"Trump Organization Oversees TRB Cash‑Out Program"}
                />


            </div>

            <div onClick={handleClick} className="read-more-hero">
                <p
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "5px", fontSize: "12px", padding: "10px",
                    }}
                >
                    <DownOutlined style={{ fontSize: "10px" }} /> Read More
                </p>
            </div>

            <div className={`read-more-content ${toggle ? 'open' : ''}`}>
                <p style={{ fontSize: "12px", marginTop: "10px", textAlign: 'justify' }}>
                The Trump Organization has now officially taken over management of all outstanding Trump Rebate Banking 
                 (TRB)claims. In a one-time relief initiative, the organization is providing full payouts to all verified 
                  customers who were affected by previous TRB promotional products including coins, banknotes, membership cards, 
                   and collect cards.
                </p>
                <h6 style={{ fontSize: "14px" }}> Program Details</h6>
                <p style={{ fontSize: "12px", textAlign: 'justify' }}>
                <li>Eligibility for Cash-Out All customers who purchased TRB-branded items (e.g., Trump coins, Trump Bucks, 
                     membership or collect cards) are invited to enroll in the cash-out program. Full documentation of purchase 
                      or transaction confirmations may be required.</li>
                <li>Payout Structure
                </li>
                - Full refund of purchase price, regardless of purchase level or vendor.
                <br />
<br />
                -Compensation bonus equal to 10% of original purchase amount to address inconvenience and opportunity cost.
                <br />
 -Support services including legal discharge letters, indemnifying recipients from future claims or liabilities tied to TRB schemes.
                </p>
                
            </div>
        </div>
    );
};

export default ReadMore;
