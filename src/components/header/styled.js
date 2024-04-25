import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--main-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .MuiSvgIcon-root{
        cursor: pointer;
    }
    .MuiSvgIcon-root:hover{
        color: var(--main-orange);
    }

`;
export const SearchBar = styled.div`
    display: flex;
    border-radius: 4px;
    background-color: #fff;
    padding: 2px;
    flex: 0.7;
    >input{
        border: none;
        flex:0.9%;
    }
    >input:focus{
        outline: none;
    }
`;
export const HeaderRigth = styled.div`
    flex:0.1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2%;
    > .MuiSvgIcon-root:first-child{
        margin-right: auto;
    }
`;