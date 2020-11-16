import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, FormGroup, Label } from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.css";
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  // On form submit run this function
  const registerHandler = () => {
    let formData2 = new FormData();
    formData2.append("email", formData.email);
    formData2.append("password", formData.password);
    console.log("clicked");

    // send login details to database
    const url = "/react-backend/verificationLogin.php";
    axios
      .post(url, formData2)
      // if login details sucessful make auth true and save cookie
      .then((res) => {
        console.log(res);
        props.authHandler(true);
        //Cookies.set("Token", res.data.token, { expires: 7 });
      })
      // if login failed do nothing
      .catch((err) => {
        console.log(err);
        //props.authHandler(true); //REMOVE LATER
        // Cookies.set("Token", "8s6d9a87s98d69s7atd9sa7d9", { expires: 7 }); //REMOVE LATER
      });
  };
  return (
    <>
      <h1>Login</h1>
      <AvForm className='form' onValidSubmit={registerHandler}>
        <FormGroup>
          <AvField
            label='Email'
            type='email'
            name='email'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            type='password'
            name='password'
            label='Password'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button tag={Link} to="/BusinessMain">Submit</Button>
        </FormGroup>
      </AvForm>
    </>
  );
};

export default Login;
