import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Detail = ({ todo }) => {

  const navigate = useNavigate()

  return (
    <StContainer>
      <DetailBox>
        <Header>
        ID: {todo.id
        // .split('-',1)
        }
        <ButtonBack onClick={() => navigate(-1)}>이전으로</ButtonBack>
        </Header>
          <DetailH2>{todo.title}</DetailH2>
          <DetailP>{todo.content}</DetailP>
      </DetailBox>
    </StContainer>
  )
};

export default Detail


const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 800px;
  
  gap: 20px;
`
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 800px;
  height: auto;

  border-style: solid;
  border-width: 5px;
  border-radius: 15px;
  border-color: darkcyan;

  padding: 10px 5px 5px 5px ;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;

  gap: 250px;

  height: 40px;

  margin: 30px 60px 20px 60px;
`
const ButtonBack = styled.button`
  border: 3px solid;
  border-radius: 8px;
  border-color: red;

  width: 160px;
  height: 45px;

  background-color: #fff;

  cursor: pointer;
`
const DetailH2 = styled.h2`
  margin: 80px 60px;
  
  width: 85%;
  
  white-space: wrap;
`
const DetailP = styled.p`
  margin: 80px 60px;
  
  width: 85%;
  
  white-space: wrap;
`