import styled from "@emotion/styled";
import { RecentWordItem } from "@/components/Search";

export default function RecentSearch() {
  return (
    <Container>
      <GuideContainer>
        <Title>최근 검색어</Title>
        <DeleteAll>전체 삭제</DeleteAll>
      </GuideContainer>

      <ScrollRow>
        {Array.from({ length: 5 }).map((_, idx) => (
          <RecentWordItem key={idx} title={`검색어 ${idx + 1}`} />
        ))}
      </ScrollRow>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e4e7ec;
    margin: 24px 0px;
  }
`;

const GuideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

const DeleteAll = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-text);
`;

const ScrollRow = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  white-space: nowrap;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
