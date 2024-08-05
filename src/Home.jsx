import React, { useState } from 'react'
import Create from './Create'

function Home() {

    const[todos, setTodos] = useState([])

  return (
    <div className='bg-yellow-100 h-dvh font-mono flex flex-col' >
        <h2 className='font-mono flex justify-center text-4xl mt-20'>Todo List</h2>
        <div className='flex flex-row justify-center gap-4'>
            <input className='border-4 rounded-md' type="text" onChange={e => setTodos(e.target.value)}/>
            <button className=''>Add</button>
        </div>
        {/* <Create /> */}
        {
            todos.length === 0 ? <div className='font-mono flex justify-center'>No records</div> : todos.map((todo) => {
                return (
                    <div>
                        {todo}
                    </div>
                )
            })

        }
    </div>
  )
}

export default Home

