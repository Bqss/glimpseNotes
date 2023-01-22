import { Select } from "..";
import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNoteModal, toggleTagModal } from "../../features/ModalSlice";
import { reset, getAppState } from "../../features/appSlice";
import { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useCreateNoteMutation, useUpdateNoteMutation } from "../../api/services/noteApi";
import { ClipLoader } from "react-spinners";
import TagModal from "../../components/modal/tagModal";
import { useEffect } from "react";

const colors = [
  { id: 1, val: "#ffcccc" },
  { id: 2, val: "#ccffcc" },
  { id: 3, val: "#cce0ff" },
  { id: 4, val: "#ffffcc" },
];
const Priority = [
  { id: 1, val: "low" },
  { id: 2, val: "high" },
];

const CreateModal = () => {
  const modalRef = useRef();
  const { displayCreateNoteModal } = useSelector((state) => state.modal);
  const {isUpdate, note} = useSelector(getAppState);
  const [color, setColor] = useState(colors[0].val);
  const [createNote, { isLoading : isCreating }] = useCreateNoteMutation();
  const [updateNote , {isLoading : isUpdating}] = useUpdateNoteMutation()
  const [priority, setPriority] = useState(Priority[0].val);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  
  const dispatch = useDispatch();
  useEffect(() =>{
    isUpdate && (
      console.log(note),
      setColor(note.color),
      setContent(note.content),
      setPriority(note.priority),
      setTags(note.tags),
      setTitle(note.title)
      );
  },[isUpdate])

  const choseColor = (payload) => {
    setColor(payload);
  };
  const chosePriority = (payload) => {
    setPriority(payload);
  };
  const closeModal = () => {
    dispatch(toggleNoteModal(false));
    setTimeout(() => { 
      dispatch(reset());
      setTags([]);
      setColor(colors[0].val);
      setPriority(Priority[0].val);
    }, 300)
    
  };
  const handleTag =  (type , payload) => {
    if(type ==="select"){
      setTags(old => [...old, payload ]);
      return ;
    }
    setTags((e) => e.filter(item => item.id !== payload));
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let finalnote = { title,content,tags,color,priority};
    if(isUpdate){
      const {title, content, tags, color,priority,...patch} = note;
      finalnote = {...finalnote, ...patch }
      await updateNote(finalnote)
    }else{
      finalnote = {...finalnote, isArchived: false,isPinned: false,isRead: false,isSoftDelete : false, date: new Date().toUTCString()}
      await createNote(finalnote)
    }
    closeModal();
  };

  return (
    <>
      <TagModal type="select" handler={handleTag} selectedTag={tags}/>
      <Transition show={displayCreateNoteModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[2]"></div>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className=" fixed inset-0  flex items-center justify-center bg-transparent z-[2]">
            <div
              className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md"
              ref={modalRef}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-extrabold ">{!isUpdate ? "Create Note" : "Update Note"}</h2>
                <button
                  onClick={closeModal}
                  className="px-2 py-1 rounded-md hover:text-red-500 "
                  title="Close"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col">
                <input
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Title..."
                  className="w-full border border-gray-400 px-4 py-2 text-base rounded-md outline-none"
                  onChange={({ target }) => setTitle(target.value)}
                />
                <textarea
                  name="content"
                  cols="30"
                  rows="10"
                  className="border resize-none outline-none border-gray-400 w-full mt-4 px-4 py-2  rounded-md "
                  placeholder="Write your note here ...."
                  value ={content}
                  onChange={({ target }) => setContent(target.value)}
                ></textarea>
                <div className="mt-2 flex gap-2">
                    {tags.map((item, i) => 
                      <div className="px-2 inline-flex items-center py-[.15rem] rounded-lg text-sm bg-black/10" key={i}>
                        <span>{item.value}</span>
                        <button onClick={()=> handleTag("deselect",item.id)}>
                          <XMarkIcon className="w-4 ml-1 h-4"/>
                        </button>
                      </div> )}
                </div>
                <div className="flex justify-between mt-3 items-center">
                  <button
                    onClick={(e) => (
                      e.preventDefault(),
                      dispatch(toggleTagModal({ type: "select", value: true }))
                    )}
                    className="px-5 py-2 bg-gray-200 rounded-lg mt-4 shadow-md"
                  >
                    Add Tag
                  </button>
                  <Select
                    selected={color}
                    data={colors}
                    handleChange={choseColor}
                    name="Bg color : "
                  />
                  <Select
                    selected={priority}
                    data={Priority}
                    handleChange={chosePriority}
                    name="Priority : "
                  />
                </div>
                <div className="ml-auto mt-4  flex items-center gap-2">
                  <ClipLoader
                    loading={isCreating || isUpdating}
                    className=""
                    size={18}
                    color="#1D4ED8"
                  />
                  <button
                    className="bg-blue-500 ml-auto text-white px-5 py-2 rounded-md disabled:bg-blue-300"
                    disabled={isCreating || isUpdating}
                  >
                    {isUpdate ? "Save" :"+ Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default CreateModal;
