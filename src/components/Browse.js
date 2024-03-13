import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import { useTrailer } from '../hooks/useTrailer';
import { useUpcomming } from '../hooks/useUpcomming';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showgptsearch=useSelector(store=>store.gpt.showgptsearch);

useNowPlayingMovies(); 
useTrailer();
useUpcomming();



  return (
    <div>
      <Header></Header>
      {showgptsearch ?
      <Gptsearch></Gptsearch>
      :<>
      <Maincontainer></Maincontainer>
      <Secondarycontainer></Secondarycontainer>
      </>
      }
    </div>
  )
}

export default Browse
