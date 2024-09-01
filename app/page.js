"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    settitle("");
    setdesc("");
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask)

  }
  let renderTask = <h2>No Tasks Available</h2>;
  const completeHandler=(i)=>{
    let copyTask=[...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
       <li key={i} className="list-none mb-4">
  <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{t.title}</h4>
      <h5 className="text-sm text-gray-600">{t.desc}</h5>
    </div>
    <div className="flex space-x-2">
      <button onClick={()=>{completeHandler(i)}} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white transition-all duration-200 ease-in-out">
        Complete
      </button>
      <button onClick={ ()=>{
        deleteHandler(i);
      }}className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition-all duration-200 ease-in-out">
        Delete
      </button>
    </div>
  </div>
</li>

        </>
      )
    })
  }
  return (
    <>
      <div>
        <form className='' onSubmit={submitHandler}>
          <h1 className='text-4xl bg-sky-800 text-white p-8 m-5 font-extrabold text-center'>Wazir's To Do List</h1>
          <input className='px-4 py-2 m-6 rounded border-fuchsia-900 border-2' placeholder='Enter your Task here' value={title} onChange={(e) => { settitle(e.target.value) }}></input>
          <input className='px-4 py-2 m-6 rounded border-purple-900 border-2' placeholder='Enter your Description here' value={desc} onChange={(e) => { setdesc(e.target.value) }}></input>
          <button className="px-4 py-2 m-6 rounded border-red border-2 bg-sky-800 text-white">Add Task</button>
        </form>
        <div className='bg-sky-100  text-zinc-800 p-8 m-5'>{renderTask}
        </div>
      </div>
    </>
  )
}

export default page