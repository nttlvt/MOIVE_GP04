import React from 'react'

import { Banner } from '../components/Banner/Banner'
import { ListCarousel } from '../components/Carousel/ListCarousel'
import { Footer, Header } from 'antd/es/layout/layout'
import { HomeMenu } from '../components/template/HomeMenu'


export const Home = () => {
  return (
      <div>
        <Banner/>
        <ListCarousel/>
        <HomeMenu/>
    </div>
  )
}
