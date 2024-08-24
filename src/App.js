import { SplitScreen } from "./components/split-screen";

const LeftSideComp = ({ title }) => (
  <h2 style={{ background: "teal" }}>{title}</h2>
);

const RightSideComp = ({ title }) => (
  <h2 style={{ background: "green" }}>{title}</h2>
);

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3} >
      <LeftSideComp title={"I am Left!"} />
      <RightSideComp title={"I am Right!"} />
    </SplitScreen>
  );
};

export default App;