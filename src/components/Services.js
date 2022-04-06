import React from "react";
import Service from "./Service.js"

const services = [
    {
        title: 'Digital Design',
        icon: 'far fa-gem',
        detail: 'Some quick example text to build on the card title and make up the bulk of the card\'s content. Moltin gives you the platform.'
    }, 
    {
        title: 'Unlimited Colors',
        detail: 'Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.',
        icon: 'far fa-minus-square'
    },
    {
        title: 'Strategy Solutions',
        detail: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.',
        icon: 'fas fa-piggy-bank'
    },
    {
        title: 'Awesome Support',
        detail: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.',
        icon: 'fab fa-react'
    },
    {
        title: 'Truly Multipurpose',
        detail: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
        icon: 'far fa-file-alt'
    },
    {
        title: 'Easy to customize',
        detail: 'Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.',
        icon: 'far fa-paper-plane'
    }
]
export default function Services() {
  return (
    <section className="section service mb-5" id="services">
      <div className="container  mt-5 ">
        <div className="servce-top text-center ">
          <h2>OUR SERVICES</h2>
          <div className="section-title-border mt-4"></div>
          <p className="mt-4 mb-0">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
        </div>
        <div className="list-service">
          <div className="row mt-5">
            {services.map((service, i)=>{
                 return <Service title={service.title} icon={service.icon} 
                 detail={service.detail}>
                    </Service>
            })}
            
          </div>
        </div>
      </div>
    </section>
  );
}
