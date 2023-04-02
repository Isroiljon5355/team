import Card from "./components/Cards/Card";
import { Context } from "./components/Cards/Context";
import Pubg from "./components/Section/Pubg";
import { data } from "./data";

function App() {
  return (
    <>
      <Context.Provider value={data}>
        <Card />
      </Context.Provider>
      <Pubg />
    </>
  );
}

export default App;
