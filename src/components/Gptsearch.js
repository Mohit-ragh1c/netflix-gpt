import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggetion from './Gptmoviesuggetion'

const Gptsearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
     <img
     className="h-[100vh] w-[1600px]"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt=" not found "></img>
     </div>
      <Gptsearchbar></Gptsearchbar>
      <Gptmoviesuggetion></Gptmoviesuggetion>
    </div>
  )
}

export default Gptsearch
