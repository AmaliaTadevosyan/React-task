import React, { useState } from "react";
import { connect } from "react-redux";
//import { Redirect, useLocation } from "react-router-dom";
import { login } from "../../../actions/actions";
import "./Login.css";

const Login = (props) => {
  console.log(props.errorMessage);
  const [values, setValues] = useState({ name: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.login(values, () => {
      setIsLoggedIn(true);
    });
  };

  if (isLoggedIn) {
    // {/* <Redirect to='/profile' />; */}

    props.history.push("/profile");
  }

  return (
    <section className='login'>
      <form className='login-form' onSubmit={onSubmit}>
        {!props.isAuth && <p className='error-msg'>{props.errorMessage}</p>}
        <div className='input-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div className='input-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            placeholder='Your password'
            name='password'
            value={values.password}
            onChange={onChange}
          />
        </div>
        <button type='submit' className='btn-submit'>
          Submit
        </button>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.errorMessage,
  isAuth: state.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (params, cb) => dispatch(login(params, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
