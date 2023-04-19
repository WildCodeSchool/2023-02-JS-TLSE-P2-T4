import styled from "styled-components";

const Square = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
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
