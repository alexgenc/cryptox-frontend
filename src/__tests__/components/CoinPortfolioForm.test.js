import React from 'react';
import { render } from '@testing-library/react';
import CoinPortfolioForm from '../../components/CoinPortfolioForm/CoinPortfolioForm';

describe('<CoinPortfolioForm />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<CoinPortfolioForm />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<CoinPortfolioForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders the <CoinPortfolioForm />', () => {
    const { getByText } = render(
      <CoinPortfolioForm />
    );

    expect(getByText('Quantity')).toBeTruthy();
  });
});