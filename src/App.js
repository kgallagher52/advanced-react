import axios from "axios";
import { BookInfo } from "./components/info/book";
import { DataSource } from "./components/data-source";

const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

function App() {
  return (
    <>
      <DataSource getData={() => getData('/books/1')} resourceName={'book'}>
        <BookInfo />
      </DataSource>
    </>
  );
};

export default App;