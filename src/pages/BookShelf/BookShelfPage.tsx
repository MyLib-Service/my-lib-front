import { useState } from "react";
import Search from "../../components/common/Search";
import BooksSection from "../../components/Home/BookSection/BooksSection";
import Edit from "../../components/Home/Setting/Edit";
import Setting from "../../components/Home/Setting/Setting";
import BookShelfHeader from "../../components/BookShelf/BookShelfHeader";

export default function BookShelfPage() {
  // const { id } = useParams<{ id: string }>();
  const [isGridView, setIsGridView] = useState(false);
  const [sortDown, setSortDown] = useState(false);

  const handleGridChange = () => {
    setIsGridView((isGridView) => !isGridView);
  };

  // TODO: true, false 전환은 잘 됨, 다만
  // 1. 책을 만들 때 만드는 시간을 받아야 최신순 정렬 가능.
  // 2. 가나다 순 정렬 하려면 section쪽에서 전체 정렬 해야 할 듯
  const handleDropDown = () => {
    setSortDown((sortDown) => !sortDown);
    console.log(sortDown);
  };

  return (
    <>
      <BookShelfHeader />
      <Search placeholder="책장 내 도서 검색" />
      <Setting>
        <Edit
          showSort={true}
          isGridView={isGridView}
          onGridChange={handleGridChange}
          onsortDown={handleDropDown}
          title={sortDown ? "가나다순" : "최신순"}
        />
      </Setting>

      <BooksSection
        isGridView={isGridView}
        length={isGridView ? 9 : 18}
        sortDown={sortDown}
      />
    </>
  );
}
