import styled from "styled-components";

const Square = styled.div`
  width: 100px;
  height: 100px;
  border: ${({ currentPosition, id, categories, prizeNumber }) =>
    currentPosition === id
      ? `3px solid ${categories[prizeNumber].style.backgroundColor}`
      : "3px solid rgba(255, 255, 255, 0.15)"};
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: ${({ currentPosition, id, categories, prizeNumber }) =>
    currentPosition === id
      ? `url(${categories[prizeNumber].image.uri})`
      : "none"};
  background-repeat: ${({ currentPosition, id }) =>
    currentPosition === id && "no-repeat"};
  background-position: ${({ currentPosition, id }) =>
    currentPosition === id && "center"};
  background-size: ${({ currentPosition, id }) =>
    currentPosition === id && "110px"};
  grid-row: ${({ positionRowMobile }) => positionRowMobile};
  grid-column: ${({ positionColMobile }) => positionColMobile};
  &:hover {
    transform: scale(1.07);
    transition: 300ms;
  }

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
    grid-row: ${({ positionRowDesk }) => positionRowDesk};
    grid-column: ${({ positionColDesk }) => positionColDesk};
  }
`;

export default Square;
