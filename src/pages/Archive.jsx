import { MainLayout } from "../layout";
import { useState, useEffect } from "react";
import LoadingIndicator from "../components/loading/LoadingIndicator";
import {PulseLoader} from "react-spinners";
import { useGetAllNoteQuery } from "../api/services/noteApi";
import {getArchivedNotes} from "../util/util";
import { Note } from "../components";


const Archive = () => {
  const {data : notes = [], isLoading, error}  =  useGetAllNoteQuery();
  const archivedNote  = getArchivedNotes(notes);

  return (
    <MainLayout>
      <div className="px-4">
        <div className="mt-5">
          <span className="text-xl font-bold ">Archived Notes ({archivedNote.length})</span>
          <LoadingIndicator isLoading={isLoading}>
            <PulseLoader color="#1D4ED8" size={8}/>
          </LoadingIndicator>
          <div className=" grid gap-4 mt-6 auto-fit overflow-auto">
            {!isLoading &&
              archivedNote.map((e, i) =>  <Note note={e} key={i} />)}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Archive;