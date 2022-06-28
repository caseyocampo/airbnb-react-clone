import React from "react"
import HeroImage from "../images/photo-grid.png"

function Hero() {
  return (
    <section>
      <div>
        {/* Hero Image */}
        <img src={HeroImage} alt="" className="hero-image" />
        {/* Hero Text */}
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  )
}

export default Hero
