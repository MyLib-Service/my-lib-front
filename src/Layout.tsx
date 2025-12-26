import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

const Main = styled.main`
  height: 100dvh;
  overflow-y: auto;

  padding-top: calc(47px + env(safe-area-inset-top));
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: calc(98px + env(safe-area-inset-bottom));
`;
