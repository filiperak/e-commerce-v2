import styled from "styled-components";

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    .current-img{
        width: 100%;
        height: 100%;
    }

    .hide-current-img{
        display: none;
    }
    .arrow{
        position: absolute;
        font-size: 2rem;
        opacity: 50%;
        cursor: pointer;
        z-index: 100;
        
    }
    .arrow-left{
        left: 0;
    }
    .arrow-rigth{
        right: 0;
    }
`;
export const Indicators = styled.span`
    display: flex;
    position: absolute;
    bottom: 2%;
    .current-indicator{
        background-color: #000;
    }
`;
export const SingleIndicator = styled.button`
    border-radius: 50%;
    height: 15px;
    width: 15px;
    margin: 0 0.2rem;
    border: none;
    cursor: pointer;
   opacity: 60%;
`;