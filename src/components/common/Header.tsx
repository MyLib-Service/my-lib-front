import styled from "@emotion/styled";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleGoSearch = () => {
    navigate(`/search`);
  };

  return (
    <>
      <HeaderContainer>
        <Hamburger>
          <GiHamburgerMenu />
        </Hamburger>
        <Title>내 서재</Title>
        <Search onClick={handleGoSearch}>
          <FaMagnifyingGlass />
        </Search>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

const Hamburger = styled.button`
  grid-column: 1;
  width: 24px;
  height: 24px;
  color: black;
`;

const Title = styled.h1`
  grid-column: 2;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 0;
`;

const Search = styled.button`
  grid-column: 3;
  justify-self: end;
  width: 24px;
  height: 24px;
  color: black;
`;
