import React from 'react'
import Header from '../Header'
import Details from './Details'

import SimilarListings from './SimilarListings'
// import SimilarListingSlider from './SimilarListingSlider'

const Properties = () => {
  return (
    <div>
      <Header transparent={false}/>
      <Details/>
      <SimilarListings/>
      
    </div>
  )
}

export default Properties