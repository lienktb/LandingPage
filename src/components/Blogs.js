import { Button } from "bootstrap";
import React from "react";
import img1 from '../assets/image/img-21.jpg'
import img2 from '../assets/image/img-22.jpg'
import img3 from '../assets/image/img-23.jpg'
export default function Blogs() {
  return (
    <section className="blog mb-5 pb-5">
      <div className="container">
        <div
          className="py-4  text-center"
        >
          <h3>BLOG</h3>
          <div className="section-title-border mt-4"></div>
          <p className="text-muted mt-4">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean class at a euismod mus luctus
            quam.
          </p>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-md-4 mt-4">
                <div className="card border-0">
                    <img src={img1}></img>
                    <div className="body">
                        <h6 className="text-muted mt-3">UI & UX Design</h6>
                        <h5>Doing a cross country road trip</h5>
                        <p className="text-muted">She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                        <a href="#" className="btn read-more p-0">Read more <i class="fas fa-arrow-right" style={{fontSize: '12px'}}></i></a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
                <div className="card border-0">
                    <img src={img2}></img>
                    <div className="body">
                        <h6 className="text-muted mt-3">Digital Marketing</h6>
                        <h5>New exhibition at our Museum</h5>
                        <p className="text-muted">Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        <a href="#" className="btn read-more p-0">Read more <i class="fas fa-arrow-right" style={{fontSize: '12px'}}></i></a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
                <div className="card border-0">
                    <img src={img3}></img>
                    <div className="body">
                        <h6 className="text-muted mt-3">Travelling</h6>
                        <h5>Why are so many people..</h5>
                        <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                        <a href="#" className="btn read-more p-0">Read more <i class="fas fa-arrow-right" style={{fontSize: '12px'}}></i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
