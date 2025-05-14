import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { useSelector } from 'react-redux';
// import './CoinList.css';

const CoinList = () => {
  const { coins, loading, error } = useSelector((state) => state.coin);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <List
      height={600}
      itemCount={coins.length}
      itemSize={60}
      width={"100%"}
    >
      {({ index, style }) => {
        const coin = coins[index];
        return (
          <div style={style} key={coin.id} className="coin-item p-4 border-b flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src={coin.image} alt={coin.name} className="w-6 h-6" />
              <div>
                <p className="font-semibold">{coin.name} ({coin.symbol.toUpperCase()})</p>
                <p className="text-sm text-gray-500">Rank: {coin.market_cap_rank}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${coin.current_price.toLocaleString()}</p>
              <p className={
                coin.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        );
      }}
    </List>
  );
};

export default CoinList;