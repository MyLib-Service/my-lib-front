import styled from "@emotion/styled";
import { HiOutlineViewBoards } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";
import SortDropdown from "./SortDropdown";

interface EditProps {
  isGridView: boolean;
  onGridChange: () => void;
  onsortDown: () => void;
}

export default function Edit(props: EditProps) {
  const handleGridChange = () => {
    props.onGridChange();
  };

  return (
    <EditContainer>
      <EditBtn>편집</EditBtn>
      <SortDropdown onsortDown={props.onsortDown} />
      <ViewType onClick={handleGridChange}>
        {props.isGridView ? <AiOutlinePicture /> : <HiOutlineViewBoards />}
      </ViewType>
    </EditContainer>
  );
}

const EditContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;

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
