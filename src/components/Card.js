import React from "react"

// Images
import StarIcon from "../images/star.png"

function Card(props) {
  let badgeText
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE"
  } else {
    badgeText = ""
  }

  return (
    <div className="card">
      {badgeText && <p className="card-badge">{badgeText}</p>}
      <img
        src={require(`../images/${props.card.coverImg}`)}
        alt=""
        className="card-image"
      />
      <div className="card-text">
        <p>
          <img src={StarIcon} alt="" className="star-icon" />
          {props.card.stats.rating + " "}
          <span className="text-gray">
            ({props.card.stats.reviewCount}) • {props.card.location}
          </span>
        </p>
        <p className="card-title">{props.card.title}</p>
        <p>
          <span className="font-bold card-price">
            From ${props.card.price}{" "}
          </span>
          / person
        </p>
      </div>
    </div>
  )
}

export default Card
