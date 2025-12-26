import styled from "@emotion/styled";
import { MdArrowBackIos } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

// TODO: 나중에 firebase 연결해서 책장 이름 가져오기

export default function BookShelfHeader() {
  const navigate = useNavigate();

  const handleGoSearch = () => {
    navigate(`/search`);
  };

  return (
    <Container>
      <Left>
        <BackBtn>
          <MdArrowBackIos />
        </BackBtn>
        <Title>책장 이름</Title>
      </Left>

      <Button>
        <Edit>
          <LuPencil />
        </Edit>
        <Search onClick={handleGoSearch}>
          <FaMagnifyingGlass />
        </Search>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  align-items: center;

  width: 100%;
  height: 48px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const BackBtn = styled.button`
  font-size: 22px;
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
`;

const Edit = styled.button`
  font-size: 20px;
  margin-right: 10px;
`;

const Search = styled.button`
  font-size: 20px;
`;
