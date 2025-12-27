import styled from "@emotion/styled";

export default function HotTopic() {
  const date = new Date();
  return (
    <Container>
      <GuideContainer>
        <Title>인기 검색어</Title>
        <NowTime>{`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 기준`}</NowTime>
      </GuideContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
`;

const GuideContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
`;

const NowTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-gray-text);
`;
