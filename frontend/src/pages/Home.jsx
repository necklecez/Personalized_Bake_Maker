import React from 'react'
import Header from '../components/Header'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'


const Home = () => {
  return (
    <div>
      <Header />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
     
    </div>
  )
}

export default Home
