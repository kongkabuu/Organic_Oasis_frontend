import styled from 'styled-components';


const RoundedButton = styled.button`
  width: 387.908px;
  height: 283.407px;
  flex-shrink: 0;
  background-color: #097120;
  border: none;
  border-radius: 50%; /* This will create a rounded button */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transform: translateX(-4cm); /* Move 4cm to the left */
`;

const AddCartButton = () => {
  return <RoundedButton>Add to Cart</RoundedButton>;
};

export default AddCartButton;
