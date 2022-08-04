import styled from "styled-components";

const Header = () => {

  return (
    <StHeader>
      <h1>My Todo List</h1>
      <h1>React</h1>
    </StHeader>
  );
}

export default Header;


const StHeader = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 5px;

  padding: 10px;
`