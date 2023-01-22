import {Navbar, Sidebar} from "../layout";

const MainLayout = ({children}) => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        {children}  
      </div>
    </div>
  )
}

export default MainLayout;