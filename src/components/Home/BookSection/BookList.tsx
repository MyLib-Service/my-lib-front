import styled from "@emotion/styled";
import BookDrawer from "./BookDrawer";

export default function BookLists() {
  // TODO: id 고유화하기
  const now = new Date().getTime();

  return (
    <BookList>
      {Array.from({ length: 3 }).map((_, idx) => (
        <BookDrawer key={idx} id={now} title="책장 이름" />
      ))}
    </BookList>
  );
}

const BookList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  padding: 8px 0;
`;
