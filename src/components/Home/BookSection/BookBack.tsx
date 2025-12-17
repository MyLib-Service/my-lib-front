import styled from "@emotion/styled";

export default function BookBack() {
  return <BackContainer>Back</BackContainer>;
}

const BackContainer = styled.div`
  display: flex;
  width: 52px;
  height: 210px;
  background-color: var(--color-gray-bg);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
