import {  useRef, useState, useEffect  } from "react";
import { PulseLoader } from "react-spinners";
import { MainLayout } from "../layout";
import LoadingIndicator from "../components/loading/LoadingIndicator";
import { Note } from "../components";
import { useDispatch } from "react-redux";
import {getOrdinaryNote, getPinnedNote} from "./../util/util";
import { toggleFilterModal } from "../features/ModalSlice";
import {MagnifyingGlassIcon, BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { useGetAllNoteQuery } from "../api/services/noteApi";
import FilterModal from "../components/modal/filterModal";
import getAllNote from "../util/getAllNotes";


const Notes = () => {
  
  const dispatch = useDispatch();
  const {data =[] , isLoading, error}  = useGetAllNoteQuery();
  const [Filter, setFilter] = useState("");
  const [Searchkey, setSearchkey] = useState("");
  const notes = getAllNote(data,Filter,Searchkey);
  const pinnedNote = getPinnedNote(notes);
  const anotherNote = getOrdinaryNote(notes);
  const search = useRef();
  const focusInput = () => {
    search.current.focus();
  };
  const selectFilter = (ev) => {
    setFilter(ev.target.value);
  }
  const clearFilterSelection = () => {
    setFilter("");
  };

  return (
    <MainLayout>  
      <FilterModal 
        selectedFilter={Filter}
        handleSelect={selectFilter}
        handleClear={clearFilterSelection}
      />
      <div className="px-4">
        <div className="flex py-4 gap-5 mt-8 items-stretch">
          <div className="rounded-md flex w-full max-w-sm items-stretch">
            <button
              onClick={focusInput}
              className="bg-gray-200 py-1 px-2 rounded-l-md"
            >
              <MagnifyingGlassIcon className="w-5 h-5"/>
            </button>
            <input
              type="text"
              ref={search}
              placeholder="Search note title"
              className="bg-white w-full shadow text-md py-2 border-2 outline-none transition-colors duration-300 border-transparennt focus:border-indigo-500 pl-4 border-transparent hover:border-transparent rounded-r-md"
              onChange={(e) => setSearchkey(e.target.value)}
            />
          </div>
          <div className="">
            <button className="py-2 bg-gray-200 px-5 rounded-md inline-flex gap-2" onClick={() => dispatch(toggleFilterModal(true))}>
              <BarsArrowDownIcon className="w-5 h-5"/>
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div  className="mt-5">
          <span className="text-xl font-bold ">Pinned Notes ({pinnedNote.length})</span>
          <LoadingIndicator isLoading={isLoading}>
            <PulseLoader color="#1D4ED8" size={8}/>
          </LoadingIndicator>
          <div className=" grid gap-4 mt-6 auto-fit overflow-auto">
            {!isLoading && pinnedNote.map((e, i) =>  <Note note={e}  key={i}/> )}
          </div>
        </div>
        <div  className="mt-5">
          <span className="text-xl font-bold ">All Notes ({anotherNote.length})</span>
          <LoadingIndicator isLoading={isLoading}>
            <PulseLoader color="#1D4ED8" size={8}/>
          </LoadingIndicator>
          <div className=" grid gap-4 auto-fit mt-6 overflow-auto">
            {!isLoading && anotherNote.map((e, i) =>  <Note note={e} key={i}/> )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};



export default Notes;
