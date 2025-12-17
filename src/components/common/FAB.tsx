import styled from "@emotion/styled";
import { FiPlus } from "react-icons/fi";

export default function FAB() {
  return (
    <Button>
      <FiPlus />
    </Button>
  );
}

const Button = styled.button`
  background-color: rgba(139, 139, 139, 1);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  position: fixed;
  bottom: 122px;
  right: 16px;

  width: 64px;
  height: 64px;

  z-index: 20;

  cursor: pointer;
`;
