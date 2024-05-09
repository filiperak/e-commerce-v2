import styled from "styled-components";

export const CartContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
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
export const CartItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h5 {
    flex: 0.4;
  }
  > h6 {
    flex: 0.2;
    text-align: center;
  }
`;
export const CartList = styled.ul`
  padding: 0;
`;
export const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  list-style: none;
  border: 1px solid var(--main-gray);
  padding: 2px;
  margin-bottom: 3px;
  height: 20vh;
`;

export const ItemImg = styled.div`
  flex: 0.2;
  overflow: hidden;
  height: 100%;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: scale-down;
  }
`;
export const ItemInfo = styled.div`
  flex: 0.2;
  
  > button {
    background-color: #fff;
    font-weight: 700;
    border: 1px solid var(--main-gray);
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: red;
      color: #fff;
    }
  }
  :nth-child(2){
    color: #888;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
export const ItemQuantity = styled.div`
  flex: 0.2;
  text-align: center;
  
`;
export const ItemQuantityContainer = styled.div`
justify-content: center;
border: 1px solid var(--main-gray);
border-radius: 4px;
overflow: hidden;
  display: flex;
  p{
    font-weight: 800;
    padding: 4px;
    display: block;
    height: 20px;
    margin: 0;
  }
  :nth-child(2){
    flex:0.6;
  }
  :nth-child(odd){
    cursor: pointer;
    background-color: var(--main-orange);
    flex: 0.2;
  }
`;

export const ItemPrice = styled.div`
  flex: 0.2;
  text-align: center;
`;
export const ItemTotal = styled.div`
  flex: 0.2;
  text-align: center;
`;
