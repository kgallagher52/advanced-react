import axios from "axios";
import { BookInfo } from "./components/info/book";
import { DataSourceRenderPattern } from "./components/data-source-with-render-pattern";

const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

function App() {
  return (
    <>
      <DataSourceRenderPattern
        getData={() => getData('/books/1')}
        render={(resource) => <BookInfo book={resource} />}>
      </DataSourceRenderPattern>
    </>
  );
};

export default App;