import styled from "@emotion/styled";
import type { FilterOption } from "../../../pages/BookShelf/BookShelfPage";

interface FilterModalProps {
  filterArray: FilterOption[];
  onFilterChange: (filter: FilterOption) => void;
}

export default function FilterModal(props: FilterModalProps) {
  return (
    <Container>
      {props.filterArray.map((filter) => (
        <Title onClick={() => props.onFilterChange(filter)} key={filter.id}>
          {filter.title}
        </Title>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.li`
  list-style: none;
  font-weight: 600;
  padding: 16px 0px;
`;
