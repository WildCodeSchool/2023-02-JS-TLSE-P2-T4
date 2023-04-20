import styled from "styled-components";
import Square from "../components/Square";

const BoardGrid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: ${({ colMobile }) => `repeat(${colMobile}, 100px)`};
  grid-template-rows: ${({ rowMobile }) => `repeat(${rowMobile}, 100px)`};
  margin: 8% auto;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 16px;
    grid-template-columns: ${({ colDesk }) => `repeat(${colDesk}, 160px)`};
    grid-template-rows: ${({ rowDesk }) => `repeat(${rowDesk}, 160px)`};
  }
`;

const LaunchButton = styled.button`
  @media (min-width: 768px) {
    grid-area: 2/3/4/6;
    align-self: center;
    margin: 0 auto;
    width: 40%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    gap: 1.6rem;
    font-size: 1.8rem;
  }
`;

function Board() {
  return (
    <BoardGrid colMobile={3} rowMobile={7} colDesk={7} rowDesk={4}>
      <Square
        positionColMobile={1}
        positionRowMobile={1}
        positionColDesk={1}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={2}
        positionRowMobile={1}
        positionColDesk={2}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={3}
        positionRowMobile={1}
        positionColDesk={3}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={3}
        positionRowMobile={2}
        positionColDesk={4}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={3}
        positionRowMobile={3}
        positionColDesk={5}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={2}
        positionRowMobile={3}
        positionColDesk={6}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={1}
        positionRowMobile={3}
        positionColDesk={7}
        positionRowDesk={1}
      />
      <Square
        positionColMobile={1}
        positionRowMobile={4}
        positionColDesk={7}
        positionRowDesk={2}
      />
      <Square
        positionColMobile={1}
        positionRowMobile={5}
        positionColDesk={7}
        positionRowDesk={3}
      />
      <Square
        positionColMobile={2}
        positionRowMobile={5}
        positionColDesk={7}
        positionRowDesk={4}
      />
      <Square
        positionColMobile={3}
        positionRowMobile={5}
        positionColDesk={6}
        positionRowDesk={4}
      />
      <Square
        positionColMobile={3}
        positionRowMobile={6}
        positionColDesk={5}
        positionRowDesk={4}
      />
      <Square
        positionColMobile={3}
        positionRowMobile={7}
        positionColDesk={4}
        positionRowDesk={4}
      />
      <Square
        positionColMobile={2}
        positionRowMobile={7}
        positionColDesk={3}
        positionRowDesk={4}
      />
      <Square
        positionColMobile={1}
        positionRowMobile={7}
        positionColDesk={2}
        positionRowDesk={4}
      />
      <LaunchButton>Launch</LaunchButton>
    </BoardGrid>
  );
}

export default Board;
