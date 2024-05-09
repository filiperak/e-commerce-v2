import styled from "styled-components";

export const CartContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ShoppingCart = styled.div`
  flex: 0.6;
  /* @media(max-width:600px){
    flex: 1;
  } */
`;
export const OrderSummary = styled.div`
  flex: 0.4;
  /* @media(max-width:600px){
    flex: 1;
  } */
`;
export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5%;
`;
export const CartItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h5 {
    flex: 0.5;
  }
  > h6 {
    flex: 0.2;
    text-align: center;
  }
  >.price-total{
    flex: 0.15;
  }
`;
export const CartList = styled.ul`
  padding: 0;
  margin: 0;
`;
export const CartItemContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid var(--main-gray);
  padding: 2px;
  /* margin-bottom: 3px; */
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
  flex: 0.3;
  padding: 0 5px;
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
    background-color: var(--main-gray);
    flex: 0.2;
    &:active{
      background-color: var(--main-orange);
      transition: ease-in-out 0.1s;
    }
  }
`;

export const ItemPrice = styled.div`
  flex: 0.15;
  text-align: center;
`;
export const ItemTotal = styled.div`
  flex: 0.15;
  text-align: center;
`;




export const FormContainer = styled.form`

`;
export const SummaryContainer = styled.div`
    padding: 0 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;
export const FormTotal = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
export const LeftContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const MoreArrowDiv = styled.div`
  cursor: pointer;
`;

export const SummaryList = styled.ul`
  transition: ease-in-out .5s;
`;
export const SummaryListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;

`;
export const SummaryListItemImg = styled.div`
    position: relative;

  img{
    height: 35px;
    width: 35px;
    object-fit: cover;
    position: relative;
  }
  >p{
    position: absolute;
    min-width: 19px;
    text-align: center;
    border-radius: 50%;
    background-color: var(--main-orange);
    bottom: 0;
    right: 0;
    z-index: 100;
    transform: translate(50%,-50%);
  }
`;


