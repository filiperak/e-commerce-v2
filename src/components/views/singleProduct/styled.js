import styled from "styled-components";

export const SingleProductContainer = styled.div`
  margin-top: var(--main-component-margin);
  display: flex;
  height: 70vh;
  /* & *{
        border: 1px solid green;
    } */
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex: 0.4;
`;
export const ImageIndicators = styled.div`
  /* width: 20%; */
  img {
    width: 100%;
    margin: 5%;
  }
  .current-indicator {
    border: 2px solid var(--main-orange);
  }
`;
export const MainImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 80%; */
  height: 100%;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .hide-current-img {
    display: none;
  }
  .current-img{
    transition: all 0.5s ease;
  }
`;
