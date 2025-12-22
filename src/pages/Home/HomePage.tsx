import Header from "../../components/common/Header";
import Tabs from "../../components/common/Tabs";
import Search from "../../components/common/Search";
import BooksSection from "../../components/Home/BookSection/BooksSection";
import BookLists from "../../components/Home/BookSection/BookList";
import { useState } from "react";
import Edit from "../../components/Home/Setting/Edit";
import RecentRead from "../../components/Home/Setting/RecentRead";
import Setting from "../../components/Home/Setting/Setting";

export default function HomePage() {
  const [isGridView, setIsGridView] = useState(false);

  const handleGridChange = () => {
    setIsGridView((isGridView) => !isGridView);
  };

  return (
    <>
      <Header />
      <Tabs />
      <Search placeholder="서재 내 도서 검색" />
      <Setting>
        <Edit isGridView={isGridView} onGridChange={handleGridChange} />
        <RecentRead />
      </Setting>
      <BooksSection isGridView={isGridView} length={isGridView ? 3 : 6} />
      <BookLists />
    </>
  );
}
