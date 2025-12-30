import styled from "@emotion/styled";
import { BookCoverItem } from "@/components/BookShelf";
import { BookBack } from "@/components/Home/BookSection";

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
