import Trashicon from "../Icons/Trashicon";
import { Column, Id } from "../Types";

interface props {
  column: Column;
  deleteColumn: (id: Id) => void
}

function Columncontainer(props: props) {
  const { column, deleteColumn } = props;
  return (
    <div
      className="
        bg-columnBackgroundColor
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
        "
    >
      {/* column title */}
      <div
        className="
        bg-mainBackgroundColor
        text-md
        h-[60px]
        cursor-grab
        rounded-md
        rounded-b-none
        p-3
        font-bold
        border-columnBackgroundColor
        border-4
        flex
        items-center
        justify-between
      "
      >
        <div className="flex gap-2">
          <div
            className="
            flex
            justify-center
            items-center
            bg-columnBackgroundColor
            px-2
            py-1
            text-md
            rounded-full
            "
          >
            0
          </div>
          {column.title}
        </div>
      <button
       onClick={() =>{
        deleteColumn(column.id)
       }} 
        className="
        stroke-gray-500
        hover:stroke-white
        hover:bg-columnBackgroundColor
        rounded
        px-1
        py-2
        ">
        <Trashicon/>
      </button>
      </div>
      {/* task container */}
      <div className=" flex flex-grow">Content</div>
      {/* column footer */}
    </div>
  );
}

export default Columncontainer;
