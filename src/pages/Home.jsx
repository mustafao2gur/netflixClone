import React from 'react'
import Main from '../Components/main/Main'
import Row from '../Components/row/Row'
import info from "../info"

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchURL={info.requestUpcoming} />
      <Row title="Popular" fetchURL={info.requestPopular} />
      <Row title="Trending" fetchURL={info.requestUpcoming} />
      <Row title="Top Rated" fetchURL={info.requestTopRated} />
      <Row title="Horror" fetchURL={info.requestHorror} />
    </>
  );
}

export default Home