
import { MagnifyingGlass } from '@phosphor-icons/react'

import { TableKanban } from './components/Table-kanban'

function App() {

  return (
    <div className="flex">
      <aside className="w-auto h-screen bg-gray-100 pt-20">
        <div className="flex w-80 gap-3 justify-center ">
          <img className="h-16 w-16 rounded-full" src="https://github.com/GFaustin0.png" alt="" />
          <div className="flex flex-col justify-center items-center">
            <strong className="text-slate-700 text-xl">Gabriel Faustino</strong>
            <span className="text-slate-400 font-semibold text-base">Front-end Developer</span>
          </div>
        </div>
      </aside>

      <main className="pl-10 w-full h-screen">
        <header className="flex w-auto flex-col gap-8 pt-20  pb-14 text-slate-800">
          <h1 className="text-6xl font-semibold">Board</h1>
          <div className='flex items-center gap-3'>
            <input type="text" className="w-40 h-8 px-4 rounded-lg bg-gray-100 outline-none cursor-auto" />
            <MagnifyingGlass size={24} />
          </div>
        </header>

        <div className='flex gap-3 '>
          <TableKanban />
          <TableKanban />
          <TableKanban />

        </div>

      </main>
    </div>
  )
}

export default App
