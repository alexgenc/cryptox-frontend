import React, { useState, useEffect } from 'react';
import CryptoXApi from '../../api/api';
import Currency from '../Currency/Currency';
import Table from 'react-bootstrap/Table';
import './CurrencyTable.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
    fontSize: '10px',
    marginLeft: '-15px',
  }
}));

const marketCapText = `The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.

Market Cap = Current Price x Circulating Supply.`

const volumeText = `A measure of how much of a cryptocurrency was traded in the last 24 hours.`

const circulatingSupplyText = `The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.`

const CurrencyTable = () => {
  const classes = useStyles();
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    
    async function getAllCurrencies() {
      let data = await CryptoXApi.getAllCryptoCurrencies();
      setCryptocurrencies(data);
    }

    getAllCurrencies();
  }, []);

  let returnJsx = cryptocurrencies.map((c) => 
    <Currency 
      key={c.id} 
      id={c.id}
      name={c.name}
      symbol={c.symbol}  
      price={c.quote.USD.price} 
      change24h={c.quote.USD.percent_change_24h}
      change7d={c.quote.USD.percent_change_7d}
      marketCap={c.quote.USD.market_cap}
      volume24h={c.quote.USD.volume_24h}
      circulatingSupply={c.circulating_supply}
      slug={c.slug}
    />
  )

  return (
    <div className="parent-div">
      <Table hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap 
              <Tooltip title={marketCapText}>
                <Button className={classes.button}><InfoIcon /></Button>
              </Tooltip> 
            </th>
            <th>Volume(24h)
              <Tooltip title={volumeText}>
                <Button className={classes.button}><InfoIcon /></Button>
              </Tooltip> 
            </th>
            <th>Circulating Supply
              <Tooltip title={circulatingSupplyText}>
                <Button className={classes.button}><InfoIcon /></Button>
              </Tooltip> 
            </th>
          </tr>
        </thead>
        <tbody>
          {returnJsx}
        </tbody>
      </Table>
    </div>
  )
}

export default CurrencyTable;