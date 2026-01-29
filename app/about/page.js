import About from '@/components/About'
import ContactBanner from '@/components/ContactBanner'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero
        title="About Us"
        description="We are HZ Group LLC, a trusted partner in technology innovation. Our mission is to empower businesses with cutting-edge software development, custom web solutions, and comprehensive IT consulting services that drive digital transformation and sustainable growth."
        showButton={false}
      />
      <About />
      <ContactBanner />
    </div>
  )
}

export default page
