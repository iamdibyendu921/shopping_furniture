import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { login } from '../Redux/cartSlice/AuthSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const validCredentials = {
      email: 'dibyendu@example.com',
      password: 'password123',
    };

    try {
      
      if (data.email === validCredentials.email && data.password === validCredentials.password) {
        dispatch(login());
        navigate('/cart');

        toast.success('Login successful!', {
          position: 'top-right',
          duration: 3000,
        });
      } else {
        
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error.message || 'Login failed', {
        position: 'top-center',
        duration: 3000,
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>
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

            <button type="submit" className="btn btn-primary mt-3">Login</button>
          </form>
          <p className="mt-3">
            New user? <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
