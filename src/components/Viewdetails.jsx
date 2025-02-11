import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useUserSingleProductQuery } from "../hooks/react-query/product_query";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice/CartSlice";

const ViewDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useUserSingleProductQuery(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (isError || !product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>View Details</h1>
                <p className="mb-4">
                  Explore the details of this product before making a purchase.
                </p>
                <p>
                  <Link to="/shop" className="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              {/* <div className="hero-img-wrap">
                <img src={product.image} alt={product.name} className="img-fluid" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>${product.price.toFixed(2)}</h4>
            <button className="btn btn-primary mt-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
