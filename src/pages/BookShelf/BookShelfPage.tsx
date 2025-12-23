import { useState } from "react";
import Search from "../../components/common/Search";
import BooksSection from "../../components/Home/BookSection/BooksSection";
import Edit from "../../components/Home/Setting/Edit";
import Setting from "../../components/Home/Setting/Setting";
import BookShelfHeader from "../../components/BookShelf/BookShelfHeader";
import Modal from "../../components/common/Modal/Modal";
import FilterModal from "../../components/common/Modal/FilterModal";

export default function BookShelfPage() {
  // const { id } = useParams<{ id: string }>();
  const filterArray = [
    { id: `${Date.now()}_${1}`, title: "제목 가나다순" },
    { id: `${Date.now()}_${2}`, title: "작가 가나다순" },
    { id: `${Date.now()}_${3}`, title: "책장 등록순" },
  ];

  const [isGridView, setIsGridView] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleGridChange = () => {
    setIsGridView((isGridView) => !isGridView);
  };

  // TODO: true, false 전환은 잘 됨, 다만
  // 1. 책을 만들 때 만드는 시간을 받아야 최신순 정렬 가능.
  // 2. 가나다 순 정렬 하려면 section쪽에서 전체 정렬 해야 할 듯
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          title={filterArray[0].title}
          onOpenModal={handleOpenModal}
        />
        {openModal && (
          <Modal title="정렬" close={handleCloseModal}>
            <FilterModal filterArray={filterArray} />
          </Modal>
        )}
      </Setting>

      <BooksSection isGridView={isGridView} length={isGridView ? 9 : 18} />
    </>
  );
}
