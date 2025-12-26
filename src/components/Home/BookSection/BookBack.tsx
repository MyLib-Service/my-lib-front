import styled from "@emotion/styled";

interface BookBackProps {
  $activeLine?: boolean;
}

export default function BookBack(props: BookBackProps) {
  return (
    <BackContainer $activeLine={props.$activeLine ?? false}>
      <Grid>
        {Array.from({ length: 6 }).map((_, idx) => (
          <BookItem key={idx}>
            <Text>해리포터</Text>
          </BookItem>
        ))}
      </Grid>
    </BackContainer>
  );
}

const BackContainer = styled.div<{ $activeLine: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ $activeLine }) =>
    $activeLine &&
    `
    &::after {
      content: "";
      margin: 24px 0px;
      width: 100%;
      height: 1px;
      background-color: #e4e7ec;
    }

    &:first-child {
      padding-top: 0px;
    }

    &:last-child::after {
      background-color: transparent;
    }
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 8px 0;

  justify-items: center;
`;

const BookItem = styled.li`
  list-style: none;
  display: flex;
  width: 52px;
  height: 210px;

  background-color: var(--color-gray-bg);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

// TODO: 영어 자간은 더 늘리기
const Text = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;

  letter-spacing: 0.3em;
  white-space: nowrap;
`;
