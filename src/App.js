import { LargeBookListItem, SmallBookListItem } from "./components/books";
import { LargeAuthorListItem, SmallAuthorListItem } from "./components/authors";
import { authors, books } from "./data";
import { RegularList } from "./lists/Regular";

function App() {
  return (
    <>
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
      <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
      <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
      <RegularList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} />
    </>
  );
};

export default App;