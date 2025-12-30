import styled from "@emotion/styled";
// import { SortDropdown } from "@/components/common/Controls";

export default function ShelfFilter() {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Check>
        <Input type="checkbox" id="MyLibrary" />
        <Label htmlFor="MyLibrary">내 서재</Label>
      </Check>

      {/* <SortDropdown title='정렬' /> */}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e4e7ec;
    margin: 24px 0px;
  }
`;

const Check = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 24px;
  accent-color: var(--color-checked);
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  padding-left: 8px;
`;
