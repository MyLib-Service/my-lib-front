import Header from "../../components/common/Header";
import Tabs from "../../components/common/Tabs";
import Search from "../../components/common/Search";
import HomeComponents from "../../components/Home/HomeComponents";
import { useState } from "react";

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
      <HomeComponents isGridView={isGridView} onGridChange={handleGridChange} />
    </>
  );
}
