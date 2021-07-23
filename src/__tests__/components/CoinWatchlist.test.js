import React from 'react';
import { render } from '@testing-library/react';
import CoinWatchlist from '../../components/CoinWatchlist/CoinWatchlist';

describe('<CoinWatchlist />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CoinWatchlist />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CoinWatchlist />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <CoinWatchlist />', () => {
    const { getByText } = render(
      <CoinWatchlist />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
  });
});