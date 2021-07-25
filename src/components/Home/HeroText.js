import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/Routes';

const HeroText = () => {
  return (
    <Container>
      <h1>Cryptocurrencies.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <h1>Your Way.</h1>
      <BtnContainer>
        <Link to={ROUTES.CURRENCIES}>
          <button
            type="button"
            className="readmore text-xl font-bold"
          >
            Cryptocurrencies
          </button>
        </Link>
        <Link to={ROUTES.PORTFOLIO}>
          <button
            type="button"
            className="text-xl font-bold"
          >
            Create Portfolio
          </button>
        </Link>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 1000;
    }
    &:nth-of-type(2) {
      color: #8849c7;
    }
    &:nth-of-type(3) {
      color: #651fac;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
