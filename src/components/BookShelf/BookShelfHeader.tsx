import styled from "@emotion/styled";
import { MdArrowBackIos } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

// TODO: 나중에 firebase 연결해서 책장 이름 가져오기

export default function BookShelfHeader() {
  return (
    <Container>
      <BackBtn>
        <MdArrowBackIos />
      </BackBtn>
      <Title>책장 이름</Title>
      <EditBtn>
        <BsThreeDots />
      </EditBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
`;

const BackBtn = styled.button`
  font-size: 22px;
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  grid-column: 2;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0;
`;

const EditBtn = styled.button`
  position: absolute;
  right: 24px;

  font-size: 22px;
  width: 24px;
  height: 24px;
`;
