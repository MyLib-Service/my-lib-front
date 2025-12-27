import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";

interface RecentWordItemProps {
  title: string;
}

export default function RecentWordItem(props: RecentWordItemProps) {
  return (
    <Container>
      <Text>{props.title}</Text>
      <CloseBtn>
        <IoClose />
      </CloseBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 95px;
  height: 32px;
  background-color: var(--color-gray-bg);
  border-radius: 32px;

  flex-shrink: 0;
`;

const Text = styled.p`
  font-size: 10px;
  font-weight: 500;
  padding-right: 2px;
  padding-bottom: 2px;
`;

const CloseBtn = styled.div`
  width: 16px;
  height: 16px;
  font-size: 16px;
`;
