import { LargeBookListItem, SmallBookListItem } from "./components/books";
import { LargeAuthorListItem, SmallAuthorListItem } from "./components/authors";
import { authors, books } from "./data";
import { RegularList } from "./lists/Regular";
import { NumberedList } from "./lists";

function App() {
  return (
    <>
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
      <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
      <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
      <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} />
    </>
  );
};

export default App;