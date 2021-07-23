import React from 'react';
import { render } from '@testing-library/react';
import CoinPortfolio from '../../components/CoinPortfolio/CoinPortfolio';

describe('<CoinPortfolio />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CoinPortfolio />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CoinPortfolio />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <CoinPortfolio />', () => {
    const { getByText } = render(
      <CoinPortfolio />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
    expect(getByText('24h %')).toBeTruthy();
    expect(getByText('Quantity')).toBeTruthy();
    expect(getByText('Value')).toBeTruthy();
  });
});