import React from "react"
import Container from "../common/Container"
import { Link } from "gatsby"

import VideoSvg from "../../../static/svg/video.svg"
import InstagramSvg from "../../../static/svg/instagram.svg"
import FacebookSvg from "../../../static/svg/facebook.svg"
import TwitterSvg from "../../../static/svg/twitter.svg"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="bg-primary pt-12 pb-4 text-white">
      <Container>
        <div className="footer-wrapper">
          <div className="FOOTER-DETAIL-WRAPPER grid grid-cols-3 gap-8">
            <div>
              <p className="text-2xl">About Company</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A quam
                faucibus velit sed sed pretium, vitae arcu. Turpis feugiat
                consequat aliquam egestas. Id sit est, urna, feugiat scelerisque
                feugiat.
              </p>
            </div>
            <div>
              <p className="text-2xl">Newsletter</p>
              <form className="flex flex-col space-y-2">
                <label>Stay up to date</label>
                <input
                  type="email"
                  placeholder="your.address@mail.com"
                  className="p-2 text-accent"
                />
                <input
                  type="submit"
                  className="bg-accent p-2"
                  value="Subscibe"
                />
              </form>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl">Follow Us</p>
              <div className="fex space-y-2">
                <span className="flex items-center">
                  <FacebookSvg className="mr-2" /> your_company
                </span>
                <span className="flex items-center">
                  <TwitterSvg className="mr-2" /> your_company
                </span>
                <span className="flex items-center">
                  <InstagramSvg className="mr-2" /> your_company
                </span>
                <span className="flex items-center">
                  <VideoSvg className="mr-2" /> your_company
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="mx-auto text-center mt-8">
              @ {siteTitle} | All Rights Reserved | {new Date().getFullYear()}{" "}
              <br />
              Copyright by{" "}
              <Link to="https://github.com/ashalfarhan8">Ashal Farhan</Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
