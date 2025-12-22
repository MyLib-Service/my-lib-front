import styled from "@emotion/styled";

export default function BookBack() {
  return (
    <>
      <BackContainer>
        <Text>해리포터</Text>
      </BackContainer>
      <BackContainer>
        {/* <Text>ABCDEF</Text> */}
        <Text>파과</Text>
      </BackContainer>
    </>
  );
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

// TODO: 영어 자간은 더 늘리기
const Text = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;

  letter-spacing: 0.3em;
  white-space: nowrap;
`;
