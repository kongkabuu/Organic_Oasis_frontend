import styled from 'styled-components';

const CurvedSection = styled.div`
  position: relative;
  background-color: #fff3b8; /* Light yellow color */
  padding: 40px 0;
  overflow: hidden;
  margin-bottom: 40px; /* Add margin bottom to detach from the footer */
`;

const CurvedSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  fill: #fff3b8; /* Light yellow color */
`;

const CurvedPath = styled.path`
  fill: inherit;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align the circles to the top */
  margin-top: -10px; /* Adjust the margin to move the circles up by 1cm */

  & > div {
    width: 90px; /* Adjust the width of the circles */
    height: 90px; /* Adjust the height of the circles */
    border-radius: 50%;
    background-color: #ffffff;
    overflow: hidden;
    margin: 20px; /* Adjust the margin to space the circles proportionally */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Sellers = () => {
  return (
    <CurvedSection>
      <CurvedSVG viewBox="0 0 1200 200" preserveAspectRatio="none">
        <CurvedPath d="M0,100 C400,200 800,0 1200,100 Z" />
      </CurvedSVG>

      <CircleContainer>
        <div>
          {/* Replace this with your image */}
          <img src="path/to/image1.jpg" alt="Partner 1" />
        </div>
        <div>
          {/* Replace this with your image */}
          <img src="path/to/image2.jpg" alt="Partner 2" />
        </div>
        <div>
          {/* Replace this with your image */}
          <img src="path/to/image3.jpg" alt="Partner 3" />
        </div>
      </CircleContainer>
    </CurvedSection>
  );
};

export default Sellers;
