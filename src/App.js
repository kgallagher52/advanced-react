import axios from "axios";
import { BookInfo } from "./section2-3-layout-and-container-components/info/book";
import { DataSourceRenderPattern } from "./section2-3-layout-and-container-components/data-source-with-render-pattern";

const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

/* Double arrow function creates a higher order function */
const getDataFromLocalStorage = (key) => () => {
  const localData = localStorage.getItem(key);
  return localData ? localData : `No data found with key: ${key}`;
};

/* simple functional component to display local storage data */
const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource
        getData={() => getData('/books/1')}
        resourceName={'book'}>
        <BookInfo />
      </DataSource>
      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName={'msg'}>
        <Message />
      </DataSource>
    </>
  );
};

export default App;