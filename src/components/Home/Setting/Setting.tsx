import styled from "@emotion/styled";
import Edit from "./Edit";
import RecentRead from "./RecentRead";

interface SettingProps {
  isGridView: boolean;
  onGridChange: () => void;
}

export default function Setting(props: SettingProps) {
  return (
    <SettingContainer>
      <Edit isGridView={props.isGridView} onGridChange={props.onGridChange} />
      <RecentRead />
    </SettingContainer>
  );
}

const SettingContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
