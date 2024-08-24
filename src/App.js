import { SplitScreen } from "./components/split-screen";

const LeftSideComp = () => (
  <h2 style={{ background: "teal" }}>I am Left</h2>
);

const RightSideComp = () => (
  <h2 style={{ background: "green" }}>I am Right</h2>
);

function App() {
  return <SplitScreen Left={LeftSideComp} Right={RightSideComp} leftWidth={1} rightWidth={3} />;
};

export default App;