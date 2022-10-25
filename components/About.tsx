import React, {FC} from 'react'
import Image from 'next/image'

const About: FC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=500&h=500"
                loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center"/>
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-indigo-500 font-bold text-center md:text-left">Who we are</p>

            <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">About
              us</h2>

            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also
              known as placeholder text. It shares some characteristics of a real written text but is random or
              otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text
              is dummy text which has no meaning however looks very similar to real text.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
