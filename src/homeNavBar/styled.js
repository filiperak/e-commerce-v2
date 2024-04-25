import styled from "styled-components";

export const HomeNavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 800px;
    margin: 5px auto 10px;
    >p{
        cursor: pointer;
        color:#000;
        text-align: center;
        font-weight: 700;
        font-size: 0.9rem;
    }
   > p:hover{
        color: #fff;
        background-color: var(--main-gray);
    } 
`;