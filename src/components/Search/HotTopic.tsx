import styled from "@emotion/styled";
import { RankingItem } from "@/components/Search";

import rankList from "../../utils/rankList";

export default function HotTopic() {
  const date = new Date();
  const ranks = rankList();

  return (
    <Container>
      <GuideContainer>
        <Title>인기 검색어</Title>
        <NowTime>{`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 기준`}</NowTime>
      </GuideContainer>

      <RankingContainer>
        {ranks.map((rank: number) => (
          <RankingItem key={rank} rank={rank} />
        ))}
      </RankingContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const GuideContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

const NowTime = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-text);
`;

const RankingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
`;
