import styled from "styled-components";

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  a{
    text-decoration: none;
    color: #000;
    display: block;
  }
`;
export const ProductsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

export const ProductsListItemContainer = styled.div`
  width: 250px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 45%;
    margin-left: 1%;
    margin-right: 1%;
  }
  @media (max-width: 375px) {
      width: 98%;
    margin-left: 1%;
    margin-right: 1%;
  
  }
`;


export const ProductListItemInfo = styled.div`
  flex: 0.5;
  padding: 3%;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  > span {
    color: grey;
    font-size: 0.85rem;
    font-weight: 700;
  }
`;
export const SortBar = styled.div`
  border-bottom: 2px solid var(--main-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  >p{
    font-size: 0.8em;
    font-weight: 500;
  }
`;
export const SortSelect = styled.div`
display: flex;
border-radius: 15px;
background-color: var(--main-gray);
font-size: 0.7em;
align-items: center;
padding: 1px 3px;

>select{
    height: fit-content;
    border: none;
    background-color: var(--main-gray);
    font-weight: 600;
    text-align: center;
    display: block;
}
`;