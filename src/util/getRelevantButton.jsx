import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { setUpdateNote } from "../features/appSlice";
import { toggleNoteModal } from "../features/ModalSlice";
import { useDispatch } from "react-redux";
import {
  useToggleSoftDeleteNoteMutation,
  useToggleArchiveNoteMutation,
  useDeleteNoteMutation,
} from "../api/services/noteApi";

const getRelevantButton = (type, note) => {
  const [toggleSoftDeleteNote] = useToggleSoftDeleteNoteMutation();
  const [toggleArchiveNote] = useToggleArchiveNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const dispatch = useDispatch();
  const updateHandler = () => {
    dispatch(setUpdateNote(note));
    dispatch(toggleNoteModal(true));
  };

  if (type === "archive") {
    return (
      <>
        <button
          className="transition-colors duration-150 hover:text-blue-700"
          title="Unarchive"
          onClick={async () => toggleArchiveNote(note)}
        >
          <ArchiveBoxArrowDownIcon className="w-5 h-5 rotate-180" />
        </button>
        <button
          className="transition-colors duration-150 hover:text-red-700"
          title="Move To Trash"
          onClick={async () => toggleSoftDeleteNote(note)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </>
    );
  } else if (type === "trash") {
    return (
      <>
        <button
          className="transition-colors duration-150 hover:text-blue-700"
          title="Restore"
          onClick={async () => toggleSoftDeleteNote(note)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32zm70.11-175.8l89.38-94.26a15.41 15.41 0 0 1 22.62 0l89.38 94.26c10.08 10.62 2.94 28.8-11.32 28.8H256v112a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V320h-57.37c-14.26 0-21.4-18.18-11.32-28.8zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
          </svg>
        </button>
        <button
          className="transition-colors duration-150 hover:text-red-700"
          title="Delete"
          onClick={async () => deleteNote(note)}
        >
          <TrashIcon className="w-5 h-5"/>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          className="transition-colors duration-150 hover:text-green-700"
          title="Edit"
          onClick={updateHandler}
        >
          <PencilSquareIcon className="w-5 h-5" />
        </button>
        <button
          className="transition-colors duration-150 hover:text-blue-700"
          title="Archive"
          onClick={async () => toggleArchiveNote(note)}
        >
          <ArchiveBoxArrowDownIcon className="w-5 h-5" />
        </button>
        <button
          className="transition-colors duration-150 hover:text-red-700"
          title="Delete"
          onClick={async () => toggleSoftDeleteNote(note)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </>
    );
  }
};

export default getRelevantButton;
