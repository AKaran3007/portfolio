import React from 'react';

import {Element} from 'react-scroll';
import weather from "../../assets/Weather.png"
import cart from "../../assets/Add_to_cart.png"
import calculator from "../../assets/calculator.png"
import cat from "../../assets/Cat.png"
import forms from "../../assets/Google_forms.png"
import mobile from "../../assets/Mobile.png"
import brewery from "../../assets/Brewery.png"


const Projectcontainer = () => {
  const projects = [
    {
      img: {weather},
      title: "Weather_API",
      desc: "Weather API is used to show the weather condition,temperature,humidity for all over countries/cities",
      link: "https://amazing-pithivier-c1ad34.netlify.app",
    },

    {
      img: { calculator },
      title: "Calculator",
      desc: "Calculator is Created using Advance JavaScript for more information just click",
      link: "https://magenta-meringue-d39078.netlify.app",
    },

    {
      img: { forms },
      title: "Google_Forms",
      desc: "Google_forms is Created using Advance JavaScript for more information just click",
      link: "https://astounding-tarsier-8c046b.netlify.app",
    },

    {
      img: { cart },
      title: "Cart",
      desc: "This Project is created by ReactJS. It is used to display the total amount of the product and Add to cart button like an amazon and flipcart to know more infomation just click",
      link: "https://statuesque-pika-a70a87.netlify.app",
    },

    {
      img: { cat },
      title: "Cat",
      desc: "This Project is created for searching the cat name by its breed",
      link: "	https://eclectic-mochi-3ac4cc.netlify.app",
    },

    {
      img: { mobile },
      title: "Mobile",
      desc: "This Project is created for searching the Mobile name by its brand and model of the device for more information just click",
      link: "https://ephemeral-biscochitos-de8078.netlify.app",
    },

    {
      img: { brewery },
      title: "Brewery",
      desc: "This Project is created for searching the Breweries name by its brand or barrel name for more information just click",
      link: "https://glowing-wisp-c98dbb.netlify.app/",
    },


  ]
  return (
    <Element className="projectcontainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some projects of mine which was done using HTML,CSS,JavaScript,REACTJS etc.</p>
      <div className="projectcontainer__projects">

        {
          projects.map((project, index) => {
            return (
              <project
                key={index} i
                mg={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}>

              </project>
            )
          })
        }

      </div>
    </Element>
  )
}

export default Projectcontainer