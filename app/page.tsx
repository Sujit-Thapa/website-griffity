import React from 'react'
import Hero from '../components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Client from '@/components/clients'
import Clientnumber from '@/components/clientnumbers'
import Footer from '@/components/footer'


const page = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Clientnumber/>
      <Services/>
      <Client/>
      <Footer/>
    </main>
   
  )
}

export default page
