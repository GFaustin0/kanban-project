
import { MagnifyingGlass, Table, Plus, CaretDown, PencilSimple } from '@phosphor-icons/react'

import { TableKanban } from './components/Table-kanban'
import { useRef, useState } from 'react'

function App() {
  const [boardTitle, setBoardTitle] = useState('Board Title')
  const inputRef = useRef()

  function onBoardTitleChange(event) {
    setBoardTitle(event.target.value)
  }

  function handleEditBoardTitle(event) {
    inputRef.current.focus()
  }

  function onBoardTitleBlur(event) {
    if (event.target.value.length === 0) {
      setBoardTitle('Board Title')
    }
  }

  return (
    <div className="flex w-auto h-screen">
      <aside className="flex flex-col w-auto h-full bg-gray-100 pt-20">
        <div className="flex w-80 gap-3 justify-center ">
          <img className="h-16 w-16 rounded-full" src="https://github.com/GFaustin0.png" alt="" />
          <div className="flex flex-col justify-center items-center">
            <strong className="text-slate-700 text-xl">Gabriel Faustino</strong>
            <span className="text-slate-400 font-semibold text-base">Front-end Developer</span>
          </div>
        </div>
        <nav className='flex flex-col items-center mt-10 px-12'>
          <div className='flex justify-between items-center w-full '>
            <button className='flex items-center justify-center text-xl text-gray-800 font-semibold'>
              <Table size={24} weight='duotone' />
              <p>Boards</p>
            </button>
            <CaretDown size={18} />
          </div>

        </nav>
      </aside>

      <main className="pl-10 w-full h-full ">

        <header className="flex w-auto h-1/4 flex-col gap-8 pt-20  pb-14 pr-10 text-slate-800">
          <div className='flex gap-4'>
            <input type="text" value={boardTitle} ref={inputRef} onChange={onBoardTitleChange} onBlur={onBoardTitleBlur} className='w-0 h-0 absolute' />
            <span onClick={handleEditBoardTitle} className='text-6xl font-semibold'>{boardTitle}</span>
            <button onClick={handleEditBoardTitle}>
              <PencilSimple size={24} />
            </button>
          </div>

          <div className='flex items-center gap-3'>
            <input type="text" className="w-40 h-8 px-4 rounded-lg bg-gray-100 outline-none cursor-auto" />
            <MagnifyingGlass size={24} />
          </div>
        </header>

        <div className='flex h-3/4 justify-center items-center w-auto gap-4 '>
          <button className='flex justify-center items-center gap-2 text-slate-800 bg-gray-200 py-4 px-8 rounded-lg shadow-xl hover:bg-indigo-600 hover:text-slate-50 transition-all ease-in-out delay-75 hover:scale-110'>
            <p className='text-xl font-semibold '>New Board</p>
            <Plus size={20} />
          </button>
        </div>

      </main>
    </div>
  )
}

export default App
