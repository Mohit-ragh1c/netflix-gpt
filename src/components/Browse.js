import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import { useTrailer } from '../hooks/useTrailer';
import { useUpcomming } from '../hooks/useUpcomming';

const Browse = () => {

useNowPlayingMovies(); 
useTrailer();
useUpcomming();



  return (
    <div>
      <Header></Header>
      <Maincontainer></Maincontainer>
      <Secondarycontainer></Secondarycontainer>
      browse page
    </div>
  )
}

export default Browse
