import styled from "@emotion/styled";
import BookBack from "./BookBack";
import BookCover from "./BookCover";

interface BooksSectionProps {
  length: number;
  isGridView: boolean;
}

export default function BooksSection(props: BooksSectionProps) {
  return (
    <BookList $grid={props.isGridView}>
      {Array.from({ length: props.length }).map((_, idx) =>
        props.isGridView ? <BookCover key={idx} /> : <BookBack key={idx} />,
      )}
    </BookList>
  );
}

const BookList = styled.section<{ $grid: boolean }>`
  display: grid;
  grid-template-columns: ${({ $grid }) =>
    $grid ? "repeat(3, 1fr)" : "repeat(6, 1fr)"};

  gap: 8px 0;
  padding-bottom: 8px;

  justify-items: center;
`;
