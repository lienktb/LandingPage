import React from 'react'
import img from '../assets/image/online-world.svg'
export default function Features() {
  return (
    <section className='feature mt-5 mb-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-5'>
                    <h3 className='mb-4'>{`A digital web design studio creating modern & engaging online experiences`}</h3>
                    <p className='text-muted mb-4'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul className='list-unstyled text-muted features-item-list mb-5'>
                        <li >
                            We put a lot of effort in design.
                        </li>
                        <li>
                            The most important ingredient of successful website.
                        </li>
                        <li>
                            Sed ut perspiciatis unde omnis iste natus error sit.
                        </li>
                        <li>
                            Submit Your Orgnization.
                        </li>
                    </ul>
                    <button className='btn btn-primary px-3'>Learn More <i className="fas fa-arrow-right" style={{fontSize: '12px'}}></i></button>
                </div>
                <div className='col-12 col-md-7'>
                    <img  src={img} style={{width: '100%'}}/>
                </div>
            </div>

            
        </div>
        
    </section>
  )
}
