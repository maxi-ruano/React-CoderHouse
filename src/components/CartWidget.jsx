import React from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const CartWidget= (stock) => {

    return (

    

      <div>
         <div className="order-lg-last col-lg-5 col-sm-8 col-8">
          <div className="d-flex float-end">
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-user-alt m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Sign in</p> </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-heart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">Wishlist</p> </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i><p className="d-none d-md-block mb-0">My cart :</p> </a>
          </div>
        </div>
      {/* <ShoppingCartIcon  /> */}
    </div>


    
    )
}