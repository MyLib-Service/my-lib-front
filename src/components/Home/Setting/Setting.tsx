import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface SettingProps {
  children: ReactNode;
}

export default function Setting(props: SettingProps) {
  return <SettingContainer>{props.children}</SettingContainer>;
}

const SettingContainer = styled.section`
  display: flex;
  margin: 8px 0px;
`;
