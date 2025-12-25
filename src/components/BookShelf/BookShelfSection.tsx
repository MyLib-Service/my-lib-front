import styled from "@emotion/styled";
import BookCoverItem from "./BookCoverItem";
import BookBack from "../Home/BookSection/BookBack";

interface BookShelfSectionProps {
  isGridView: boolean;
}

export default function BookShelfSection(props: BookShelfSectionProps) {
  return props.isGridView ? (
    <>
      {Array.from({ length: 3 }).map((_, idx) => (
        <BookCoverItem key={idx} />
      ))}
    </>
  ) : (
    <BookList>
      {Array.from({ length: 18 }).map((_, idx) => (
        <BookBack key={idx} />
      ))}
    </BookList>
  );
}

const BookList = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 8px 0;
  padding-bottom: 8px;

  justify-items: center;
`;
