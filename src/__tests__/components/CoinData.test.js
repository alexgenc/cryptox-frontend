import React from 'react';
import { render } from '@testing-library/react';
import CoinData from '../../components/CoinData/CoinData';

const data = {
  "market_cap": 1000000,
  "total_supply": 5000000,
  "total_volume": 300000,
  "high_24h": 500,
  "circulating_supply": 1000000,
  "low_24h": 450
}

describe('<CoinData />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CoinData data={data} />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CoinData data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  
  it('renders the <CoinData /> with populated data', () => {
    const { getByText } = render(
      <CoinData data={data} />
    );

    expect(getByText('Market Cap')).toBeTruthy();
    expect(getByText('Total Supply')).toBeTruthy();
    expect(getByText('Total Volume')).toBeTruthy();
    expect(getByText('Circulating Supply')).toBeTruthy();
    expect(getByText('High (24h)')).toBeTruthy();
    expect(getByText('Low (24h)')).toBeTruthy();
  });
});