import React, { useState } from 'react';

function Create() {
 
const [task,setTask] = useState();

async function handleAdd () 
{
  try
  {
    const response = await fetch('http://localhost:3001/add',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task})
      })
        if(!response.ok)
        {
          throw new Error("Data send is failed")
        }
    //const data = await response.json()
    console.log("Completed")
  }
  catch(error) {console.log(error)}
}
    
  return (
    <div className='flex flex-row justify-center gap-2'>
        <input className='border-2 rounded-md border-red-500' onChange={e => setTask(e.target.value)}/>
        <button className='border-2 border-red-600 rounded-md pl-5 pr-5 bg-yellow-300 hover:bg-yellow-400' type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create