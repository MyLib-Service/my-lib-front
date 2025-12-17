import styled from "@emotion/styled";
import { HiOutlineViewBoards } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";

interface EditProps {
  isGridView: boolean;
  onGridChange: () => void;
}

export default function Edit(props: EditProps) {
  const handleGridChange = () => {
    props.onGridChange();
  };

  return (
    <EditContainer>
      <EditBtn>편집</EditBtn>
      <ViewType onClick={handleGridChange}>
        {props.isGridView ? <AiOutlinePicture /> : <HiOutlineViewBoards />}
      </ViewType>
    </EditContainer>
  );
}

const EditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  margin-top: 8px;
`;

const EditBtn = styled.button`
  font-size: 14px;
  color: var(--color-gray-text);
`;

const ViewType = styled.button`
  font-size: 18px;
`;
