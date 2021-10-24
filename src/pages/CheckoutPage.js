import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
// extra imports

import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page-100">
        <section>
          <h3>That was all</h3>
          <Link to="/" className="btn">
            home
          </Link>
        </section>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;
export default CheckoutPage;
