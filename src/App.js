import { UserLoader, UserInfo } from "./components/users";

function App() {
  return (
    <>
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default App;