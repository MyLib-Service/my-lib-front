import BooksSection from "../../components/Home/BookSection/BooksSection";
import BookLists from "../../components/Home/BookSection/BookList";
import Edit from "../../components/Home/Setting/Edit";
import RecentRead from "../../components/Home/Setting/RecentRead";
import Setting from "../../components/Home/Setting/Setting";

interface HomeComponentsProps {
  isGridView: boolean;
  onGridChange: () => void;
}

export default function HomeComponents(props: HomeComponentsProps) {
  return (
    <>
      <Setting>
        <Edit
          isGridView={props.isGridView}
          onGridChange={props.onGridChange}
          sortSlot
        />
        <RecentRead />
      </Setting>
      <BooksSection
        isGridView={props.isGridView}
        length={props.isGridView ? 3 : 6}
      />
      <BookLists />
    </>
  );
}
