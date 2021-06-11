import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin';
import './Bit.css';



function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=PHP&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    ) 

  return (
    <div className="container-fluid">
      <h1 className="text-center">Crypto Tracker</h1>
      <div className="cn-search">
        <form className="text-center">
          <input type="text" onChange={ handleChange } className="mb-5 mt-4 col-form-label srch" placeholder="Search Currency
          "/>
        </form>
      </div>
      {filteredCoins.map(coin => {
          return (
            <Coin key={coin.id} 
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume= {coin.total_volume}
            
            />
          );
      })}
    </div>
  );
}

export default App;
