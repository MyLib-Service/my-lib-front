import styled from "@emotion/styled";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function Search() {
  return (
    <Section>
      <Button>
        <FaMagnifyingGlass />
      </Button>
      <Input type="search" placeholder="서재 내 도서 검색" />
      <CloseBtn>
        <IoClose />
      </CloseBtn>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  height: 48px;
  margin-top: 16px;

  background-color: var(--color-gray-bg);
  border-radius: 12px;

  align-items: center;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 12px;
`;

const CloseBtn = styled(Button)`
  font-size: 24px;
  margin-left: auto;
`;

const Input = styled.input`
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-gray-text);
    font-size: 16px;
  }
`;
