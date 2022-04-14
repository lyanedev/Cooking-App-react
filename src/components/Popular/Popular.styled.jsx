import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem 0;
`;

export const PopularTitle = styled.h3`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 2rem;
  color: #0a1e35;
  font-family: ;
`;

export const CardsContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 2.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const PopularCard = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
`;
