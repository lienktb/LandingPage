import React from 'react'

export default function Social() {
  return (
    <section className='social mt-5'>
        <div className='container '>
            <div className='row'>
                <div className='col-12 col-md-6 py-3 '>
                    <ul className='p-0'>
                        <li className='icon-social'>
                             <i class="fab fa-facebook-f "></i>
                        </li>
                        <li className='icon-social'>
                        <i class="fab fa-twitter"></i>
                        </li>
                        <li className='icon-social'>
                        <i class="fab fa-linkedin-in"></i>
                        </li>
                        <li className='icon-social'>
                        <i class="fab fa-google-plus-g"></i>
                        </li>
                        <li className='icon-social'>
                        <i class="fab fa-instagram"></i>
                        </li>
                    </ul>
                </div>
                <div className='col-12 col-md-3 p-4'>
                <i class="fas fa-phone-alt"></i> +84 971 096 110
                </div>
                <div className='col-12 col-md-3 py-4'>
                <i class="far fa-envelope-open"></i> lienkieu2000@gmail.com
                </div>
            </div>
        </div>
        <footer className='bg-dark'>
            <p className='text-center text-white p-3 m-0'>Kiều Thị Bích Liên @ lienkieu2000@gmail.com</p>
        </footer>
    </section>
  )
}
