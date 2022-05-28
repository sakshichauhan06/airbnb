import React from "react";
import heroGrid from "./hero-grid.svg"

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroGrid} className="hero-photo" alt="herogrid"></img>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>

    )
}