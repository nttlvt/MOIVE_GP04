import React from 'react'

import { Banner } from '../components/Banner/Banner'
import { ListCarousel } from '../components/Carousel/ListCarousel'
import { HomeMenu } from '../components/HomeMenu/HomeMenu'


export const Home = () => {
  return (
      <div>
        <Banner/>
        <ListCarousel/>
        <HomeMenu/>
    </div>
  )
}
