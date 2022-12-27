import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'

// type Props = {}

const Footer = () => {
  return (
    <footer className={`h-64 bg-orange pt-10`}>
        <div className={`w-5/6  mx-auto`}>
            <SocialMediaIcons />
            <div className={`md:flex justify-center md:justify-between text-center`}>
                <p className={`font-playfair font-semibold text-2xl text-deep-blue`}>ORR SHALEV</p>
                <p className={`font-playfair text-md text-deep-blue`}>© 2022 SHALEV. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer