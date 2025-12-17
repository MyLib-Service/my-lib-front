import styled from "@emotion/styled";
import { MdOutlineSettings } from "react-icons/md";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Title>내 서재</Title>
        <SetBtn>
          <MdOutlineSettings />
        </SetBtn>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const Title = styled.h1`
  grid-column: 2;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0;
`;

const SetBtn = styled.button`
  grid-column: 3;
  justify-self: end;
  font-size: 24px;
  color: black;
`;
