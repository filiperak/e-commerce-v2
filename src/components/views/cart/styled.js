import styled from "styled-components";

export const CartContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  @media(max-width:600px){
    flex-direction: column;
  }
`;
export const ShoppingCart = styled.div`
  flex: 0.65;
  /* @media(max-width:600px){
    flex: 1;
  } */

`;
export const OrderSummary = styled.div`
  flex: 0.35;
  /* @media(max-width:600px){
    flex: 1;
  } */

`;
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
