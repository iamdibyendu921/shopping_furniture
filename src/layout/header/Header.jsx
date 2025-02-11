import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">HOME DECOR<span>.</span></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active"><Link className="nav-link" to="/home">Home</Link></li>
              <li><Link className="nav-link" to="/shop">Shop</Link></li>
              <li><Link className="nav-link" to="/about">About us</Link></li>
              <li><Link className="nav-link" to="/service">Services</Link></li>
              <li><Link className="nav-link" to="/blog">Blog</Link></li>
              <li><Link className="nav-link" to="/contact">Contact us</Link></li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li><Link className="nav-link" to="/login"><img src="images/user.svg" alt="User"/></Link></li>
              <li><Link className="nav-link position-relative" to="/cart"><img src="images/cart.svg" alt="Cart"/>
                  {cartItemCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
