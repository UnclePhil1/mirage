import Features from '@/components/Features'
import { HeaderSparkles } from '@/components/Header'
import Navbar from '@/components/Navbar'
import Accessible from '@/components/accessible'
import React from 'react'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <HeaderSparkles />
        <Features />
        <Accessible />
    </div>
  )
}

export default Landing;