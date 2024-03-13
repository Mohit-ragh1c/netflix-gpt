import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title,movie}) => {

if(!movie) return "loading";
  return (
    <div className="p-4">
            <h1 className="text-3xl my-4 p-2 text-white">{title}</h1>
     <div className="flex overflow-x-scroll">
        <div className="flex">
    {
        movie?.map((one)=>(
            <Moviecard key={one.id} path={one?.poster_path} movie={one} ></Moviecard>
        ))
    }
    </div>
    </div>
    </div>
  )
}

export default Movielist
