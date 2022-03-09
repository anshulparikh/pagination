import Pagination from './Components/Pagination';
import { data } from "./data";


function App() {
  return (
    <div>
      <Pagination data={data} pageSize={3} siblingArr={[1,2]}/>
    </div>
  );
}

export default App;
