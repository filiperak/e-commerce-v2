import styled from "styled-components";

export const AdminContainer = styled.div`
    margin-top: var(--main-component-margin);
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
`;
export const AdminProductList = styled.ul`
    display: flex;
    flex-direction: column;
`;
export const AdminProductListItem = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--main-gray);
    padding: 10px;

`;
export const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    >img{
        height: 50px;
        width: 50px;
        object-fit: contain;
    }
`;
export const ProductIcons = styled.div`

`;
