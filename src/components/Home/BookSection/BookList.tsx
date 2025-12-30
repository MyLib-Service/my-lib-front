import styled from "@emotion/styled";
import { BookDrawer } from "@/components/Home/BookSection";

export default function BookLists() {
  // TODO: id 고유화하기
  const now = new Date().getTime();

  const titleArray = ["소장", "재독", "이건 좀.."];

  return (
    <BookList>
      {Array.from({ length: 3 }).map((_, idx) => (
        <BookDrawer key={idx} id={now} title={titleArray[idx]} />
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
