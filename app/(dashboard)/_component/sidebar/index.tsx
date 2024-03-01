import React from 'react'
import NewButton from './new_button'
import List from './list'

const Sidebar = () => {
  return (
    <aside className='fixed z-10 text-primary left-0 bg-primary h-full w-[60px] flex p-3 flex-col gap-4'>
        <NewButton />
        <List />
    </aside>
  )
}

export default Sidebar