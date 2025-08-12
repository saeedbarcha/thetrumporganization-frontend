import React, { useState } from 'react'
import { FaCircleQuestion } from "react-icons/fa6"
import { FaAngleRight } from "react-icons/fa6";
import "./Askquestion.css"
import IconText from './Common/IconText';
import { IoIosArrowDown } from "react-icons/io";

const AskquestionCard = () => {

    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleToggle = (index) => {
        setActiveQuestion(prevIndex => (prevIndex === index ? null : index));
    };

    return (

        <div className='askquestion-main' >

            <IconText
                icon={<FaCircleQuestion />}
                text={"Frequently Asked Questions: Trump Organization TRB Cash‑Out Program"}
                
            />

            <div className='askquestion-container'>

                < div className='askquestion-content' onClick={() => handleToggle(1)}>
                    <p style={{
                        display: "flex", alignItems: "center", fontSize: "12px", gap: "5px",
                        paddingLeft: "4px",marginTop:"10px", cursor: "pointer"
                    }}>

                        {activeQuestion === 1 ? <IoIosArrowDown style={{ fontSize: "12px" }} /> : <FaAngleRight style={{ fontSize: "12px" }} />}
                        What is the TRB Cash‑Out Program?
                    </p>

                </div>
                <div className={`read-more-content ${activeQuestion === 1 ? 'open' : ''}`}>
                    <p style={{ padding: "1rem", fontSize: "12px" }}>The Trump Organization has purportedly assumed management of all past Trump Rebate Banking (TRB) claims and launched a cash‑out initiative. Anyone who purchased TRB-branded coins, banknotes, membership cards, or collectible items is eligible for full reimbursement under the program.</p>
                </div>


                <div className='askquestion-content' onClick={() => handleToggle(2)}>
                    <p style={{
                        display: "flex", alignItems: "center", fontSize: "12px", gap: "5px",
                       paddingLeft: "4px",marginTop:"10px", cursor: "pointer"
                    }}>

                        {activeQuestion === 2 ? <IoIosArrowDown style={{ fontSize: "12px" }} /> : <FaAngleRight style={{ fontSize: "12px" }} />}
                        Who qualifies for reimbursement?
                    </p>

                </div>
                <div className={`read-more-content-answer ${activeQuestion === 2 ? 'openanswer' : ''}`}>
                    <p style={{ padding: "1rem", fontSize: "12px" }}>Any individual who previously bought TRB products—regardless of seller or location—can file a claim, provided they supply proof of purchase (receipts, order confirmations, etc.).
                    </p>
                </div>


                <div className='askquestion-content' onClick={() => handleToggle(3)}>
                    <p style={{
                        display: "flex", alignItems: "center", fontSize: "12px", gap: "5px",
                        paddingLeft: "4px",marginTop:"10px", cursor: "pointer"
                    }}>
                        {activeQuestion === 3 ? <IoIosArrowDown style={{ fontSize: "12px" }} /> : <FaAngleRight style={{ fontSize: "12px" }} />}
                        What payouts are offered?
                        </p>

                </div>
                <div className={`read-more-content ${activeQuestion === 3 ? 'open' : ''}`}>
                    <p style={{ padding: "1rem", fontSize: "12px" }}>
                        <li>Full refund of all original purchase amounts</li>
                        <li>Plus a 10% goodwill bonus to compensate for inconvenience
                        </li>
                        <li>Legal discharge documentation clearing claimants of future liabilities related to TRB</li>
                    </p>
                </div>



                <div className='askquestion-content' onClick={() => handleToggle(4)}>
                    <p style={{
                        display: "flex", alignItems: "center", fontSize: "12px", gap: "5px",
                        paddingLeft: "4px",marginTop:"10px", cursor: "pointer"
                    }}>

                        {activeQuestion === 4 ? <IoIosArrowDown style={{ fontSize: "12px" }} />
                            : <FaAngleRight style={{ fontSize: "12px" }} />}
                        How do I submit a claim?

                    </p>

                </div>
                <div className={`read-more-content ${activeQuestion === 4 ? 'open' : ''}`}>
                    <p style={{ padding: "1rem", fontSize: "12px" }}>Please contact your personal Trump Organization Manager who you guide through the steps to login into this Trump Organization Dashboard or you can see on the top of your dashboard contact agent . Upload purchase documentation and follow the guided steps in the form.</p>
                </div>

            </div>
        </div>
    );
};

export default AskquestionCard;
