import Search from "../../components/common/Search";
import CheckBox from "../../components/Search/CheckBox";
import HotTopic from "../../components/Search/HotTopic";
import RecentSearch from "../../components/Search/RecentSearch";

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
