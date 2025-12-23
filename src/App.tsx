import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/common/BottomNav";
import FAB from "./components/common/FAB";
import Layout from "./Layout";
import HomePage from "./pages/Home/HomePage";
import BookShelfPage from "./pages/BookShelf/BookShelfPage";
import { useState } from "react";
import AddBookModal from "./components/common/Modal/AddBookModal";
import Modal from "./components/common/Modal/Modal";

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAddOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddOpen(false);
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookshelf/:id" element={<BookShelfPage />} />
        </Route>
      </Routes>

      <FAB onOpenModal={handleOpenModal} />
      {isAddOpen && (
        <Modal title="책 추가" close={handleCloseModal}>
          <AddBookModal />
        </Modal>
      )}

      <BottomNav />
    </>
  );
}

export default App;
