import { books } from "./data";
import { Modal } from "./components/Modal";
import { LargeBookListItem } from "./components/books";

function App() {
  return (
    <>
      <Modal>
        {/* Demonstrating how easy it was to use this component over again with Modal because of this pattern */}
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
};

export default App;