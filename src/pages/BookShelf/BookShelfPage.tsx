import { useState } from "react";
import Header from "../../components/common/Header";
import Search from "../../components/common/Search";
import Tabs from "../../components/common/Tabs";
import BooksSection from "../../components/Home/BookSection/BooksSection";
import Setting from "../../components/Home/Setting/Setting";

export default function BookShelfPage() {
  // const { id } = useParams<{ id: string }>();
  const [isGridView, setIsGridView] = useState(false);

  const handleGridChange = () => {
    setIsGridView((isGridView) => !isGridView);
  };

  return (
    <>
      <Header />
      <Tabs />
      <Search />
      <Setting isGridView={isGridView} onGridChange={handleGridChange} />
      <BooksSection isGridView={isGridView} length={isGridView ? 9 : 18} />
    </>
  );
}
