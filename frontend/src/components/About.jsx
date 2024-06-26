import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            
Indulge in culinary delights at TSP, where every dish is a masterpiece crafted with passion and precision. Our chefs artfully blend local flavors with global inspirations, creating a menu that promises to delight even the most discerning palate. From farm-fresh salads to sumptuous mains and decadent desserts, each bite tells a story of quality and creativity. Join us for an unforgettable dining experience that celebrates the vibrant tapestry of flavors from around the world. Welcome to TSP, where every meal is a journey worth savoring.


            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;