import React from "react";
import "./Header.scss" ;
import { Buscador } from "../buscador/buscador";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { CartWidget } from "../CartWidget";

export const Header = (totalCount ) => {
  
  
  return (

    <div >
      {/* <CartWidget totalCount = {totalCount} /> */}
   
    <div>
      
      {/* <Buscador/> */}




      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container"><a className="navbar-brand d-inline-flex" href="index.html"><img className="d-inline-block" src="assets/img/gallery/logo.png" alt="logo" /><span className="text-1000 fs-0 fw-bold ms-2">Magnate</span></a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2"><a className="nav-link fw-medium active" aria-current="page" href="#categoryWomen">Women</a></li>
              <li className="nav-item px-2"><a className="nav-link fw-medium" href="#header">Men</a></li>
              <li className="nav-item px-2"><a className="nav-link fw-medium" href="#collection">Collection</a></li>
              <li className="nav-item px-2"><a className="nav-link fw-medium" href="#outlet">Outlet</a></li>
            </ul>
            <form className="d-flex"><a className="text-1000" href="#!">
                <svg className="feather feather-phone me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg></a><a className="text-1000" href="#!">
                <svg className="feather feather-shopping-cart me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg></a><a className="text-1000" href="#!">
                <svg className="feather feather-search me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg></a><a className="text-1000" href="#!">
                <svg className="feather feather-user me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg></a><a className="text-1000" href="#!">
                <svg className="feather feather-heart me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg></a></form>
          </div>
        </div>
      </nav>

      {/* <section className="py-11 bg-light-gradient border-bottom border-white border-5">
      <div className="bg-holder overlay overlay-light" src="background-image:url(assets/img/gallery/header-bg.png);background-size:cover;">
        </div>
        <div className="bg-holder overlay overlay-light" >
        </div>
   

        <div className="container">
          <div className="row flex-center">
            <div className="col-12 mb-10">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-normal"> With an outstanding style, only for you</h1>
                <h1 className="fs-4 fs-lg-8 fs-md-6 fw-bold">Exclusively designed for you</h1>
              </div>
            </div>
          </div>
        </div>
      </section>


<div className="container">
  <div className="row g-0">
    <div className="col-md-6">
      <div className="card card-span h-100 text-white"> <img className="img-fluid" src="assets/img/gallery/her.png" width="790" alt="..." />
        <div className="card-img-overlay d-flex flex-center"> <a className="btn btn-lg btn-light" href="#!">For Her</a></div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card card-span h-100 text-white"> <img className="img-fluid" src="assets/img/gallery/him.png" width="790" alt="..." />
        <div className="card-img-overlay d-flex flex-center"> <a className="btn btn-lg btn-light" href="#!">For Him </a></div>
      </div>
    </div>
  </div>
</div>

<br></br><br></br>
<div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                <h4 className="text-800">Exclusive collection 2021</h4>
                <h1 className="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Be exclusive</h1>
                <p className="mb-5 fs-1">The best everyday option in a Super Saver range within a reasonable price. It is our responsibility to keep you 100 percent stylish. Be smart &amp; , trendy with us.</p>
                <div className="d-grid gap-2 d-md-block"><a className="btn btn-lg btn-dark" href="#" role="button">Explore</a></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/outfit.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">Outfit
                      <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row h-100 g-2 py-1">
            <div className="col-md-4">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/vanity-bag.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">Vanity Bags
                      <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                      </svg></a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/hat.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">Hats
                      <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                      </svg></a></div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/high-heels.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">High Heels
                      <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
   <br></br><br></br>
   <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fs-3 fs-lg-5 lh-sm mb-3">Checkout New Arrivals</h5>
            </div>
            <div className="col-12">
              <div className="carousel slide" id="carouselNewArrivals" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/full-body.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Flat Hill Slingback</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/formal-coat.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Ocean Blue Ring</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/ocean-blue.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Brown Leathered Wallet</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/sweater.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Silverside Wristwatch</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/full-body.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Flat Hill Slingback</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/formal-coat.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Ocean Blue Ring</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/ocean-blue.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Brown Leathered Wallet</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/sweater.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Silverside Wristwatch</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/full-body.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Flat Hill Slingback</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/formal-coat.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Ocean Blue Ring</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/ocean-blue.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Brown Leathered Wallet</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/sweater.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Silverside Wristwatch</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/full-body.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Flat Hill Slingback</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/formal-coat.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Ocean Blue Ring</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/ocean-blue.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Brown Leathered Wallet</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/sweater.png" alt="..." />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <h6 className="text-primary">$175</h6>
                            <p className="text-400 fs-1">Jumper set for Women</p>
                            <h4 className="text-light">Silverside Wristwatch</h4>
                          </div><a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselNewArrivals" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselNewArrivals" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>  <br></br>


        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Shop By Category</h5>
            </div>
            <div className="col-12">
              <nav>
                <div className="nav nav-tabs majestic-tabs mb-4 justify-content-center" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-women-tab" data-bs-toggle="tab" data-bs-target="#nav-women" type="button" role="tab" aria-controls="nav-women" aria-selected="true">For Women</button>
                  <button className="nav-link" id="nav-men-tab" data-bs-toggle="tab" data-bs-target="#nav-men" type="button" role="tab" aria-controls="nav-men" aria-selected="false">For Men</button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-women" role="tabpanel" aria-labelledby="nav-women-tab">
                    <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab-women" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-wtshirt-tab" data-bs-toggle="pill" data-bs-target="#pills-wtshirt" type="button" role="tab" aria-controls="pills-wtshirt" aria-selected="true">T-Shirt</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-dresses-tab" data-bs-toggle="pill" data-bs-target="#pills-dresses" type="button" role="tab" aria-controls="pills-dresses" aria-selected="false">Shirt</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-wshoes-tab" data-bs-toggle="pill" data-bs-target="#pills-wshoes" type="button" role="tab" aria-controls="pills-wshoes" aria-selected="false">Shoes</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-wwatch-tab" data-bs-toggle="pill" data-bs-target="#pills-wwatch" type="button" role="tab" aria-controls="pills-wwatch" aria-selected="false">Watch </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-wsunglasses-tab" data-bs-toggle="pill" data-bs-target="#pills-wsunglasses" type="button" role="tab" aria-controls="pills-wsunglasses" aria-selected="false">Sunglasses </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-wbagpacks-tab" data-bs-toggle="pill" data-bs-target="#pills-wbagpacks" type="button" role="tab" aria-controls="pills-wbagpacks" aria-selected="false">Bagpacks </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContentWomen">
                      <div className="tab-pane fade" id="pills-dresses" role="tabpanel" aria-labelledby="pills-dresses-tab">
                        <div className="carousel slide" id="carouselCategoryDresses" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryDresses" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryDresses" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade show active" id="pills-wtshirt" role="tabpanel" aria-labelledby="pills-wtshirt-tab">
                        <div className="carousel slide" id="carouselCategoryWTshirt" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/red-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Red T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/pink-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Pink T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/orange-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Orange T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/purple-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Purple T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/red-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Red T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/pink-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Pink T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/orange-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Orange T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/purple-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Purple T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/red-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Red T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/pink-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Pink T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/orange-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Orange T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/purple-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Purple T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/red-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Red T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/pink-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Pink T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/orange-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Orange T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/purple-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Purple T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryWTshirt" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryWTshirt" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-wshoes" role="tabpanel" aria-labelledby="pills-wshoes-tab">
                        <div className="carousel slide" id="carouselCategoryWShoes" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryWShoes" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryWShoes" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-wwatch" role="tabpanel" aria-labelledby="pills-wwatch-tab">
                        <div className="carousel slide" id="carouselCategoryWwatch" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryWwatch" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryWwatch" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-wsunglasses" role="tabpanel" aria-labelledby="pills-wsunglasses-tab">
                        <div className="carousel slide" id="carouselCategoryWSunglasses" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryWSunglasses" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryWSunglasses" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-wbagpacks" role="tabpanel" aria-labelledby="pills-wbagpacks-tab">
                        <div className="carousel slide" id="carouselCategoryWBagpacks" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-1.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-2.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-3.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-4.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryWBagpacks" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryWBagpacks" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-men" role="tabpanel" aria-labelledby="nav-men-tab">
                    <ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab-men" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-tshirt-tab" data-bs-toggle="pill" data-bs-target="#pills-tshirt" type="button" role="tab" aria-controls="pills-tshirt" aria-selected="true">T-Shirt</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-shirt-tab" data-bs-toggle="pill" data-bs-target="#pills-shirt" type="button" role="tab" aria-controls="pills-shirt" aria-selected="false">Shirt</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-shoes-tab" data-bs-toggle="pill" data-bs-target="#pills-shoes" type="button" role="tab" aria-controls="pills-shoes" aria-selected="false">Shoes</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-watch-tab" data-bs-toggle="pill" data-bs-target="#pills-watch" type="button" role="tab" aria-controls="pills-watch" aria-selected="false">Watch </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-sunglasses-tab" data-bs-toggle="pill" data-bs-target="#pills-sunglasses" type="button" role="tab" aria-controls="pills-sunglasses" aria-selected="false">Sunglasses </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-bagpacks-tab" data-bs-toggle="pill" data-bs-target="#pills-bagpacks" type="button" role="tab" aria-controls="pills-bagpacks" aria-selected="false">Bagpacks </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContentMen">
                      <div className="tab-pane fade show active" id="pills-tshirt" role="tabpanel" aria-labelledby="pills-tshirt-tab">
                        <div className="carousel slide" id="carouselCategoryTshirt" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/white-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sky-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sky T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/yellow-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Yellow T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/black-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/white-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sky-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sky T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/yellow-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Yellow T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/black-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/white-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sky-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sky T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/yellow-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Yellow T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/black-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/white-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sky-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sky T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/yellow-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Yellow T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/black-tshirt.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black T-Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryTshirt" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryTshirt" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-shirt" role="tabpanel" aria-labelledby="pills-shirt-tab">
                        <div className="carousel slide" id="carouselCategoryShirt" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Gray Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">White Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shirt-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Black Shirt</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryShirt" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryShirt" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-shoes" role="tabpanel" aria-labelledby="pills-shoes-tab">
                        <div className="carousel slide" id="carouselCategoryShoes" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/shoe-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Shoe</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryShoes" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryShoes" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-watch" role="tabpanel" aria-labelledby="pills-watch-tab">
                        <div className="carousel slide" id="carouselCategoryWatch" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/watch-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Watch</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryWatch" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryWatch" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-sunglasses" role="tabpanel" aria-labelledby="pills-sunglasses-tab">
                        <div className="carousel slide" id="carouselCategorySunglasses" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/sunglass-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Sunglass</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategorySunglasses" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategorySunglasses" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                      <div className="tab-pane fade" id="pills-bagpacks" role="tabpanel" aria-labelledby="pills-bagpacks-tab">
                        <div className="carousel slide" id="carouselCategoryBagpacks" data-bs-touch="false" data-bs-interval="false">
                          <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-5.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-6.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-7.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="assets/img/gallery/bagpacks-8.png" alt="..." />
                                    <div className="card-img-overlay ps-0"> </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">Bagpacks</h5>
                                      <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$500</span><span className="text-primary">$275</span></div>
                                    </div><a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselCategoryBagpacks" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselCategoryBagpacks" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next </span></button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <br></br>  <br></br> */}
{/* 
        ///////////////////// URBAN HISTORY ///////////////////////////// */}

{/* <div className="container">
          <div className="row h-100 gx-2">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/urban.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="p-5 p-md-2 p-xl-5">
                    <h1 className="fs-md-4 fs-lg-7 text-light">Urban Stories </h1>
                    <h5 className="fs-2 text-light">collection</h5>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/country.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
                    <h1 className="fs-md-4 fs-lg-7 text-light">Urban Stories </h1>
                    <h5 className="fs-2 text-light">collection</h5>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div>
          </div>
        </div> */}

<br></br>  <br></br>     {/* ///////////////////////////////OUTLET ///////////////////////////////////////////////// */}

        {/* <div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/summer.png" alt="..." />
                <div className="card-img-overlay bg-dark-gradient rounded-0">
                  <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
                    <h1 className="fs-md-4 fs-lg-7 text-light">Summer of '23</h1>
                  </div>
                </div><a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div className="row h-100 g-0">
                <div className="col-md-6 h-100">
                  <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/sunglasses.png" alt="..." />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Sunglasses</h3>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/footwear.png" alt="..." />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Footwear</h3>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/hat-black-border.png" alt="..." />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Hat</h3>
                      </div>
                    </div><a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white"><img className="card-img h-100" src="assets/img/gallery/watches.png" alt="..." />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Watches</h3>
                      </div>
                    </div><a className="stretched-link" href="#!"> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 


<br></br><br></br>






<div className="container">
          <div className="row">
            <div className="col-6 col-lg-2 mb-3">
              <h5 className="lh-lg fw-bold text-1000">Company Info</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">About Us</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Affiliate</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Fashion Blogger</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5 className="lh-lg fw-bold text-1000">Help &amp; Support</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Shipping Info</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Refunds</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">How to Order</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">How to Track</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Size Guides</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5 className="lh-lg fw-bold text-1000">Customer Care</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Contact Us</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Payment Methods</a></li>
                <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Bonus Point</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-auto ms-auto">
              <h5 className="lh-lg fw-bold text-1000">Signup For The Latest News</h5>
              <div className="row input-group-icon mb-5">
                <div className="col-12">
                  <input className="form-control input-box" type="email" placeholder="Enter Email" aria-label="email" />
                  <svg className="bi bi-arrow-right-short input-box-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#424242" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                  </svg>
                </div>
              </div>
              <p className="text-800">
                <svg className="feather feather-phone me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg><span className="text-800">+3930219390</span>
              </p>
              <p className="text-800">
                <svg className="feather feather-mail me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg><span className="text-800">something@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="border-bottom border-3"></div>
          <div className="row flex-center my-3">
            <div className="col-md-6 order-1 order-md-0">
              <p className="my-2 text-1000 text-center text-md-start"> Made with&nbsp;
                <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#EB6453" viewBox="0 0 16 16">
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                </svg>&nbsp;by&nbsp;<a className="text-800" href="https://themewagon.com/" target="_blank">Maximiliano Ruano - Full Stack Developer </a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-end"><a href="#!"><span className="me-4" data-feather="facebook"></span></a><a href="#!"> <span className="me-4" data-feather="instagram"></span></a><a href="#!"> <span className="me-4" data-feather="youtube"></span></a><a href="#!"> <span className="me-4" data-feather="twitter"></span></a></div>
            </div>
          </div>
        </div>
 */}





   </div>
   </div>









    
    
  );
};
