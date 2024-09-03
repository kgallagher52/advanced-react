import { CurrentUserLoader, UserInfo } from "./components/users";

function App() {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
};

export default App;