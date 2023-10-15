import { useState, useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) //json으로 받을 것을 명시
      .then((json) => {
        setCoins(json);
        setLoading(false);
      }); // 1.실제 데이터를 상태변수에 업데이트 해준다 2. coins 얻기를 끝냈다면 loading은 false로 바뀌어야 한다.
  }, []); //한번만 작동시키고 싶기때문에 deps는 비어있는 array
  return (
    <div>
      <h1> The Coins!({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((item, index) => (
            <option key={index}>
              {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default App;
