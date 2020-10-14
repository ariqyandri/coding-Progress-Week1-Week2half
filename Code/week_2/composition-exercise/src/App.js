import React, { Component } from "react";
import "./App.css";
import headOfContent from "./components/Title";
import bodyOfContent from "./components/Components";

const content = [
  {
    badge: "Do you want to",
    title: "Learn how to code",
    description:
      "Awesome! Let’s do this together. We are here to support you in your coding journey",
    component: [
      {
        descriptionComp: "Get help from experienced developers",
        image: "https://learntocodetogether.nl/assets/team.svg",
      },
      {
        descriptionComp: "Learn & share with our community",
        image: "https://learntocodetogether.nl/assets/community.svg",
      },
      {
        descriptionComp: "Personal &amp; at your own speed",
        image: "https://learntocodetogether.nl/assets/personal-speed.svg",
      },
    ],
  },
  {
    badge: "Courses",
    title: "Our Courses",
    description:
      "We have created courses to help you learn, with easy to follow steps and some sparks of fun!",
    component: [
      {
        descriptionComp: "Learn new skills and expand your horizon",
        image: "https://learntocodetogether.nl/assets/expand-horizon.svg",
      },
      {
        descriptionComp: "Follow courses created by experienced developers",
        image: "https://learntocodetogether.nl/assets/developers.svg",
      },
      {
        title: "Fun, hands on and easy to follow",
        image: "https://learntocodetogether.nl/assets/step-by-step.svg",
      },
    ],
  },
  {
    badge: "Why?",
    title: "Why do we do this",
    description:
      "It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.",
    component: [
      {
        title: "Technology",
        descriptionComp:
          "We love to experiment and create awesome stuff from the comfort of our couch.",
        image: "https://learntocodetogether.nl/assets/technology.svg",
      },
      {
        title: "People",
        descriptionComp:
          "It’s always fun to do things together, the excitement and the collaborations.",
        image: "https://learntocodetogether.nl/assets/community.svg",
      },
      {
        title: "Teaching",
        descriptionComp:
          "We like to learn and to teach others the stuff we know.",
        image: "https://learntocodetogether.nl/assets/step-by-step.svg",
      },
    ],
  },
];
// YOU CANNOOOTTTT MAKE A FUNCTION OUTSIDE APP!!!! unless, it is a definition function...
// function theContent(content) {
//   return (
// <Head
// badge = {content.section}
// title = {content.title}
// description = {content.description}/>
// {content.component.map(function(component){
//   return(<bodyOfContent
//   descriptionComp= {component.descriptionComp}
// image = {component.image}/>)}}
// };

export default function App() {
  return (
    <div>
      <header id="header" className="section-header scroll">
        <a href="./">
          <img
            className="icon"
            src="https://learntocodetogether.nl/assets/icon.svg"
          />
        </a>
        <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
          <img
            className="meetup-icon"
            src="https://learntocodetogether.nl/assets/meetup-icon.svg"
          />
        </a>
        <nav>
          <a href="/courses.html">Our Courses</a>
        </nav>
      </header>

      <div className="section-header-spacer"></div>

      <div className="content">
        {/*<div className="section section-what-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Do you want to</div>
            </div>

            <h2>
              <div className="component-title ">Learn how to code</div>
            </h2>

            <div className="description">
              Awesome! Let’s do this together. We are here to support you in
              your coding journey.
            </div>
          </div>

           <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/team.svg"
              />
              <div className="component-title title">
                Get help from experienced developers
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/community.svg"
              />
              <div className="component-title title">
                Learn &amp; share with our community
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/personal-speed.svg"
              />
              <div className="component-title title">
                Personal &amp; at your own speed
              </div>
            </div>
          </div>
        </div> */}

        <div className="section-line">
          <div className="line "></div>
        </div>

        {/* <div className="section section-courses-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Courses</div>
            </div>

            <h2>
              <div className="component-title ">Our Courses</div>
            </h2>

            <div className="description">
              We have created courses to help you learn, with easy to follow
              steps and some sparks of fun!
            </div>
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/expand-horizon.svg"
              />
              <div className="component-title title">
                Learn new skills and expand your horizon
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/developers.svg"
              />
              <div className="component-title title">
                Follow courses created by experienced developers
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                style={{ width: "200px" }}
                src="https://learntocodetogether.nl/assets/step-by-step.svg"
              />
              <div className="component-title title">
                Fun, hands on and easy to follow
              </div>
            </div>
          </div>
        </div>*/}

        <div className="section-line">
          <div className="line "></div>
        </div>

        {/* <div className="section section-why-usp">
          <div className="component-section-header">
            <div className="title-badge">
              <div className="title-badge-title">Why?</div>
            </div>

            <h2>
              <div className="component-title ">Why do we do this</div>
            </h2>

            <div className="description">
              It’s really simple actually. We just love to combine our passion
              for code with our love for teaching. Coding is so much fun when
              doing it together.
            </div>
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/technology.svg"
              />
              <div className="component-title title">Technology</div>
              <div className="description">
                We love to experiment and create awesome stuff from the comfort
                of our couch.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/community.svg"
              />
              <div className="component-title title">People</div>
              <div className="description">
                It’s always fun to do things together, the excitement and the
                collaborations.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/personal-speed.svg"
              />
              <div className="component-title title">Teaching</div>
              <div className="description">
                We like to learn and to teach others the stuff we know.
              </div>
            </div>
          </div>
        </div>*/}
      </div>

      <div className="section-line">
        <div className="line "></div>
      </div>

      <div className="section-footer">
        <img
          className="logo"
          src="https://learntocodetogether.nl/assets/logo.svg"
        />
        <div className="title">Created by</div>
        <div className="subtitle">
          Rein Op &#x27;t land &amp; Danny van der Jagt
        </div>
        <div className="team-container">
          <img
            className="team"
            src="https://learntocodetogether.nl/assets/danny&rein.svg"
          />
        </div>
      </div>
    </div>
  );
}
