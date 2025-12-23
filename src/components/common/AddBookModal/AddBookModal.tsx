import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";

interface AddBookModalProps {
  onCloseModal: () => void;
}

export default function AddBookModal(props: AddBookModalProps) {
  const handleCloseModal = () => {
    props.onCloseModal();
  };

  return (
    <Container>
      책 추가
      <Close onClick={handleCloseModal}>
        <IoClose />
      </Close>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const Close = styled.div`
  position: absolute;
  right: 24px;
`;
