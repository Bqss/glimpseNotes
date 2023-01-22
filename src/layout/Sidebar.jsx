import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleTagModal } from '../features/ModalSlice';
import {useGetAllTagQuery} from "../api/services/tagApi";
const Navbar = () => {
  const dispatch = useDispatch();
  const {data : tags =[]} = useGetAllTagQuery();
  return (
    <aside className="w-[16rem] sticky top-0 bg-blue-900 text-white h-screen divide-y divide-blue-300 ">
      <div className="p-6 shadow-sm shadow-white/90">
        <a href="" className="flex items-center gap-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgBnVOLEcIgDA29DtAR2KB1A9yETTqCI6gTOAJuUDYonUA3QHLSuxj5iO8uBwSS94BEQAHeexmGKdgQXS6YFUI8oRI4BJuDrT6PWyRIM1eCOWaME0z6QqTvQOlbnI8J7gNVsTIWXKvEVTU5q+mmTiQYIP9ukhOg07AkElrBEiyN4dAnWDcoE+I1J+KyPbQDExiyPnah+hy8v3HHCI3o4miJ7/vlf0xyZf7zvz9kErWiab3EYjuxc4omKfUN+h+ZPcXVtDbg3Re6Ga9hM4Go6EIViMo78cJysSQ+8AKg8q0+N/HQHAAAAABJRU5ErkJggg=="
            alt="logo"
            className='w-6 h-6'
          />
          <span className="font-bold text-2xl">Notes</span>
        </a>
      </div>
      <ul className="py-4 space-y-2">
        <Link to={"/notes"}  label="Notes">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
        </Link>
        {
          tags.map(e => <Link to={"/tag/"+e.value.toLowerCase()} key={e.id} label={e.value}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
          </Link>)
        }
        <li className="relative before:absolute before:left-0 before:w-1 before:bg-transparent before:hover:bg-red-300 before:inset-y-0 before:transition-colors before:duration-300">
          <button className="flex w-full hover:bg-violet-400/30 transition-colors duration-300 items-center gap-4 px-6 py-4 " onClick={() => dispatch(toggleTagModal({type: "edit", value: true}))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <span className="text-lg font-bold">Edit Tags</span>
          </button>
        </li>
        <Link to={"/archive"} label="Archive">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </Link>
        <Link to={"/trash"} label="Trash">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </Link>
      </ul>
    </aside>
  );
}


const Link = ({to, children, label}) => {
  const active = "flex bg-violet-400/50 transition-colors duration-300 items-center gap-4 px-6 py-4 relative before:absolute before:left-0 before:w-1 before:bg-blue-300 before:inset-y-0 before:transition-colors before:duration-300 ";
  const notActive = "flex hoverbg-violet-400/30 transition-colors duration-300 items-center gap-4 px-6 py-4 relative before:absolute before:left-0 before:w-1 before:bg-transparent before:hover:bg-red-300 before:inset-y-0 before:transition-colors before:duration-300 "
  return (
    <li className="">
      <NavLink  to={to} className={({isActive}) => isActive ? active : notActive}>
        {children}
        <span className="text-lg font-bold capitalize">{label}</span>
      </NavLink>
    </li>
  )
}


export default Navbar;