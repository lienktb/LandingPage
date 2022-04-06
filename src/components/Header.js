import React , {useState, useEffect} from "react";

export default function Header() {
  const [bgNav, setBgNav] =  useState('top');
  useEffect(()=>{
    const handleNav = ()=>{
      if(window.scrollY >= 100){
        setBgNav('moved');
      }else{
        setBgNav('top');
      }
    }
    document.addEventListener('scroll', handleNav);

    return () => {
      document.removeEventListener('scroll', handleNav)
    }
  },[bgNav])
  console.log(bgNav);
  return (
    <div className="fixed-top">
      <nav className="navbar-custom navbar navbar-expand-lg navbar-dark p-3"
          style={{backgroundColor: bgNav === "top" ? "rgb(0, 0, 0, 0)" : "rgb(0, 0, 0.5)" }}  
        >
        <div className="container">
          <a className="logo navbar-brand me-5" href="#">
            DORSIN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                    Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    Blog
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
              <button type="button" className="btn btn-primary text-white rounded-pill px-4" >
                Search
              </button>

          </div>
        </div>
      </nav>
    </div>
  );
}
