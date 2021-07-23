import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 mb-5 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="font-bold my-2">Market Cap</span>
              <span className="my-3 text-xl">${data.market_cap ? data.market_cap.toLocaleString() : '-'}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="font-bold my-2">
                Total Supply
              </span>
              <span className="my-3 text-xl">{data.total_supply ? data.total_supply.toLocaleString() : '-'}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="font-bold my-2">Total Volume</span>
              <span className="my-3 text-xl">${data.total_volume ? data.total_volume.toLocaleString() : '-'}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="font-bold my-2">High (24h)</span>
              <span className="my-3 text-xl">${data.high_24h ? data.high_24h.toLocaleString() : '-'}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="font-bold my-2">
                Circulating Supply
              </span>
              <span className="my-3 text-xl">{data.circulating_supply ? data.circulating_supply.toLocaleString() : '-'}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="font-bold my-2">Low (24h)</span>
              <span className="my-3 text-xl">${data.low_24h ? data.low_24h.toLocaleString() : '-'}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div className="mb-8 mt-3">{renderData()}</div>;
};

export default CoinData;