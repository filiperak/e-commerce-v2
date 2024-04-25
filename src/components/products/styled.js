import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
`;

export const ProductsListItemContainer = styled.div`
    width: 250px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media  (max-width:550px){
        width: 45%;
        margin-left: 1%;
        margin-right: 1%;
    }
`;
export const ProductListItemInfo = styled.div`
    flex: 0.5;
    padding: 3%;
    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    >span{
        color: grey;
        font-size: 0.85rem;
        font-weight: 700;
    }
`;