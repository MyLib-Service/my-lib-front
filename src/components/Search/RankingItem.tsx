import styled from "@emotion/styled";

interface RankingItemProps {
  rank: number;
}

export default function RankingItem(props: RankingItemProps) {
  // TODO: 주간 베스트셀러
  return (
    <Container>
      <RankingNumber>{props.rank + 1}</RankingNumber>
      <Text>순위</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const RankingNumber = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  color: var(--color-active);

  padding-right: 8px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
`;
