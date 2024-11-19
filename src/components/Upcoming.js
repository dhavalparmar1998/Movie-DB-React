import React from 'react'
import Showresult from './Showresult'
import useFetchapi from '../customHooks/useFetchapi'
import Menu from './Menu'

export default function Upcoming() {

    var apiPath = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'
    var ans = useFetchapi(apiPath)
    return (
        <>
        <Menu/>
        <Showresult moviedata={ans} heading="UPCOMING MOVIES"/>

        </>
    )
    

}
