import axios from "axios";
import { BookInfo } from "./components/info/book";
import { DataSource } from "./components/data-source";

const getData = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

/* Double arrow function creates a higher order function */
const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
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