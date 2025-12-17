import styled from "@emotion/styled";

export default function Tabs() {
  return (
    <TabContainer>
      <Tab $active>책장</Tab>
      <Tab>독서 상태</Tab>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  justify-content: space-around;
`;

const Tab = styled.button<{ $active?: boolean }>`
  flex: 1;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  padding-bottom: 8px;

  border-bottom: 4px solid
    ${({ $active }) => ($active ? "#8b8b8b" : "transparent")};
`;
