import styled from "@emotion/styled";
import BookBack from "./BookBack";
import BookCover from "./BookCover";

interface BooksSectionProps {
  length: number;
  isGridView: boolean;
}

export default function BooksSection(props: BooksSectionProps) {
  return <BookList>{props.isGridView ? <BookCover /> : <BookBack />}</BookList>;
}

const BookList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;
