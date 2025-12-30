import { BookList, BooksSection } from "@/components/Home/BookSection";
import { Edit, RecentRead, Setting } from "@/components/common/Controls";

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
      <BookList />
    </>
  );
}
