import { Search } from "@/components/common";
import { CheckBox, HotTopic, RecentSearch } from "@/components/Search";

export default function SearchPage() {
  return (
    <>
      <Search placeholder="검색어를 입력하세요" />
      <CheckBox />
      <RecentSearch />
      <HotTopic />
    </>
  );
}
