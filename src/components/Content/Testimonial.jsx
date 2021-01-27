import React from "react"

import Container from "../common/Container"
import GalleryGrid from "./GalleryGrid"

const Testimonial = () => {
  return (
    <section className="relative h-screen mb-96">
      <Container className="absolute inset-0 z-10">
        <div className="wrapper w-4/5 justify-center items-center py-24">
          <div className="grid grid-cols-2">
            <div>
              <p className="text-3xl font-bold mb-0">Testimonial Gallery</p>
              <p className="text-xl font-bold ">See More</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Accumsan tincidunt faucibus aenean sit ultrices vitae. In et ut
                dictumst tristique. Id dolor iaculis leo eget sit blandit
                blandit vitae malesuada.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <GalleryGrid />
    </section>
  )
}

export default Testimonial
