import styled from "@emotion/styled";
import type { TabType } from "../../pages/Home/HomePage";

interface TabsProps {
  activeTab: TabType;
  onChange: (tab: "BOOKSHELF" | "STATE") => void;
}

export default function Tabs(props: TabsProps) {
  return (
    <TabContainer>
      <Tab
        $active={props.activeTab === "BOOKSHELF"}
        onClick={() => props.onChange("BOOKSHELF")}
      >
        책장
      </Tab>
      <Tab
        $active={props.activeTab === "STATE"}
        onClick={() => props.onChange("STATE")}
      >
        독서 상태
      </Tab>
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
  line-height: 24px;
  cursor: pointer;
  padding-bottom: 8px;

  border-bottom: 4px solid
    ${({ $active }) => ($active ? "#8b8b8b" : "transparent")};
`;
