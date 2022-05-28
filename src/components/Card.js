import React from "react";
// import swim from "./swim.svg"
import star from "../image/star.svg"
// import swim from "../image/swim.svg"
// import swim from "../image/wedding-photography.svg"
// import swim from "../image/mountain-bike.svg"

export default function Card(props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../image/${props.coverImg}`} className="card-img" alt="person"></img>
            <div className="content">
                <div className="card-rating">
                    <img src={star} className="card-star" alt="star"></img>
                    {props.stats.rating}<div className="gray"> ({props.stats.reviewCount})<div className="dot"></div>{props.country}</div>
                </div>
                <div className="card-title">{props.title}</div>
                <div className="card-price">
                    <span className="bold-price">From ${props.price}</span>/person
                </div>
            </div>
        </div>
    )
}