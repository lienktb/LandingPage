import React from "react";

export default function Contact() {
  return (
    <section className="contact pb-5">
      <div className="container">
        <div className="row">
        <div className="col-0 col-lg-3"></div>
        <div className="col-12 col-lg-6">
          <div className="py-4  text-center">
            <h3>Contact</h3>
            <div className="section-title-border mt-4"></div>
            <p className="text-muted mt-4">
              We thrive when coming up with innovative ideas but also understand
              that a smart concept should be supported with measurable results.
            </p>
          </div>
        </div>
        <div className="col-0 col-lg-3"></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4">
            <p>
              <span className="h6">Office Address 1:</span>
              <br></br>
              <span className="text-muted d-block mt-3">
                4461 Cedar Street Moro, AR 72368
              </span>
            </p>
            <p className="mt-4">
              <span className="h6 mt-3">Office Address 2:</span>
              <br></br>
              <span className="text-muted d-block mt-3">
                2467 Swick Hill Street <br></br>New Orleans, LA 70171
              </span>
            </p>
            <p className="mt-4">
              <span className="h6">Working Hours:</span>
              <br></br>
              <span className="text-muted d-block mt-3">9:00AM To 6:00PM</span>
            </p>
          </div>
          <div className="col-12 col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your name*"
              />
              <span className="input-group-text bg-white border-0"></span>
              <input
                type="email"
                className="form-control"
                placeholder="Your email*"
              />
            </div>
            <input
              type="email"
              className="form-control mt-4"
              placeholder="Your subject.."
            />
            <textarea
              type="text"
              className="form-control d-block mt-4"
              placeholder="Your message.."
              rows="4"
            ></textarea>
            <button className="btn btn-primary mt-4 py-2 float-end">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
