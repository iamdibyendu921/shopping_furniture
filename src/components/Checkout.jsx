import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
  c_country: yup.string().required('Country is required'),
  c_fname: yup.string().required('First name is required'),
  c_lname: yup.string().required('Last name is required'),
  c_address: yup.string().required('Address is required'),
  c_state_country: yup.string().required('State / Country is required'),
  c_postal_zip: yup.string().required('Postal/Zip code is required'),
  c_email_address: yup.string().email('Invalid email').required('Email address is required'),
  c_phone: yup.string().required('Phone number is required'),
  
});

const Checkout = () => {
  const location = useLocation(); // Access passed state
  // const { cart, subtotal } = location.state || {};
  const { cart = [], subtotal = 0 } = location.state || {};

  const navigate = useNavigate();

  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePlaceOrder = () => {
    navigate('/thankyou');
  };

  const onSubmit = (data) => {
    console.log(data);
    handlePlaceOrder();
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Checkout</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border p-4 rounded" role="alert">
                  Returning customer? <a to="#">Click here</a> to login
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <div className="form-group">
                    <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                    <select id="c_country" className="form-control" {...register('c_country')}>
                      <option value="">Select a country</option>
                      <option value="1">India</option>
                      <option value="2">United Kingdom</option>
                      <option value="3">France</option>
                      <option value="4">Spain</option>
                    </select>
                    {errors.c_country && <p className="text-danger">{errors.c_country.message}</p>}
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_fname" {...register('c_fname')} />
                      {errors.c_fname && <p className="text-danger">{errors.c_fname.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_lname" {...register('c_lname')} />
                      {errors.c_lname && <p className="text-danger">{errors.c_lname.message}</p>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_address" {...register('c_address')} placeholder="Street address" />
                      {errors.c_address && <p className="text-danger">{errors.c_address.message}</p>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_state_country" className="text-black">State<span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_state_country" {...register('c_state_country')} />
                      {errors.c_state_country && <p className="text-danger">{errors.c_state_country.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_postal_zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_postal_zip" {...register('c_postal_zip')} />
                      {errors.c_postal_zip && <p className="text-danger">{errors.c_postal_zip.message}</p>}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_email_address" {...register('c_email_address')} />
                      {errors.c_email_address && <p className="text-danger">{errors.c_email_address.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" id="c_phone" {...register('c_phone')} placeholder="Phone Number" />
                      {errors.c_phone && <p className="text-danger">{errors.c_phone.message}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-12">
                    <h2>Your Order</h2>
                    <div className="p-3 p-lg-5 border bg-white">
                      <table className="table site-block-order-table mb-5">
                        <thead>
                          <th>Product</th>
                          <th>Total</th>
                        </thead>
                        <tbody>
                          {cart && cart.map((product) => (
                            <tr key={product.id}>
                              <td>{product.name} <strong className="mx-2">x</strong> {product.quantity}</td>
                              <td>${(product.price * product.quantity).toFixed(2)}</td>
                            </tr>
                          ))}
                          <tr>
                            <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                            <td className="text-black">${subtotal?.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                            <td className="text-black font-weight-bold"><strong>${subtotal?.toFixed(2)}</strong></td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Only enable Place Order button if form is valid */}
                      <button className="btn btn-primary" type="submit">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
