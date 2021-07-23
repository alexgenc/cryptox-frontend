import React from 'react';
import { render } from '@testing-library/react';
import WatchlistCoin from '../../components/WatchlistCoin/WatchlistCoin';

describe('<WatchlistCoin />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<WatchlistCoin />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<WatchlistCoin />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <WatchlistCoin />', () => {
    const { getByText } = render(
      <WatchlistCoin />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Price')).toBeTruthy();
  });
});