import React, { useState, useContext } from "react";
import CryptoXApi from '../services/api';
import UserContext from '../context/UserContext';
import PortfolioContext from "../context/PortfolioContext";

const CoinPortfolioForm = () => {
  const { currentUser } = useContext(UserContext);
  const username = currentUser.username;
  const { addCoinToPortfolio } = useContext(PortfolioContext);

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
    cryptocurrency: formData.name.toLowerCase(),
    quantity: formData.quantity
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    CryptoXApi.addToPortfolio(data);
    addCoinToPortfolio(formData.name);
  }

  return (
    <div className="text-center">
      <p>Add a cryptocurrency to your portfolio</p>
      <form onSubmit={handleSubmit}>
        <div>
          <select id="name" name="name" onChange={handleChange} className="w-40 mt-4 py-2 bg-black-light text-white rounded-lg"> 
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
                 className="w-40 mt-3 py-2 bg-black-light text-white rounded-lg text-left"
          />
        </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">Add Cryptocurrency!</button>
      </form>
    </div>
  )
}

export default CoinPortfolioForm;