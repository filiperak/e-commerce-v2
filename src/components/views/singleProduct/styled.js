import styled from "styled-components";

export const SingleProductContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  height: 70vh;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;
export const SingleProductData = styled.div`
  flex: 0.6;
  > span {
    color: gray;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;
export const PriceAndRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
  }
  > div > p {
    font-size: 0.7rem;
  }
  :first-child {
    color: var(--main-orange);
    font-size: 1.1em;
    font-weight: 400;
  }
`;
export const ImgContainer = styled.div``;
export const CurrentImg = styled.div``;
