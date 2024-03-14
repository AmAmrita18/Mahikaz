import React from 'react'
import Header from '../Header'
import Details from './Details'
import Description from './Description'
import Features from './Features'
import SimilarListings from './SimilarListings'
import SimilarListingSlider from './SimilarListingSlider'

const Properties = () => {
  return (
    <div>
      <Header transparent={false}/>
      <Details/>
      <Description/>
      <Features/>
      <SimilarListings/>
      <SimilarListingSlider/>
    </div>
  )
}

export default Properties