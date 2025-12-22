import styled from "@emotion/styled";
import { IoMdArrowDropdown } from "react-icons/io";

interface SortDropdownProps {
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
      <Text>최신순</Text>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
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
