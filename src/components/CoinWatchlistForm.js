import React, { useState, useContext } from "react";
import WatchlistContext from "../context/WatchlistContext";

const CoinWatchlistForm = () => {
  const { addCoinToWatchlist } = useContext(WatchlistContext);

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
    addCoinToWatchlist(formData.name);
  }

  return (
    <div>
      <p>Add a cryptocurrency to your watchlist</p>
      <form onSubmit={handleSubmit}>
        <div>
          <select id="name" name="name" onChange={handleChange} className="w-40 mt-4 py-2 bg-black-light text-white rounded-lg"> 
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">Add Cryptocurrency!</button>
      </form>
    </div>
  )
}

export default CoinWatchlistForm;