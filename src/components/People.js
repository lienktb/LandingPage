import React from "react";
import img1 from "../assets/image/img-11.jpg";
import img2 from "../assets/image/img-12.jpg";
import img3 from "../assets/image/img-13.jpg";
import img4 from "../assets/image/img-14.jpg";
const peoples = [
  {
    name: "Frank Johnson",
    job: "CEO",
    img: img1,
  },
  {
    name: "Elaine Stclair",
    job: "DESIGNER",
    img: img2,
  },
  {
    name: "Wanda Arthur",
    job: "DEVELOPER",
    img: img3,
  },
  {
    name: "Joshua Stemple",
    job: "MANAGER",
    img: img4,
  },
];
export default function People() {
  return (
    <section className="people py-5" id="team">
      <div className="container text-center">
        <div className="row">
        <div className="col-0 col-lg-3"></div>
        <div className="col-12 col-lg-6">
          <div className="py-4">
            <h3>BEHIND THE PEOPLE</h3>
            <div className="section-title-border mt-4"></div>
            <p className="text-muted mt-4">
              It is a long established fact that create category leading brand
              experiences a reader will be distracted by the readable content of
              a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="col-0 col-lg-3"></div>

        </div>
        <div className="row mt-5">
          {peoples.map((people, i) => (
            <div className="col-12 col-md-3">
              <div className="card border-0  border-bottom">
                <img className="img" src={people.img}></img>
                <div className="card-body">
                  <h6>{people.name}</h6>
                  <p className="card-text text-muted">{people.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
