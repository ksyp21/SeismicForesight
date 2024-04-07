import React from 'react'
import Map from '../Map/Map'
import CountrySearch from '../SearchBar/CountrySearch'
import Search from '../SearchBar/Search'


function Home() {
  return (
    <>
    <CountrySearch/>
      <Map />
    <Search/>
    </>
  )
}

export default Home