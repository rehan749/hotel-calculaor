import "./index.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0); 
  const [member, setMember] = useState(1);
  const [totalBill, setTotalBill] = useState();
  const [splitBill, setSplitBill] = useState();
  const [activePercentage, setActivePercentage] = useState(null); // State to track active percentage button

  const calculateTip = () => {
    const calculatedTip = (parseInt(bill) * parseInt(percentage)) / 100;
    const calculatedTotalBill = parseInt(bill) + calculatedTip;
    const calculatedSplitBill = calculatedTotalBill / parseInt(member);

    setTotalBill(calculatedTotalBill);
    setSplitBill(calculatedSplitBill);
  };

  const calculateTipByButton = (percentageValue) => {
    setPercentage(percentageValue);
    setActivePercentage(percentageValue); // Set active percentage button
    // Here, you calculate the tip based on the selected percentage
    const calculatedTip = (parseInt(bill) * parseInt(percentageValue)) / 100;
    const calculatedTotalBill = parseInt(bill) + calculatedTip;
    const calculatedSplitBill = calculatedTotalBill / parseInt(member);

    setTotalBill(calculatedTotalBill);
    setSplitBill(calculatedSplitBill);
  };

  return (
    <>
      <div id="calc-container">
        <div className="bill-side">
          <div className="bill">
            <h3>Bill</h3>
            <input
              type="number"
              name="bill"
              className="bill-amount"
              id="bill"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
          <div className="tips">
            <h3>Select Tip %</h3>
            <div className="tip amounts">
              <input
                type="button"
                className={`tip-percentage ${
                  activePercentage === 5 ? "active" : ""
                }`} // Check if active
                onClick={() => calculateTipByButton(5)}
                value="5"
              />
              <input
                type="button"
                className={`tip-percentage ${
                  activePercentage === 10 ? "active" : ""
                }`} // Check if active
                onClick={() => calculateTipByButton(10)}
                value="10"
              />

              <input
                type="button"
                className={`tip-percentage ${
                  activePercentage === 15 ? "active" : ""
                }`} // Check if active
                onClick={() => calculateTipByButton(15)}
                value="15"
              />
              <input
                type="button"
                className={`tip-percentage ${
                  activePercentage === 20 ? "active" : ""
                }`} // Check if active
                onClick={() => calculateTipByButton(20)}
                value="20"
              />
              <input
                type="button"
                className={`tip-percentage ${
                  activePercentage === 25 ? "active" : ""
                }`} // Check if active
                onClick={() => calculateTipByButton(25)}
                value="25"
              />
              <input
                type="number"
                className="people-persentage" // Typo: should be "people-percentage"
                id="percentage"
                value={percentage}
                onChange={(e) => setPercentage(parseInt(e.target.value))}
                placeholder="custom"
              />
            </div>
          </div>
          <div className="people">
            <h3>Number of People</h3>
            <input
              type="number"
              name="people"
              className="people-number"
              id="member"
              value={member}
              onChange={(e) => setMember(e.target.value)}
            />
          </div>
        </div>
        <div className="total-side">
          <div className="total">
            <h3>Tip Amount</h3>{" "}
            <span className="total-person" id="split_bill">
              {splitBill ? <span>${splitBill}</span> : <span>$0.00</span>}
            </span>
            <p>/ Person</p>
          </div>

          <div className="tip-amount">
            <h3>Total</h3>{" "}
            <span className="tip-person" id="total_bill">
              {totalBill ? <span>${totalBill}</span> : <span>$0.00</span>}
            </span>
            <p>/ Person</p>
          </div>

          <div className="reset">
            <input
              type="button"
              className="reset-button"
              onClick={calculateTip}
              value="RESET"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
