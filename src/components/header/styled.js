import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--main-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    .MuiSvgIcon-root{
        cursor: pointer;
    }
    .MuiSvgIcon-root:hover{
        color: var(--main-orange);
    }
    >svg{
        cursor: pointer;
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