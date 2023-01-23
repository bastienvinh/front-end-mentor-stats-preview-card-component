import Stats from "./Stats"

import ImageDesktop from "../images/image-header-desktop.jpg"
import ImageMobile from "../images/image-header-mobile.jpg"

import "./Card.scss"

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Get <span className="purple">insights</span> that help your business grow.</h1>
        <p>Discover the benefits of data analytics and make better descisions, regarding revenue, customer experience, and overall efficency.</p>
        <Stats />
      </div>
      <div className="image">
        <img className="image-desktop" src={ImageDesktop} alt="image" />
        <img className="image-mobile" src={ImageMobile} alt="image" />
      </div>
    </div>
  )
}

export default Card