import { TaskCard } from "./Task-card";
import { PencilSimple } from "@phosphor-icons/react";

export function TableKanban(props) {
  return (

    <div className="flex flex-col gap-2 w-96 bg-gray-200 p-2 rounded-xl overflow-y-scroll">
      <header className=''>
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-4">
            <p className='text-xl font-medium'>{props.tableName}</p>
            <span className="w-5 h-5 rounded-md bg-teal-500"></span>
          </div>
          <button>
            <p className="sr-only">Editar Tabela</p>
            <PencilSimple size={20} weight="duotone" />
          </button>
        </div>
      </header>

      <TaskCard />

    </div>
  )
}