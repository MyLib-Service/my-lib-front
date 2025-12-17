import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/common/BottomNav";
import FAB from "./components/common/FAB";
import Layout from "./Layout";
import HomePage from "./pages/Home/HomePage";
import BookShelfPage from "./pages/BookShelf/BookShelfPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookshelf/:id" element={<BookShelfPage />} />
        </Route>
      </Routes>

      <FAB />
      <BottomNav />
    </>
  );
}

export default App;
