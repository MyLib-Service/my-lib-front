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

const ModalContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 0%;
  flex-wrap: wrap;

  background-color: #fff;
  height: 260px;
  width: 100%;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  z-index: 100;
`;

const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  height: 64px;
  padding: 24px;
`;

const Title = styled.h1`
  grid-column: 2;
  font-size: 16px;
  font-weight: 600;
`;

const Close = styled.div`
  justify-items: end;
  font-size: 20px;
`;
