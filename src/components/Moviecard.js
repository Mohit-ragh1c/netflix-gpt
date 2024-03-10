import React from 'react'

const Moviecard = ({path}) => {
  return (
    <div className="w-[170px] m-2">
      <img className="rounded-lg"
      alt='img poster' src={"https://image.tmdb.org/t/p/w500/"+path}></img>
    </div>
  )
}

export default Moviecard
