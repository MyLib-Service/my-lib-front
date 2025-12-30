import styled from "@emotion/styled";
import { NavItem } from "@/components/common";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { MdOutlinePerson } from "react-icons/md";

// TODO: src 수정
const NAV_ITEM = [
  { label: "피드", icon: MdOutlinePeopleAlt, src: "/" },
  { label: "검색", icon: IoMdSearch, src: "/search" },
  { label: "내 서재", icon: IoHomeOutline, src: "/" },
  { label: "기록", icon: LuPencil, src: "/" },
  { label: "마이페이지", icon: MdOutlinePerson, src: "/" },
];

export default function BottomNav() {
  const current = "내 서재";

  return (
    <BottomNavigation>
      <Shadow />
      {NAV_ITEM.map(({ label, icon: Icon, src }, idx) => (
        <NavItem
          key={idx}
          icon={<Icon />}
          label={label}
          src={src}
          active={label === current}
        />
      ))}
    </BottomNavigation>
  );
}

const BottomNavigation = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 98px;
  padding: 11px 28px 42px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  z-index: 10;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  height: 98px;
  box-shadow: 0 -4px 16px rgb(0 0 0 / 0.16);

  pointer-events: none;
`;
