import { Search } from "@/components/common";
import { ShelfFilter, HotTopic, RecentSearch } from "@/components/Search";

export default function SearchPage() {
  return (
    <>
      <Search placeholder="검색어를 입력하세요" />
      <ShelfFilter />
      <RecentSearch />
      <HotTopic />
    </>
  );
}
