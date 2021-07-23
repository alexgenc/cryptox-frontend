import React from 'react';
import { render } from '@testing-library/react';
import CoinWatchlistForm from '../../components/CoinWatchlistForm/CoinWatchlistForm';


describe('<CoinWatchlistForm />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CoinWatchlistForm />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CoinWatchlistForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});