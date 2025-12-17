import styled from "@emotion/styled";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface BookDrawerProps {
  title: string;
  id: number;
}

export default function BookDrawer(props: BookDrawerProps) {
  const navigate = useNavigate();

  const handleOpenDrawer = () => {
    navigate(`/bookshelf/${props.id}`);
  };

  return (
    <BookItem onClick={handleOpenDrawer}>
      {props.title}
      <Arrow>
        <IoIosArrowForward />
      </Arrow>
    </BookItem>
  );
}

const BookItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  height: 56px;

  border-top: 1px solid #eeeeee;
`;

const Arrow = styled.span`
  font-size: 24px;
`;
