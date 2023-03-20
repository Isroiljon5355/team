import Cards from "./components/cards/Cards";
import data from "./data";
import DataniPropsi from "./DataniPropsi";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Cards />
      <DataniPropsi data={data} />
      <Form />
      <h1 className=" text-red-900 text-center">salom</h1>
    </div>
  );
}

export default App;
