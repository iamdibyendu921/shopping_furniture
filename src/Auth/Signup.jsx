import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Redux/cartSlice/AuthSlice'; // ✅ Import correct action

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    dispatch(signup(user)); 

    toast.success('Signup successful!', {
      position: 'top-right',
      duration: 3000,
    });

    setTimeout(() => {
      navigate('/login');
    }, 1000); 
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email')}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                {...register('password')}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                {...register('confirmPassword')}
              />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
