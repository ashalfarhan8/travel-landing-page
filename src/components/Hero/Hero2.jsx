import React from "react"
import { Link } from "gatsby"

import Container from "../common/Container"
import HeroImg2 from "./HeroImg2"

import NextIcon from "../../../static/svg/chevron-right.svg"
import Dots from "../../../static/svg/dots.svg"

const Hero = () => {
  return (
    <section className="relative h-screen mb-52">
      {/* <div className="wrapper flex items-center h-full w-1/2">
        <div className="flex flex-col">
          <p className="text-5xl font-bold">
            Get Some Beautiful View After Working Hard
          </p>
          <p>
            When you confuse about how to release your stress, we allways have
            an idea to help relaxing your mind
          </p>
          <Link to="/" className="underline text-primary">
            Read More
          </Link>
        </div>
      </div> */}
      <div className="relative">
        <HeroImg2 />
        <Link
          to="/"
          className="absolute bottom-0 left-0 py-6 px-8 bg-white bg-opacity-75 flex items-center"
        >
          Our Destination <NextIcon className="ml-2" />
        </Link>
      </div>

      <Dots className="absolute -bottom-48 left-0" />
    </section>
  )
}

export default Hero
