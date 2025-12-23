import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export default function Modal(props: ModalProps) {
  return <ModalContainer>{props.children}</ModalContainer>;
}

const ModalContainer = styled.section`
  display: flex;
  position: absolute;
  top: 40%;

  background-color: #999999;
  height: 220px;
  width: 100%;

  border-radius: 24px;

  z-index: 100;
`;
