import styled from "@emotion/styled";

export default function BookCover() {
  return <CoverContainer>Cover</CoverContainer>;
}

const CoverContainer = styled.div`
  display: flex;
  width: 100px;
  height: 150px;

  background-color: var(--color-gray-bg);
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`;
