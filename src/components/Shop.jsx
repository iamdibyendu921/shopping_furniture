import React from "react";
import { useUserGetquery } from "../hooks/react-query/product_query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/cartSlice/CartSlice";
import { toast } from "sonner";
import Loader from "../UI/Loader";

const Shop = () => {
  const { data, isLoading, isError } = useUserGetquery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart!", {
      position: "top-right",
      duration: 6000,
    });
    navigate("/cart");
  };

  const handleViewDetails = (id) => {
    navigate(`/product/details/${id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {data?.map((product) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
                <div className="product-item">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">{product.name}</h3>
                  <strong className="product-price">${product.price.toFixed(2)}</strong>
                  <br />
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-secondary mt-2 ms-2"
                    onClick={() => handleViewDetails(product.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

