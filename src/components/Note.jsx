import { useToggleNotePinMutation } from "../api/services/noteApi";
import getRelevantButton from "../util/getRelevantButton";


const Note = ({ note, type = "base" }) => {
  const { title, content, tags=[], color, priority, date, isPinned, id } = note;

  const [toggleNotePin] = useToggleNotePinMutation();
  
  return (
    <div style={{ backgroundColor: color }} className="rounded-lg min-h-[224px] w-full flex flex-col justify-between p-6 max-w-xs">
      <div>
        <div className="flex gap-2  justify-between">
          <span className="font-bold text-xl truncate">{title}</span>
          <div className="flex items-center ">
            <span className="text-sm text-blue-700 mr-2 capitalize">
              {priority}
            </span>
            {type == "base" && 
              <button
                className={isPinned ? "text-blue-600":null}
                title={isPinned ? "Remove pin" : "Make pinned"}
                onClick={() => toggleNotePin(note) }
              >
                <svg
                  viewBox="0 0 384 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
                </svg>
              </button>
            }
          </div>
        </div>
        <p className="text-sm mt-3 line-clamp-3 ">{content}</p>
      </div>
      <div>
        <div className="mt-4 flex gap-1 flex-wrap">
          {tags.map((e, i) => (
            <span
              className="px-2 py-[.15rem] rounded-lg  text-xs bg-black/10"
              key={i}
            >
              {e.value}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-gray-600 text-xs">{date}</span>
          <div className="flex items-center gap-2">
            {getRelevantButton(type, note)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
