import React from 'react';
import logo from './logo.svg';
import img1 from './card1.png';
import img2 from './card2.png';
import img3 from './card3.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="container">
        <div className="row">
          {/* Blog Post 1 */}
          <div className="col">
            <div className="card">
              <img src={img1} className="card-img-top" alt="Blog Post 1" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue, erat in imperdiet viverra, purus quam tincidunt purus, in fermentum orci leo et metus.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="col">
            <div className="card">
              <img src={img2} className="card-img-top" alt="Blog Post 2" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue, erat in imperdiet viverra, purus quam tincidunt purus, in fermentum orci leo et metus.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="col">
            <div className="card">
              <img src={img3} className="card-img-top" alt="Blog Post 3" />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue, erat in imperdiet viverra, purus quam tincidunt purus, in fermentum orci leo et metus.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <div className="container2">
          <p className="mb-0">© 2024 React. All rights reserved.</p>
          <img src={logo} className="App-logo" alt="logo" />        </div>
      </footer>
    </div>
  );
}

export default App;