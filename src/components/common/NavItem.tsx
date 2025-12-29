import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  src: string;
}

export default function NavItem(props: NavItemProps) {
  const navigate = useNavigate();

  const handleGoPage = () => {
    navigate(`${props.src}`);
  };

  return (
    <NavContainer onClick={handleGoPage}>
      <Icon $active={props.active}>{props.icon}</Icon>
      <Label $active={props.active}>{props.label}</Label>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div<{ $active?: boolean }>`
  font-size: 24px;
  margin-bottom: 2px;

  color: ${({ $active }) =>
    $active ? "var(--color-active)" : "var(--color-black-text)"};
`;

const Label = styled.p<{ $active?: boolean }>`
  font-size: 12px;
  color: var(--color-black-text);

  color: ${({ $active }) =>
    $active ? "var(--color-active)" : "var(--color-black-text)"};
`;
