import React from 'react'
import img1 from '../assets/image/img-11.jpg';
import img2 from '../assets/image/img-12.jpg';
import img3 from '../assets/image/img-13.jpg';
import img4 from '../assets/image/img-14.jpg';

export default function Review() {
  return (
    <section className='review py-5'>
        <div className='container text-center'>
            <div className='row'>

                <div className='col-0 col-lg-3'></div>
                <div className='col-12 col-lg-6'>
                <div className='' >
                    <h3>WHAT THEY'VE SAID</h3>
                    <div className="section-title-border mt-4"></div>
                    <p className='text-muted mt-4'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                </div>
                </div>
                <div className='col-0 col-lg-3'></div>
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-md-4 pt-5 hover-effect'>
                    <img className='img-thumbnail rounded-circle d-block' src={img1}></img>
                    <div className='shadow'>
                        <div className='card-body'>
                            <p className='card-text text-muted px-2 pt-5 pb-3'>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.”</p>
                        </div>
                    </div>
                    <p className='py-4 fw-bold'>
                        RUBEN REED - <span className='text-muted'>Charleston</span>
                    </p>
                </div>
                <div className='col-12 col-md-4 pt-5 hover-effect'>
                    <img className='img-thumbnail rounded-circle d-block' src={img2}></img>
                    <div className='shadow'>
                        <div className='card-body'>
                            <p className='card-text text-muted px-2 pt-5 pb-3'>“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”</p>
                        </div>
                    </div>
                    <p className='py-4 fw-bold'>
                    MICHAEL P. HOWLETT - <span className='text-muted'>Worcester</span>
                    </p>
                </div>
                <div className='col-12 col-md-4 pt-5 hover-effect'>
                    <img className='img-thumbnail rounded-circle d-block' src={img3}></img>
                    <div className='shadow'>
                        <div className='card-body'>
                            <p className='card-text text-muted px-2 pt-5 pb-3'>“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”</p>
                        </div>
                    </div>
                    <p className='py-4 fw-bold'>
                    THERESA D. SINCLAIR - <span className='text-muted'>Lynchburg</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
