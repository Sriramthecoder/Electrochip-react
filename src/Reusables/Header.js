import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div>
       <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt=""/>
            <span>
              Electrochip
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="s-1"> </span>
            <span className="s-2"> </span>
            <span className="s-3"> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className= {"nav-item "+ (props.name == 'home'?'active':null)}>
                  <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className= {"nav-item "+ (props.name == 'about'?'active':null)}>
                  <a className="nav-link" href="/about"> About</a>
                </li>
                <li className= {"nav-item "+ (props.name == 'service'?'active':null)}>
                  <a className="nav-link" href="/service"> Service </a>
                </li>
                <li className= {"nav-item "+ (props.name == 'blog'?'active':null)}>
                  <a className="nav-link" href="/blog"> Blog </a>
                </li>
                <li className= {"nav-item "+ (props.name == 'contact'?'active':null)}>
                  <Link className="nav-link" to="/contact">Contact </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header
