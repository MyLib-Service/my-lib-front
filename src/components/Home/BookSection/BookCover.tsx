import styled from "@emotion/styled";

export default function BookCover() {
  return (
    <>
      <CoverContainer>
        {Array.from({ length: 3 }).map(() => (
          <Item>Cover</Item>
        ))}
      </CoverContainer>
    </>
  );
}

const CoverContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);

  gap: 21px 0;
  padding-bottom: 8px;

  justify-items: center;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 150px;

  background-color: var(--color-gray-bg);
  border-radius: 4px;
  gap: 21px;

  justify-content: center;
  align-items: center;
`;
