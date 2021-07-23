import React from 'react';
import { render } from '@testing-library/react';
import PortfolioForm from '../../components/PortfolioForm/PortfolioForm';

describe('<PortfolioForm />', () => {
  // Smoke Test
  it("renders without crashing", () => {
    render(<PortfolioForm />);
  });

  // Snapshot Test
  it("matches snapshot", () => {
    const {asFragment} = render(<PortfolioForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});