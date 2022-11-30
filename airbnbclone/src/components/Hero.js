import React from "react";
// import HeroImg from "../images/hero.jpg"

export default function Hero() {
    return (
        <section className="hero">
            <img src="../images/hero.jpg" alt="Hero" className="hero--photo" />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique interactive led by
                one-of-a-kind hosts-all without leaving home
            </p>
        </section>
    )
}