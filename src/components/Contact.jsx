import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
    navigate("/message");
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Contact</h1>
                <p className="mb-4">Have any questions? Feel free to reach out to us!</p>
                <p>
                  <Link to="/shop" className="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <Link to="/blog" className="btn btn-white-outline">
                    Explore
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* From */}
      <div className="untree_co-section">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" >
                          First Name
                        </label>
                        <input type="text" className="form-control" id="firstname" {...register("firstname")} />
                        <p className="text-danger">{errors.fname?.message}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black">
                          Last Name
                        </label>
                        <input type="text" className="form-control" id="lastname" {...register("lastname")} />
                        <p className="text-danger">{errors.lname?.message}</p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-black">
                      Email Address
                    </label>
                    <input type="email" className="form-control" id="email" {...register("email")} />
                    <p className="text-danger">{errors.email?.message}</p>
                  </div>

                  <div className="form-group mb-5">
                    <label className="text-black">
                      Message
                    </label>
                    <textarea className="form-control" id="message" cols="30" rows="5" {...register("message")}></textarea>
                    <p className="text-danger">{errors.message?.message}</p>
                  </div>

                  <button type="submit" className="btn btn-primary-hover-outline">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
