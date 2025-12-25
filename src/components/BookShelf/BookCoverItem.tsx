import styled from "@emotion/styled";

export default function BookCoverItem() {
  return (
    <Container>
      <Image src="../../../public/100x150.svg" />
      <ExplainContainer>
        <TopContainer>
          <Title>Book Title: Excepturi voluptas et dolor id alias.</Title>
          <Auth>저자 및 출판사</Auth>

          <Rating>
            <RatingImage src="../../../public/star icon.svg" />
            4.5
          </Rating>
        </TopContainer>
        <Date>2025.12.09 - 2025.12.15</Date>
      </ExplainContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 14.5px;
`;

const Image = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 4px;
`;

const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 16px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 6px;
`;

const Auth = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-text);
`;

const Rating = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-text);
`;

const RatingImage = styled.img`
  padding-right: 5px;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-text);
`;
