import styled from "styled-components";

export const OptionsMenuContainer = styled.select`
    border: 1px solid var(--main-orange);
    font-size: 0.8em;
    font-weight: 600;
    color: #888;
    display: inline-block;
    border-bottom-left-radius:4px;
    border-top-left-radius:4px;
    width: auto;
    flex: 0.15;
    &:focus{
        outline: none;
    }
    option{
        color: #000;
        font-size: 1em;
    }
`;
