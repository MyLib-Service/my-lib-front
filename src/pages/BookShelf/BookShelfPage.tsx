import { useState } from "react";
import Edit from "../../components/Home/Setting/Edit";
import Setting from "../../components/Home/Setting/Setting";
import BookShelfHeader from "../../components/BookShelf/BookShelfHeader";
import Modal from "../../components/common/Modal/Modal";
import FilterModal from "../../components/common/Modal/FilterModal";
import BookShelfSection from "../../components/BookShelf/BookShelfSection";
import SortDropdown from "../../components/Home/Setting/SortDropdown";

export type FilterOption = {
  id: string;
  title: string;
};

const filterArray = [
  { id: `${Date.now()}_${1}`, title: "제목 가나다순" },
  { id: `${Date.now()}_${2}`, title: "작가 가나다순" },
  { id: `${Date.now()}_${3}`, title: "책장 등록순" },
];

export default function BookShelfPage() {
  const [isGridView, setIsGridView] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filterType, setFilterType] = useState<FilterOption>(filterArray[0]);

  const handleGridChange = () => {
    setIsGridView((isGridView) => !isGridView);
  };

  // TODO:
  // 1. 책을 만들 때 만드는 시간을 받아야 최신순 정렬 가능.
  // 2. 가나다 순 정렬 하려면 section쪽에서 전체 정렬 해야 할 듯

  const handleFilterChange = (filter: FilterOption) => {
    setFilterType(filter);
  };

  return (
    <>
      <BookShelfHeader />
      <Setting>
        <Edit
          isGridView={isGridView}
          onGridChange={handleGridChange}
          sortSlot={
            <SortDropdown
              title={filterType.title}
              onOpenModal={() => setOpenModal(true)}
            />
          }
        />
        {openModal && (
          <Modal title="정렬" close={() => setOpenModal(false)}>
            <FilterModal
              filterArray={filterArray}
              onFilterChange={handleFilterChange}
            />
          </Modal>
        )}
      </Setting>

      <BookShelfSection isGridView={isGridView} />
    </>
  );
}
