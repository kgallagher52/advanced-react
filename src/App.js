import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { SmallBookListItem } from "./components/books/SmallListItems";
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