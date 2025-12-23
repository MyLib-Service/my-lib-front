import styled from "@emotion/styled";
import { IoMdArrowDropdown } from "react-icons/io";

interface SortDropdownProps {
  title: string;
  onsortDown: () => void;
}

export default function SortDropdown(props: SortDropdownProps) {
  const handleDropDown = () => {
    props.onsortDown();
  };

  return (
    <Container onClick={handleDropDown}>
      <Icon>
        <IoMdArrowDropdown />
      </Icon>
      <Text>{props.title}</Text>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  padding-right: 8px;

  &::after {
    content: "";
    border-right: 1px solid #000;
    width: 1px;
    height: 16px;

    padding-left: 8px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
`;
