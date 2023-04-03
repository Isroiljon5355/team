import Card from "./components/Cards/Card";
import { Context } from "./components/Cards/Context";
import { data } from "./data";

function App() {
  return (
    <>
      <Context.Provider value={data}>
        <Card />
      </Context.Provider>
    </>
  );
}
export default App;
