import React from 'react'
import { useParams } from 'react-router-dom'
import Showresult from './Showresult';
import useFetchapi from '../customHooks/useFetchapi';
import Menu from './Menu';
import '../App.css'

export default function Searchcomp() {
    var result = useParams();
    console.log(result);
    var apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${result.txtrecord}&page=1`
    console.log(apiPath);
    var ans = useFetchapi(apiPath,result.txtrecord);

  return (
   <>
   <Menu/>
   <Showresult moviedata={ans} heading={'MOVIE NAME: ' + result.txtrecord}/>
   </>
  )
}
