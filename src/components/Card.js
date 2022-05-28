import React from "react";
// import swim from "./swim.svg"
import star from "./star.svg"
import swim from "./swim.svg"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={swim} className="card-img" alt="person"></img>
            <div className="content">
                <div className="rating">
                    <img src={star} className="star" alt="star"></img>
                    {props.rating}<div className="grey"> ({props.reviewCount})<div className="dot"></div>{props.country}</div>
                </div>
                <div className="about">{props.title}</div>
                <div className="price">
                    <span className="bold-price">From ${props.price}</span>/person
                </div>
            </div>
        </div>
    )
}