import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { authors } from "./data/authors";
import { RegularList } from "./lists/Regular";

function App() {
  return (
    <>
      <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
      <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
    </>
  );
};

export default App;