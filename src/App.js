import { ControlledForm, UncontrolledForm } from "./section4";

// const getData = async (url) => {
//   const res = await axios.get(url);
//   return res.data;
// };


/* Double arrow function creates a higher order function */
// const getDataFromLocalStorage = (key) => () => {
//   const localData = localStorage.getItem(key);
//   return localData ? localData : `No data found with key: ${key}`;
// };

/* simple functional component to display local storage data */
// const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
    </>
  );
};

export default App;