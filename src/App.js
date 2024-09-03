import { ResourceLoader } from "./components/resource-loader";
import { BookInfo } from "./components/info/book";
import { UserInfo } from "./components/users/user";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={'/users/2'} resourceName={'user'}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={'/books/3'} resourceName={'book'}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
};

export default App;