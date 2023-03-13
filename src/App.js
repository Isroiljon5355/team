import data from "./data";
import DataniPropsi from "./DataniPropsi";
import Form from "./Form";
function App() {
  return (
    <div className="App">
      <DataniPropsi data={data} />
      <Form />
    </div>
  );
}

export default App;
