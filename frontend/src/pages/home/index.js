import React from 'react'
import AdditonalInfo from '../../components/AdditonalInfo'
import AdsImage from '../../components/AdsImage'
import Advertisment from '../../components/Advertisment'
import Banner from '../../components/Banner'
import BestSeller from '../../components/BestSeller'
import NewArrivels from '../../components/NewArrivels'
import SpecialOffer from '../../components/SpecialOffer'

const Home = () => {
  return (
    <>
    <Banner/>
    <AdditonalInfo/>
    <Advertisment/>
    <NewArrivels/>
    <BestSeller/>
    <AdsImage/>
    <SpecialOffer/>
    </>
  )
}

export default Home