import React, { useState, useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";
import './CoinWatchlistForm.css';

const CoinWatchlistForm = () => {
  const { addCoin } = useContext(WatchListContext);

  const INITIAL_STATE = {
    name: "bitcoin"
  };

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData( (formData) => ({
      ...formData, 
      [name]: value
    }));
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    addCoin(formData.name);
  }

  return (
    <div>
      <p>Add a cryptocurrency to your watchlist</p>
      <form onSubmit={handleSubmit}>
        <div>
          <select id="name" name="name" onChange={handleChange}> 
            <option defaultValue="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="tether">Tether</option>
            <option value="cardano">Cardano</option>
            <option value="ripple">Ripple</option>
            <option value="dogecoin">Dogecoin</option>
            <option value="polkadot">Polkadot</option>
            <option value="uniswap">Uniswap</option>
            <option value="bitcoin-cash">Bitcoin-Cash</option>
            <option value="litecoin">Litecoin</option>
            <option value="solana">Solana</option>
            <option value="chainlink">Chainlink</option>
            <option value="ethereum-classic">Ethereum Classic</option>
            <option value="eos">EOS</option>
            <option value="okb">OKB</option>
            <option value="tezos">Tezos</option>
          </select>
        </div>
        <button className="form-button">Add Cryptocurrency!</button>
      </form>
    </div>
  )
}

export default CoinWatchlistForm;