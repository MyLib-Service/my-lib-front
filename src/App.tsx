import { Route, Routes } from "react-router-dom";
import { BottomNav } from "@/components/common";
import Layout from "./Layout";
import HomePage from "./pages/Home/HomePage";
import BookShelfPage from "./pages/BookShelf/BookShelfPage";
import SearchPage from "./pages/Search/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookshelf/:id" element={<BookShelfPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>

      <BottomNav />
    </>
  );
}

export default App;
