import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  title: string;
  close: () => void;
  children: ReactNode;
}

export default function Modal(props: ModalProps) {
  return (
    <>
      <Backdrop onClick={props.close}>
        <ModalContainer>
          <ModalHeader>
            <Title>{props.title}</Title>
            <Close onClick={props.close}>
              <IoClose />
            </Close>
          </ModalHeader>

          {props.children}
        </ModalContainer>
      </Backdrop>
    </>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 80;
`;

// TODO: padding 및 레이아웃 수정
const ModalContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 0%;
  flex-wrap: wrap;
  justify-content: space-around;

  background-color: #fff;
  height: 260px;
  width: 100%;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  z-index: 100;
`;

const ModalHeader = styled.div`
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

const Close = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 20px;
`;
