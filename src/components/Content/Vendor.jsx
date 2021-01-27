import React from "react"

import Container from "../common/Container"

import Dots from "../../../static/svg/dots.svg"
import Donut from "../../../static/svg/donut.svg"

const Vendor = () => {
  return (
    <section className="w-full relative overflow-hidden pb-24">
      <Donut className="absolute top-1/2 left-0" />
      <Container>
        <div className="WRAPPER grid grid-cols-2 w-full items-center h-full space-x-6 py-48 z-10">
          <div>
            <p className="text-4xl font-bold">
              Asia? Europe? Antarctica ? Don’t Worry. We Connected With
              Worldwide Travel Vendor
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem
              arcu metus, egestas. Neque diam ultrices semper eget justo
              aliquet. Hac eu scelerisque eget tincidunt nibh amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
              tincidunt faucibus aenean sit ultrices vitae. In et ut dictumst
              tristique. Id dolor iaculis leo eget sit blandit blandit vitae
              malesuada. Nunc venenatis quis ultrices amet amet laoreet
              pellentesque vestibulum.
            </p>
          </div>
        </div>
      </Container>
      <Dots className="absolute top-0 right-0" />
    </section>
  )
}

export default Vendor
