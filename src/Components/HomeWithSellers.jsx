import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Sellers from './Sellers';

const HomeWithSellersContainer = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 16cm; /* Add 2cm spacing at the bottom */
`;

const CurveDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const HomeWithSellers = () => {
  return (
    <HomeWithSellersContainer>
      <Home />
      <CurveDivider>
        <Sellers />
      </CurveDivider>
    </HomeWithSellersContainer>
  );
};

export default HomeWithSellers;
