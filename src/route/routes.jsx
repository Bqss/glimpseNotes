import { createBrowserRouter } from "react-router-dom";
import {Home, Notes, Archive, TaggedNotes, Trash} from "./../pages";

const routes = [
  {
      path : '/',
      element: <Home/>,   
  },
  {
      path : "/notes",
      element : <Notes/>
  },
  {
      path : "/archive",
      element : <Archive/>  
  },
  {
      path : "/tag/:tagname",
      element : <TaggedNotes/>
  },
  {
      path : "trash",
      element : <Trash/> 
  }

]

const route = createBrowserRouter(routes);


export {routes};
export default route;