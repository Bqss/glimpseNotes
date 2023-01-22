import { useDispatch } from "react-redux";
import { Button } from "../components";
import { toggleNoteModal } from "../features/ModalSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="border border-gray-300 shadow-sm shadow-gray-300">
        <div className="flex justify-between p-5 items-center ">
          <button className="lg:hidden" title="toggle sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <span className="text-2xl font-extrabold">Notes</span>
          <Button onClick={() => dispatch(toggleNoteModal( true))}>+ Create</Button>
        </div>
      </nav>
      </header>
    )
}

export default Navbar;