import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import MyPage from "./pages/MyPage/MyPage";
import RecordPage from "./pages/Record/RecordPage";
import SearchPage from "./pages/Search/SearchPage";
import FeedPage from "./pages/Feed/FeedPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/record" element={<RecordPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
