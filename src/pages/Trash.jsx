import { useGetAllNoteQuery } from "../api/services/noteApi";
import { Note } from "../components";
import { MainLayout } from "../layout";
import LoadingIndicator from "../components/loading/LoadingIndicator";
import { PulseLoader } from "react-spinners";

const Trash = () => {
  const {data= [], isLoading, error } = useGetAllNoteQuery();
  const trashedNotes = data.filter(e => e.isSoftDelete);

  return (
    <MainLayout>
      <div className="px-4">
        <div className="mt-5">
          <span className="text-xl font-bold ">Trashed Note  ({trashedNotes.length})</span>
          <LoadingIndicator isLoading={isLoading}>
            <PulseLoader color="#1D4ED8" size={8}/>
          </LoadingIndicator>
          <div className=" grid gap-4 mt-6 auto-fit overflow-auto">
            {trashedNotes.map((e, i) =>  <Note note={e} type="trash" key={i} />)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


export default Trash;