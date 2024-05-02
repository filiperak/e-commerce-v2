import styled from "styled-components";

export const SingleProductContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  /* & *{
        border: 1px solid green;
    } */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex: 0.4;
`;

export const ImageIndicators = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
  > div {
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin: 10px;
  }

  .current-indicator {
    border: 3px solid var(--main-orange);
    border-radius: 4px;
  }
`;

export const MainImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 3%;

  > img {
    height: 100%;
    width: auto;
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 95%;
    object-fit: contain;
  }

  .hide-current-img {
    display: none;
  }
`;
export const SingleProductData = styled.div`
  flex: 0.6;
  >span{
    color: gray;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;
export const PriceAndRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  >div{
    display: flex;
    align-items: center;
  }
  >div >p{
    font-size: 0.7rem;
  }
  :first-child{
    color: var(--main-orange);
    font-size: 1.1em;
    font-weight: 400;
  }
`;
