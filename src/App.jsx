import {RouterProvider} from "react-router-dom";
import routes from "./route/routes";
import CreateModal from "./components/modal/createModal";
import TagModal from "./components/modal/tagModal";



function App() {
  

  return (
    <div className="App">
      <CreateModal/>
      <TagModal/>
      <RouterProvider router={routes}/>

    </div>
  )
}

export default App;
