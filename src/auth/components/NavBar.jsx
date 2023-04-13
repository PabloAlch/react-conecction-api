import React from 'react'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">QuironAPP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

           
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
           </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <i class="fa fa-youtube" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
      <div>
      
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            esto es una prueba
          </div>
        </div>
      </div>

    </>
  )
}
