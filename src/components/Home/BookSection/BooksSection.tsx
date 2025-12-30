import styled from "@emotion/styled";
import { BookBack, BookCover } from "@/components/Home/BookSection";

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
