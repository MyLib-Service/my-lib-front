import styled from "@emotion/styled";
import BookCoverItem from "./BookCoverItem";
import BookBack from "../Home/BookSection/BookBack";

interface BookShelfSectionProps {
  isGridView: boolean;
}

export default function BookShelfSection(props: BookShelfSectionProps) {
  return props.isGridView ? (
    <>
      {Array.from({ length: 3 }).map(() => (
        <BookCoverItem />
      ))}
    </>
  ) : (
    <BookList>
      {Array.from({ length: 3 }).map(() => (
        <BookBack $activeLine={true} />
      ))}
    </BookList>
  );
}

const BookList = styled.section`
  display: flex;
  flex-direction: column;
`;
