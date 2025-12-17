import styled from "@emotion/styled";

export default function RecentRead() {
  const date = new Date();

  return (
    <RecentReadContainer>
      <Title>최근에 읽은 책</Title>
      <NowTime>{`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} 기준`}</NowTime>
    </RecentReadContainer>
  );
}

const RecentReadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  margin-top: 10px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const NowTime = styled.p`
  font-size: 14px;
  color: var(--color-gray-text);
`;
