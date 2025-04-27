import Plusicon from "./Icons/Plusicon"
import { useState } from "react"
import { Column, Id } from "../src/Types";
import Columncontainer from "./components/Columncontainer";


function Kanbanboard() {
    const [columns, setColumns] = useState<Column[]>([]);
    console.log(columns);

  return (
    <div 
        className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
        ">


    <div className="m-auto flex gap-4">
         <div className="flex gap-2">
            {columns.map((col) => (
                <Columncontainer key={col.id} column={col} deleteColumn={deleteColumn}/>
            ))}
         </div>



      <button   
        onClick={() => {
            createNewColumn();
        }}
        className="
        h-[60px]
        w-[350px]
        min-w-[350px]
        cursor-pointer
        rounded-lg
        bg-mainBackgroundColor
        border-2
        border-columnBackgroundColor
        p-4
        ring-rose-500
        hover:ring-2
        flex
        gap-2
        " 
      >
        <Plusicon/>
        Add Column
     </button>
    </div>
    </div>
  )

  function deleteColumn(id: Id){
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function createNewColumn(){
    const columnAdd:Column = {
        id: generateId(),
        title: `Column ${columns.length + 1}`,
        
    }
    setColumns([...columns, columnAdd])
  }
}

 function generateId() {
    // Generate a random number betrween 0 and 10000 
    return Math.floor(Math.random() * 10001);
  }


export default Kanbanboard
