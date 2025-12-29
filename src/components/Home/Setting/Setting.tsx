import styled from "@emotion/styled";
import type { ReactNode } from "react";

interface SettingProps {
  children: ReactNode;
}

export default function Setting(props: SettingProps) {
  return <SettingContainer>{props.children}</SettingContainer>;
}

const SettingContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
  padding: 8px 0px;
  margin: 8px 0px;
`;
