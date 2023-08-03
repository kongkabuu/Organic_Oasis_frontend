import React from 'react';
import styled from 'styled-components';



const SellersContainer = styled.div`
  position: relative;
`;

const CustomShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

const CustomSVG = styled.svg`
  position: relative;
  display: block;
  width: calc(163% + 1.3px);
  height: 600px;
`;

const ShapeFillPath = styled.path`
  fill: #F5E206;
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
`;

const Circle = styled.div`
  width: 7.5cm;
  height: 6.5cm;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 0 4.5cm;
`;

const Sellers = () => {
  return (
    <SellersContainer>
      {/* Your Sellers content goes here */}
      <CustomShapeDivider className="custom-shape-divider-bottom-1691053261">
        <CustomSVG
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <ShapeFillPath d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></ShapeFillPath>
        </CustomSVG>
      </CustomShapeDivider>
      <CirclesContainer>
        <Circle />
        <Circle />
        <Circle />
      </CirclesContainer>
    </SellersContainer>
  );
};

export default Sellers;
