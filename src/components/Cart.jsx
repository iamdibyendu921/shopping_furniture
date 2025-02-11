import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Redux/cartSlice/CartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const {isLoggedIn} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const userHasAccount = isLoggedIn;

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceedToCheckout = (e) => {
    console.log("Button clicked!");
  
    if (cart.length === 0) {
      toast.error("Please add products to your cart!", {
        position: "top-right",
        duration: 3000,
      });
      return;
    }
  
    if (!userHasAccount) {
      e.preventDefault();
      toast.error("Please Login to place an order", {
        position: "top-right",
        duration: 3000,
      });
    } else {
      navigate("/checkout", { state: { cart, subtotal } } );
    }
  };
  
  

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} alt={product.name} className="img-fluid" style={{ width: "50px" }} />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <button onClick={() => dispatch(decreaseQuantity(product))}>-</button>
                      <span className="mx-2">{product.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
                    </td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => dispatch(removeFromCart(product))}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h4>Cart Totals</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span>Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <span>Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>
              </div>
              <button className="btn btn-black btn-lg py-3 btn-block" onClick={handleProceedToCheckout}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
