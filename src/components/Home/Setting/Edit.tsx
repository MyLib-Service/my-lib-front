import styled from "@emotion/styled";
import { HiOutlineViewBoards } from "react-icons/hi";
import { AiOutlinePicture } from "react-icons/ai";
import type { ReactNode } from "react";

interface EditProps {
  isGridView: boolean;
  onGridChange: () => void;
  sortSlot: ReactNode;
}

export default function Edit(props: EditProps) {
  const handleGridChange = () => {
    props.onGridChange();
  };

  return (
    <EditContainer>
      <EditBtn>편집</EditBtn>

      <RightBtn>
        {props.sortSlot}
        <ViewType onClick={handleGridChange}>
          {props.isGridView ? <AiOutlinePicture /> : <HiOutlineViewBoards />}
        </ViewType>
      </RightBtn>
    </EditContainer>
  );
}

const EditContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  height: 24px;
  margin: 6px 0;
`;

const EditBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--color-gray-text);
`;

const RightBtn = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
`;

const ViewType = styled.button`
  display: flex;
  font-size: 18px;
`;
