import React from "react"

import OfferImg from "./OfferImg"
import Container from "../common/Container"

import Airplane from "../../../static/svg/airplane.svg"
import Calendar from "../../../static/svg/calendar.svg"
import Globe from "../../../static/svg/globe.svg"

const Offer = () => {
  return (
    <section className="relative overflow-hidden">
      <OfferImg />
      <Container className="absolute z-1 inset-0">
        <p className="text-3xl font-bold text-center mt-24">What We Offer</p>
        <div className="WRAPPER grid grid-cols-3 w-full mt-16">
          <div className=" flex flex-col justify-center">
            <Airplane className="mx-auto" />
            <p className="text-xl font-bold text-center">Reliable Airlines</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className=" flex flex-col justify-center">
            <Calendar className="mx-auto" />
            <p className="text-xl font-bold text-center">Customize The Date</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className=" flex flex-col justify-center">
            <Globe className="mx-auto" />
            <p className="text-xl font-bold text-center">Best Destination</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Offer
