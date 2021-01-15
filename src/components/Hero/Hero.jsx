import React from "react"
import { Link } from "gatsby"

import Container from "../common/Container"
import HeroImg from "./HeroImg"

import NextIcon from "../../../static/svg/chevron-right.svg"
import Dots from "../../../static/svg/dots.svg"

const Hero = () => {
  return (
    <section className="relative">
      <Container>
        <div className="wrapper flex items-center">
          <div className="flex flex-col w-1/2">
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
          <div className="relative">
            <HeroImg />
            <Link
              to="/"
              className="absolute bottom-2 left-0 py-6 px-8 bg-white bg-opacity-75 flex items-center"
            >
              Our Destination <NextIcon className="ml-2" />
            </Link>
          </div>
        </div>
      </Container>
      <Dots className="absolute -bottom-32 left-0" />
    </section>
  )
}

export default Hero
