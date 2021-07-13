import React, { useState, useContext } from "react";
import './CoinPortfolioForm.css';
import CryptoXApi from '../../api/api';
import UserContext from '../../auth/UserContext';
import { PortfolioContext } from "../../context/PortfolioContext";

const CoinPortfolioForm = () => {
  const { currentUser } = useContext(UserContext);
  const username = currentUser.username;
  const { addCoin } = useContext(PortfolioContext);

  const INITIAL_STATE = {
    name: "bitcoin",
    quantity: "1"
  };

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData( (formData) => ({
      ...formData, 
      [name]: value
    }));
  } 

  const data = {
    username,
    cryptocurrency: formData.name,
    quantity: formData.quantity
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    CryptoXApi.addToPortfolio(data);
    addCoin(formData.name);
  }

  return (
    <div>
      <p>Add a cryptocurrency to your portfolio</p>
      <form onSubmit={handleSubmit}>
        <div>
          <select id="name" name="name" onChange={handleChange}> 
            <option defaultValue="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="tether">Tether</option>
            <option value="cardano">Cardano</option>
            <option value="dogecoin">Dogecoin</option>
            <option value="polkadot">Polkadot</option>
            <option value="uniswap">Uniswap</option>
            <option value="litecoin">Litecoin</option>
            <option value="solana">Solana</option>
            <option value="chainlink">Chainlink</option>
            <option value="eos">EOS</option>
            <option value="okb">OKB</option>
            <option value="tezos">Tezos</option>
          </select>
          <div>
          <input id="quantity"
                 name="quantity"
                 value={formData.serve}
                 onChange={handleChange} 
                 placeholder="Enter Quantity"
          />
        </div>
        </div>
        <button className="form-button">Add Cryptocurrency!</button>
      </form>
    </div>
  )
}

export default CoinPortfolioForm;